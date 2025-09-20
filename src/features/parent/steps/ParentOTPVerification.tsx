// src/features/parent/steps/ParentOTPVerification.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "remixicon/fonts/remixicon.css";
import { OtpInput } from "@/components/ui/forms/OtpInput";
import { ParentPrimaryCTA } from "@/components/ui/actions/ParentPrimaryCTA";

export default function ParentOTPVerification() {
  const router = useRouter();

  // ---- Config ----
  const MAX_ATTEMPTS = 3;
  const LOCKOUT_SECONDS = 30;
  const MOCK_VALID_CODES = ["123456", "654321", "111111"];

  // ---- Local state ----
  const [otp, setOtp] = useState("");
  const [otpState, setOtpState] = useState<
    "default" | "error" | "success" | "disabled"
  >("default");
  const [attempts, setAttempts] = useState(0);
  const [lockoutRemaining, setLockoutRemaining] = useState(0);
  const [shakeKey, setShakeKey] = useState(0);

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const [lockoutMessage, setLockoutMessage] = useState<string | undefined>();

  // ---- Lockout countdown ----
  useEffect(() => {
    if (lockoutRemaining <= 0) return;
    const id = setInterval(() => {
      setLockoutRemaining((s) => s - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [lockoutRemaining]);

  // Reset state after lockout expires
  useEffect(() => {
    if (otpState === "disabled" && lockoutRemaining === 0) {
      setOtpState("default");
      setAttempts(0);
      setOtp("");
      setLockoutMessage(undefined);
      setErrorMessage(undefined);
    }
  }, [otpState, lockoutRemaining]);

  const handleVerify = (val: string) => {
    const isOk = MOCK_VALID_CODES.includes(val);

    if (isOk) {
      setOtpState("success");
      setSuccessMessage("Code verified");
      // auto-progress after quick fade
      setTimeout(() => {
        setOtpState("default");
        setSuccessMessage(undefined);
        router.push("/parent/verified-temp");
      }, 500);
      return;
    }

    // Wrong code → progressive errors
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    if (nextAttempts >= MAX_ATTEMPTS) {
      setOtpState("disabled");
      setLockoutRemaining(LOCKOUT_SECONDS);
      setLockoutMessage(
        `Too many tries. Wait ${LOCKOUT_SECONDS} seconds to try again.`
      );
    } else {
      setOtpState("error");
      if (nextAttempts === 1) {
        setErrorMessage("That code doesn’t match. Please try again.");
      } else if (nextAttempts === 2) {
        setErrorMessage("Still not matching. Recheck the text we sent.");
      }
      setShakeKey((k) => k + 1);
    }
  };

  const handleComplete = (val: string) => {
    setOtp(val);
    if (otpState === "disabled") return;
    handleVerify(val);
  };

  const handleResend = () => {
    if (otpState === "disabled") return;
    alert("📨 Resent code to your phone.");
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F5F5] flex flex-col items-center relative">
      {/* Header */}
      <header
        className="relative flex items-start justify-center w-full overflow-hidden"
        style={{
          height: "25vh",
          backgroundColor: "#4D4D4D",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <img
          src="/images/logos/NILJourney_Logo_Horizontal_Reverse.svg"
          alt="NIL Journey"
          style={{ height: "24px", width: "auto" }}
          className="relative z-10 select-none pointer-events-none"
          draggable={false}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
        />
      </header>

      {/* Card */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        style={{
          top: "68px",
          width: "90%",
          maxWidth: "400px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
          borderRadius: "12px",
          padding: "20px 16px",
        }}
      >
        {/* Icon */}
        <i
          className="ri-shield-check-line"
          style={{
            fontSize: "48px",
            color: "rgba(255, 107, 44, 0.7)",
            marginBottom: "24px",
          }}
        />

        {/* Header */}
        <h2
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: "28px",
            color: "#212121",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Verify it&apos;s you.
        </h2>

        {/* Supporting Text */}
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#666666",
            textAlign: "center",
            maxWidth: "280px",
            marginBottom: "24px",
          }}
        >
          Enter the 6-digit code we just sent to (555) 123-4567.
        </p>

        {/* OTP Input */}
        <div style={{ width: "100%" }}>
          <OtpInput
            length={6}
            context="parent"
            state={otpState}
            errorMessage={errorMessage}
            lockoutMessage={
              otpState === "disabled" && lockoutRemaining > 0
                ? `Too many incorrect attempts. Please wait ${lockoutRemaining}s before trying again.`
                : lockoutMessage
            }
            onChange={(val) => {
              setOtp(val);
              if (otpState !== "disabled" && otpState !== "default") {
                setOtpState("default");
                setErrorMessage(undefined);
                setSuccessMessage(undefined);
              }
            }}
            onComplete={handleComplete}
            shakeKey={shakeKey}
          />

          {/* Inline success copy below OTP */}
          {otpState === "success" && successMessage && (
            <div
              aria-live="polite"
              style={{
                fontSize: "14px",
                color: "#176B4D",
                marginTop: "8px",
                textAlign: "center",
              }}
            >
              {successMessage}
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ width: "100%", marginTop: "24px" }}>
          <ParentPrimaryCTA
            disabled={otp.length !== 6 || otpState !== "default"}
            onClick={() => handleVerify(otp)}
          >
            Continue
          </ParentPrimaryCTA>
        </div>

        {/* Resend microcopy */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            marginTop: "12px",
            alignSelf: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.2px",
              color: "#999999",
              textAlign: "center",
            }}
          >
            Didn’t get the code?
          </span>
          <button
            onClick={handleResend}
            disabled={otpState === "disabled"}
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.2px",
              color: otpState === "disabled" ? "#CCCCCC" : "#FF6B2C",
              textAlign: "center",
              background: "none",
              border: "none",
              cursor: otpState === "disabled" ? "not-allowed" : "pointer",
            }}
          >
            Resend
          </button>
        </div>

        {/* Lockout live countdown */}
        {otpState === "disabled" && lockoutRemaining > 0 && (
          <div
            aria-live="assertive"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.2px",
              color: "#B3261E",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Try again in {lockoutRemaining}s
          </div>
        )}
      </div>
    </div>
  );
}
