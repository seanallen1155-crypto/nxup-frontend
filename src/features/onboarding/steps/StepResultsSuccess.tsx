"use client";

import React from "react";
import { EligibilitySuccessIndicator } from "@/components/ui/feedback/EligibilitySuccessIndicator";
import { PhoneInput } from "@/components/ui/forms/PhoneInput";
import { SecondaryCTAButton } from "@/components/ui/actions/SecondaryCTAButton";

interface StepResultsSuccessProps {
  onNext?: () => void;
}

export function StepResultsSuccess({ onNext }: StepResultsSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
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
          marginBottom: "8px",
        }}
      >
        You’re Eligible!
      </h2>

      {/* ✅ Subtext */}
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
        Enter your number and we’ll text you a secure download link to get started.
      </p>

      {/* ✅ Phone Input */}
      <PhoneInput />

      {/* ✅ Secondary CTA */}
      <SecondaryCTAButton onClick={onNext}>
        Continue
      </SecondaryCTAButton>
    </div>
  );
}