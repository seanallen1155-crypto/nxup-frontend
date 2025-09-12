"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Phone, CheckCircle } from "lucide-react";
import { BrowserLogo } from "@/components/ui/logo/BrowserLogo";
import { BrowserFooter } from "@/components/ui/footer/BrowserFooter";
import { SolidCard } from "@/components/ui/cards/SolidCard";
import { InputLight } from "@/components/ui/forms/InputLight";
import { ParentCTAButton } from "@/components/ui/actions/ParentCTAButton";

// Error messages
const ERROR_MESSAGES = {
  WRONG_CODE: "That code doesn’t match. Try again.",
  EXPIRED: "That code has expired. Request a new one.",
  TOO_MANY: "Too many tries. Please request a new code.",
  NETWORK: "We had trouble verifying. Please try again.",
} as const;

export default function ParentApprovalPage() {
  const router = useRouter();
  const [values, setValues] = useState(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [cooldown, setCooldown] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  // Handle resend
  const handleResend = () => {
    if (cooldown > 0) return;
    setCooldown(30);
    setError(null);
    setValues(Array(6).fill(""));
    inputsRef.current[0]?.focus();
  };

  // Cooldown countdown
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prev) => (prev > 1 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  // Handle typing
  const handleChange = (val: string, index: number) => {
    const lastChar = val.slice(-1).replace(/\D/g, "");
    const newValues = [...values];
    newValues[index] = lastChar;
    setValues(newValues);

    if (lastChar && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("Text").replace(/\D/g, "");
    if (pasted.length === 6) {
      const newValues = pasted.split("").slice(0, 6);
      setValues(newValues);
      inputsRef.current[5]?.focus();
    }
  };

  // Mock submit validation
  const handleSubmit = () => {
    const code = values.join("");
    setError(null);

    if (code === "111111") {
      setError(ERROR_MESSAGES.WRONG_CODE);
    } else if (code === "222222") {
      setError(ERROR_MESSAGES.EXPIRED);
    } else if (code === "333333") {
      setError(ERROR_MESSAGES.TOO_MANY);
    } else if (code === "444444") {
      setError(ERROR_MESSAGES.NETWORK);
    } else if (code.length < 6) {
      setError("Please enter all 6 digits.");
    } else {
      setError(null);
      router.push("/parent/approval/consent");
      return;
    }

    // Trigger shake on error
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-white">
      {/* Banner/Header */}
      <div
        className="w-full h-[160px] relative shadow-md overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #4A4A4A, #2E2E2E)",
        }}
      >
        {/* CSS noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at center, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 100%)",
            backgroundSize: "3px 3px",
          }}
        />

        {/* bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <div className="absolute top-8 left-6 z-10">
          <BrowserLogo theme="dark" variant="wide" />
        </div>
      </div>

      {/* Card anchored to banner */}
      <div className="relative z-10 flex flex-1 items-start justify-center -mt-[80px]">
        <SolidCard
          className="w-[90vw] max-w-[600px] min-h-[400px] rounded-2xl shadow-md"
          style={{ backgroundColor: "white" }}
        >
          <div className="flex flex-col items-center w-full">
            {/* Illustration */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Phone className="w-16 h-16 text-teal-600" strokeWidth={1.3} />
              <CheckCircle
                className="absolute -bottom-2 -right-4 w-8 h-8 text-teal-600 bg-white rounded-full"
                strokeWidth={2}
              />
            </div>

            {/* Hero Text */}
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              Verify it's you
            </h1>

            {/* Instruction */}
            <p className="mt-2 text-gray-600 text-center">
              Enter the 6-digit code we just sent to (555) 123-4567.
              {/* TODO: dynamically inject phone # */}
            </p>

            {/* OTP Input Fields */}
            <div
              className={`flex justify-center gap-2 mt-6 px-4 ${
                shake ? "animate-shake" : ""
              }`}
            >
              {values.map((val, i) => (
                <InputLight
                  key={i}
                  ref={(el) => (inputsRef.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={handlePaste}
                  variant="parent"
                  size="lg"
                  hasError={!!error}
                  className="w-10 sm:w-12 h-12 sm:h-14"
                />
              ))}
            </div>

            {/* Helper Text */}
            <p className="mt-2 text-xs text-gray-500 text-center">
              This step confirms you’re the parent or guardian.
            </p>

            {/* Error Message */}
            {error && (
              <p className="mt-3 text-sm text-red-600 text-center">{error}</p>
            )}

            {/* Continue Button */}
            <ParentCTAButton
              onClick={handleSubmit}
              disabled={values.some((v) => v === "")}
              className="mt-8"
            >
              Continue
            </ParentCTAButton>

            {/* Resend Control */}
            <div className="mt-3 text-sm text-center">
              {cooldown > 0 ? (
                <p className="text-gray-500">
                  New code sent. Try again in {cooldown}s.
                </p>
              ) : (
                <p className="text-gray-700">
                  Didn’t get the code?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-blue-600 underline cursor-pointer"
                  >
                    Resend
                  </button>
                </p>
              )}
            </div>
          </div>
        </SolidCard>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-8">
        <BrowserFooter theme="light" />
      </div>

      {/* Custom shake animation */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20%,
          60% {
            transform: translateX(-6px);
          }
          40%,
          80% {
            transform: translateX(6px);
          }
        }
        .animate-shake {
          animation: shake 0.4s ease;
        }
      `}</style>
    </div>
  );
}
