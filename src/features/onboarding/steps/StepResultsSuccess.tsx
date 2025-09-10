"use client";

import { useState } from "react";
import { Input } from "@ui/forms/Input";
import { PrimaryCTAButton } from "@ui/actions/PrimaryCTAButton";

interface StepResultsSuccessProps {
  onNext: () => void;
}

export function StepResultsSuccess({ onNext }: StepResultsSuccessProps) {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Format phone as (XXX) XXX-XXXX
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const parts: string[] = [];
    if (digits.length > 0) parts.push("(" + digits.slice(0, 3));
    if (digits.length >= 4) parts.push(") " + digits.slice(3, 6));
    if (digits.length >= 7) parts.push("-" + digits.slice(6, 10));
    return parts.join("");
  };

  const handleChange = (value: string) => {
    const formatted = formatPhone(value);
    setPhone(formatted);
    setIsValid(formatted.length === 14); // (123) 456-7890
  };

  return (
    <div className="flex flex-col items-center w-full h-full text-center">
      {/* Celebration */}
      <h2 className="font-inter font-semibold text-white text-2xl mt-2">
        You’re eligible! 🎉
      </h2>

      {/* Prompt */}
      <h3 className="mt-6 font-inter font-semibold text-white text-xl">
        Enter your number and we’ll text your link.
      </h3>

      {/* Helper */}
      <p className="mt-2 text-md text-gray-300 max-w-md">
        Check your text messages and click the link to sign into
        the app and start earning from your NIL brand.
      </p>

      {/* Phone Input */}
      <div className="mt-8 w-full max-w-xs">
        <Input
          type="tel"
          inputMode="numeric"
          name="phone"
          id="phone"
          placeholder="(123) 456-7890"
          aria-label="Phone Number"
          value={phone}
          onChange={(e) => handleChange(e.target.value)}
          className="text-center tracking-wide"
        />
      </div>

      {/* CTA */}
      <div className="mt-10">
        <PrimaryCTAButton disabled={!isValid} onClick={onNext}>
          Send Me the Link
        </PrimaryCTAButton>
      </div>
    </div>
  );
}
