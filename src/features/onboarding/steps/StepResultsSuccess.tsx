"use client";

import React, { useState } from "react";
import { InputDark } from "@/components/ui/forms/InputDark";
import { PhoneInput } from "@/components/ui/forms/PhoneInput";
import { PrimaryCTAButton } from "@/components/ui/actions/PrimaryCTAButton";
import { EligibilitySuccessIndicator } from "@/components/ui/feedback/EligibilitySuccessIndicator";

interface StepResultsSuccessProps {
  onNext?: () => void;
}

export function StepResultsSuccess({ onNext }: StepResultsSuccessProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  // ✅ Require all fields before activating CTA
  const isActive =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    phone.length === 10; // 10 raw digits

  return (
    <div className="flex flex-col items-center text-center px-4 w-full">
      {/* ✅ Headline (icon already comes from OnboardingContainer) */}
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
          fontSize: "14px",
          lineHeight: "20px",
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          maxWidth: "38ch",
          marginBottom: "24px",
          alignSelf: "center",
        }}
      >
        Enter your full name and phone number. We'll text you a secure link to get started.
      </p>

      {/* ✅ First Name Field */}
      <div className="w-full" style={{ marginBottom: "16px" }}>
        <InputDark
          placeholder="First name"
          aria-label="First name"
          style={{ height: "48px" }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* ✅ Last Name Field */}
      <div className="w-full" style={{ marginBottom: "16px" }}>
        <InputDark
          placeholder="Last name"
          aria-label="Last name"
          style={{ height: "48px" }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* ✅ Phone Label */}
      <label
        htmlFor="phone"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.25px",
          color: "#A1A1AA",
          alignSelf: "flex-start",
          paddingLeft: "14px",
          marginBottom: "4px",
        }}
      >
        Phone Number
      </label>

      {/* ✅ Phone Input */}
      <div className="w-full" style={{ marginBottom: "24px" }}>
        <PhoneInput value={phone} onChange={setPhone} />
      </div>

      {/* ✅ Primary CTA */}
      <PrimaryCTAButton
        onClick={onNext}
        active={isActive}
        disabled={false} // disabled handled via active flag
        className="w-full"
      >
        Send me the link
      </PrimaryCTAButton>

      {/* ✅ Microcopy */}
      <p
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "18px",
          letterSpacing: "0.2px",
          color: "#9CA3AF",
          textAlign: "left",
          marginTop: "12px",
          marginBottom: "24px",
          maxWidth: "32ch",
          alignSelf: "center",
        }}
      >
        Check your texts for the download link. It logs you in automatically.
      </p>
    </div>
  );
}
