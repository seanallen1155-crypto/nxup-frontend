"use client";

import React from "react";
import { InputDark } from "@/components/ui/forms/InputDark";
import { PhoneInput } from "@/components/ui/forms/PhoneInput";
import { SecondaryCTAButton } from "@/components/ui/actions/SecondaryCTAButton";

interface StepResultsSuccessProps {
  onNext?: () => void;
}

export function StepResultsSuccess({ onNext }: StepResultsSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 w-full">
      {/* ✅ Headline */}
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
          marginBottom: "6px",
        }}
      >
        You’re Eligible!
      </h2>

      {/* ✅ Subtext (compact) */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          maxWidth: "38ch", // loosened from 28ch
          marginTop: "4px",
          marginBottom: "20px", // spacing before first name field
          alignSelf: "center",
        }}
      >
        Enter your full name and phone number. We'll text you a secure link to get started.
      </p>

      {/* ✅ First Name Field */}
      <div className="w-full mb-3"> {/* 12px spacing to Last Name */}
        <InputDark placeholder="First name" aria-label="First name" style={{ height: "44px" }} />
      </div>

      {/* ✅ Last Name Field */}
      <div className="w-full mb-4"> {/* 16px spacing to Phone */}
        <InputDark placeholder="Last name" aria-label="Last name" style={{ height: "44px" }} />
      </div>

      {/* ✅ Phone Input */}
      <PhoneInput />

      {/* ✅ Secondary CTA */}
      <SecondaryCTAButton onClick={onNext} className="w-full mt-6" style={{ height: "48px" }}>
        Send me the link
      </SecondaryCTAButton>
    </div>
  );
}