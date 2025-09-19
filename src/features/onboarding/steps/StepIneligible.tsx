// src/features/onboarding/steps/StepIneligible.tsx
"use client";

import React, { useState } from "react";
import { InputDark } from "@/components/ui/forms/InputDark";
import { PhoneInput } from "@/components/ui/forms/PhoneInput";
import { PrimaryCTAButton } from "@/components/ui/actions/PrimaryCTAButton";
import {
  INELIGIBLE_CONTENT,
  INELIGIBLE_FOOTER,
  IneligibleReason,
} from "./ineligibleContent";

interface StepIneligibleProps {
  reason: IneligibleReason;
  onNext?: () => void;
}

export function StepIneligible({ reason, onNext }: StepIneligibleProps) {
  const { headline, subtext, cta } = INELIGIBLE_CONTENT[reason];

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
      {/* Icon (hourglass in brand orange) */}
      <i
        className="ri-hourglass-line"
        style={{
          fontSize: "48px",
          color: "rgba(255, 107, 0, 1)", // Brand orange
          filter: "drop-shadow(0 0 8px rgba(255, 107, 0, 0.4))",
          marginBottom: "24px",
        }}
        aria-hidden="true"
      />

      {/* Headline */}
      <h2
        style={{
          fontFamily: "'Teko', sans-serif",
          fontWeight: 600,
          fontSize: "28px",
          lineHeight: "110%",
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        {headline}
      </h2>

      {/* Subtext */}
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
        {subtext}
      </p>

      {/* First Name Field */}
      <div className="w-full" style={{ marginBottom: "16px" }}>
        <InputDark
          placeholder="First name"
          aria-label="First name"
          style={{ height: "48px" }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Last Name Field */}
      <div className="w-full" style={{ marginBottom: "16px" }}>
        <InputDark
          placeholder="Last name"
          aria-label="Last name"
          style={{ height: "48px" }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* Phone Label */}
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

      {/* Phone Input */}
      <div className="w-full" style={{ marginBottom: "24px" }}>
        <PhoneInput value={phone} onChange={setPhone} />
      </div>

      {/* Primary CTA */}
      <PrimaryCTAButton
        onClick={onNext}
        active={isActive}
        disabled={false}
        className="w-full"
      >
        {cta}
      </PrimaryCTAButton>

      {/* Universal footer microcopy */}
      <p
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "18px",
          letterSpacing: "0.2px",
          color: "#9CA3AF",
          textAlign: "center",
          marginTop: "12px",
          marginBottom: "24px",
          maxWidth: "32ch",
          alignSelf: "center",
        }}
      >
        {INELIGIBLE_FOOTER}
      </p>
    </div>
  );
}
