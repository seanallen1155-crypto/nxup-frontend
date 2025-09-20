// src/components/ui/forms/OtpInput.tsx
"use client";

import { useState, useEffect, useRef } from "react";

interface OtpInputProps {
  length: number;
  context?: string;
  state?: "default" | "error" | "success" | "disabled";
  errorMessage?: string;
  lockoutMessage?: string;
  onChange: (val: string) => void;
  onComplete: (val: string) => void;
  shakeKey?: number;
}

export function OtpInput({
  length,
  state = "default",
  errorMessage,
  lockoutMessage,
  onChange,
  onComplete,
  shakeKey,
}: OtpInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const [pasteError, setPasteError] = useState<string | null>(null);
  const [animateShake, setAnimateShake] = useState(false);
  const [lastUpdatedIndex, setLastUpdatedIndex] = useState<number | null>(null);
  const [staggeredFill, setStaggeredFill] = useState<number[]>([]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // Track mount so shakeKey doesn’t trigger on first render
  const didMountRef = useRef(false);

  // Emit code changes
  useEffect(() => {
    const code = values.join("");
    onChange(code);
    if (code.length === length && !values.includes("")) {
      onComplete(code);
    }
  }, [values, length, onChange, onComplete]);

  // Focus first box on mount
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // External error trigger (via shakeKey)
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return; // ✅ skip first render
    }

    if (shakeKey !== undefined) {
      triggerErrorReset(errorMessage || "Code not recognized. Try again.");
    }
  }, [shakeKey]);

  const triggerErrorReset = (msg: string) => {
    setPasteError(msg);
    setAnimateShake(true);

    setTimeout(() => {
      setAnimateShake(false);
      setValues(Array(length).fill(""));
      setPasteError(null);
      inputsRef.current[0]?.focus(); // ✅ reset to first box
    }, 500);
  };

  const handleDigitInput = (i: number, digit: string) => {
    if (!/^[0-9]$/.test(digit)) return;

    const newVals = [...values];
    newVals[i] = digit;
    setValues(newVals);
    setLastUpdatedIndex(i);

    if (i < length - 1) {
      inputsRef.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (values[i] === "") {
        if (i > 0) {
          inputsRef.current[i - 1]?.focus();
        }
      } else {
        const newVals = [...values];
        newVals[i] = "";
        setValues(newVals);
        e.preventDefault();
      }
    }

    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      handleDigitInput(i, e.key);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, i: number) => {
    e.preventDefault();
    setPasteError(null);

    const pasted = e.clipboardData.getData("text");
    const digits = pasted.replace(/\D/g, "").split("");

    if (digits.length === 1) {
      handleDigitInput(i, digits[0]);
      return;
    }

    if (digits.length === length) {
      setValues(Array(length).fill("")); // clear first
      setStaggeredFill(digits.map((_, idx) => idx)); // trigger staggered animation
      digits.forEach((digit, idx) => {
        setTimeout(() => {
          setValues((prev) => {
            const newVals = [...prev];
            newVals[idx] = digit;
            return newVals;
          });
          if (idx === length - 1) {
            inputsRef.current[length - 1]?.focus();
            onComplete(digits.join(""));
          }
        }, idx * 75); // ✅ faster stagger (75ms per digit)
      });
    } else {
      triggerErrorReset("Invalid code. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
      <div
        style={{ display: "flex", gap: "8px", justifyContent: "center" }}
        className={animateShake ? "animate-shake" : ""}
      >
        {values.map((val, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            value={val}
            inputMode="numeric"
            autoComplete="one-time-code"
            onKeyDown={(e) => handleKeyDown(i, e)}
            onChange={() => {}}
            onPaste={(e) => handlePaste(e, i)}
            aria-label={`Digit ${i + 1} of ${length}`}
            aria-describedby={pasteError ? "otp-error" : undefined}
            className={
              (lastUpdatedIndex === i && val !== "" ? "animate-fadeIn " : "") +
              (staggeredFill.includes(i) ? "animate-fadeIn " : "")
            }
            style={{
              width: "40px",
              height: "48px",
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "'Satoshi', sans-serif",
              border:
                state === "error" || pasteError
                  ? "2px solid #B3261E"
                  : state === "success"
                  ? "2px solid #176B4D"
                  : "1px solid #CCCCCC",
              borderRadius: "8px",
              backgroundColor:
                state === "error" || pasteError
                  ? "#FDECEA"
                  : state === "success"
                  ? "#F0FFF4"
                  : "#FFFFFF",
              transition: "all 150ms ease",
            }}
          />
        ))}
      </div>

      {(state === "error" && errorMessage) || pasteError ? (
        <div
          id="otp-error"
          role="alert"
          aria-live="assertive"
          style={{
            fontSize: "14px",
            color: "#B3261E",
            marginTop: "8px",
            textAlign: "center",
          }}
        >
          {pasteError || errorMessage}
        </div>
      ) : null}

      {state === "disabled" && lockoutMessage && (
        <div
          id="otp-lockout"
          aria-live="assertive"
          style={{
            fontSize: "14px",
            color: "#B3261E",
            marginTop: "8px",
            textAlign: "center",
          }}
        >
          {lockoutMessage}
        </div>
      )}
    </div>
  );
}
