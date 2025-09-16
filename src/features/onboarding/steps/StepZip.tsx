"use client";

import { useState } from "react";
import { InputDark } from "@/components/ui/forms/InputDark";
import { SecondaryCTAButton } from "@/components/ui/actions/SecondaryCTAButton";

// Mock zip → state map (extend as needed for testing)
const mockZipMap: Record<string, string> = {
  "07648": "New Jersey",
  "10001": "New York",
  "30301": "Georgia",
  "33131": "Florida",
  "60601": "Illinois",
  "94105": "California",
};

interface StepZipProps {
  onNext: () => void;
}

export function StepZip({ onNext }: StepZipProps) {
  const [zip, setZip] = useState("");
  const [state, setState] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isValidZip = /^\d{5}$/.test(zip);

  const handleZipChange = (value: string) => {
    setZip(value);

    if (/^\d{5}$/.test(value)) {
      const matchedState = mockZipMap[value];
      if (matchedState) {
        setState(matchedState);
        setError(null);
      } else {
        setState(null);
        setError("Hmm, we couldn’t match that zip. Double-check and try again.");
      }
    } else {
      setState(null);
      setError(null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Headline */}
      <h2
        style={{
          fontFamily: "'Teko', sans-serif",
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: "110%",
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        What’s your home zip code?
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "130%",
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          maxWidth: "28ch",
          marginBottom: "20px",
          alignSelf: "center",
        }}
      >
        This just tells us your state so we can confirm NIL is allowed for you.
      </p>

      {/* Zip Input */}
      <div style={{ marginTop: "12px", marginBottom: "12px", alignSelf: "center" }}>
        <InputDark
          type="text"
          inputMode="numeric"
          pattern="\d*"
          name="zip"
          id="zip"
          placeholder="ZIP"
          aria-label="Zip Code"
          maxLength={5}
          value={zip}
          onChange={(e) => handleZipChange(e.target.value)}
          className="text-center tracking-widest w-[96px]"
        />
      </div>

      {/* Inline confirmation / error */}
      {state && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "#34C759",
            textAlign: "center",
          }}
        >
          Got it. Looks like you play in {state}.
        </p>
      )}
      {error && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "#FF3B30",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      )}

      {/* Continue Button */}
      <SecondaryCTAButton
        active={isValidZip && !error}
        disabled={!isValidZip || !!error}
        onClick={onNext}
      >
        Continue
      </SecondaryCTAButton>
    </div>
  );
}
