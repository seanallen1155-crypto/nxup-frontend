"use client";

import { useState } from "react";
import { DateInput, DateValue } from "@/components/ui/forms/DateInput";
import { SecondaryCTAButton } from "@/components/ui/actions/SecondaryCTAButton";

type StepDOBProps = {
  onNext?: () => void;
};

export function StepDOB({ onNext }: StepDOBProps) {
  const [dob, setDob] = useState<DateValue>({ mm: "", dd: "", yyyy: "" });

  // Field-level validation (from DateInput)
  const errors = {
    mm:
      dob.mm.length > 0 &&
      (isNaN(Number(dob.mm)) ||
        Number(dob.mm) < 1 ||
        Number(dob.mm) > 12),
    dd:
      dob.dd.length > 0 &&
      (isNaN(Number(dob.dd)) ||
        Number(dob.dd) < 1 ||
        Number(dob.dd) > 31),
    yyyy:
      dob.yyyy.length > 0 &&
      (isNaN(Number(dob.yyyy)) || dob.yyyy.length !== 4),
  };

  const isValidDOB =
    !errors.mm && !errors.dd && !errors.yyyy && dob.mm && dob.dd && dob.yyyy;

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
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        When's your birthday?
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
        This one's easy. Just enter your month, day, and year.
      </p>

      {/* Date Input */}
      <DateInput value={dob} onChange={setDob} />

      {/* Error helper text */}
      {(errors.mm || errors.dd || errors.yyyy) && (
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#DC2626",
            marginTop: "-12px",
            textAlign: "center",
          }}
        >
          Enter a valid date (MM/DD/YYYY).
        </p>
      )}

      {/* Conditional Secondary CTA */}
      <SecondaryCTAButton
        active={!!isValidDOB}
        onClick={() => isValidDOB && onNext?.()}
      >
        Continue
      </SecondaryCTAButton>
    </div>
  );
}