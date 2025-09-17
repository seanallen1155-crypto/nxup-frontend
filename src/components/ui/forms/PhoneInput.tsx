"use client";

import React, { useState } from "react";
import { InputDark } from "./InputDark";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
}

export function PhoneInput({ value = "", onChange, error }: PhoneInputProps) {
  const [digits, setDigits] = useState(value);

  const formatPhone = (raw: string) => {
    const cleaned = raw.replace(/\D/g, "").slice(0, 10);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return cleaned;
    let formatted = "";
    if (match[1]) formatted = `(${match[1]}`;
    if (match[1].length === 3) formatted += ") ";
    if (match[2]) formatted += match[2];
    if (match[2].length === 3) formatted += "-";
    if (match[3]) formatted += match[3];
    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cleaned = raw.replace(/\D/g, "");
    setDigits(cleaned);
    onChange?.(cleaned);
  };

  return (
    <div className="w-full mt-4 mb-6"> {/* 16px top, 24px bottom spacing */}
      <InputDark
        type="tel"
        inputMode="numeric"
        placeholder="(123) 456-7890"
        value={formatPhone(digits)}
        onChange={handleChange}
        aria-label="Phone number"
        className={`${error ? "border-red-500 animate-shake" : ""}`}
        style={{
          height: "44px", // ✅ compact input height
          fontFamily: "'Inter', sans-serif",
          fontSize: "16px",
          fontWeight: digits ? 600 : 400,
          color: digits ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
        }}
      />
    </div>
  );
}
