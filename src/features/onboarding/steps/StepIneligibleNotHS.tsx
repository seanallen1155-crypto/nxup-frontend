"use client";

import { useState } from "react";
import { Input } from "@ui/forms/Input";
import { PrimaryCTAButton } from "@ui/actions/PrimaryCTAButton";

interface StepIneligibleNotHSProps {
  onNext?: () => void;
}

export function StepIneligibleNotHS({ onNext }: StepIneligibleNotHSProps) {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Simple formatter: (XXX) XXX-XXXX
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
    setIsValid(formatted.length === 14);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full text-center px-4">
      {/* Headline */}
      <h2 className="m-0 font-inter font-black text-white text-2xl leading-snug">
        We’re here when you’re ready.
      </h2>

      {/* Body */}
      <p className="m-0 mt-4 text-base text-[#EAEAEA] max-w-[90%] leading-relaxed">
        Our app is built for high school athletes. Once you start 9th grade,
        you’ll be ready to join. Add your number and we’ll let you know the
        moment you’re eligible.
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
          Notify Me
        </PrimaryCTAButton>
      </div>
    </div>
  );
}
