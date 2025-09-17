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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && digits.length > 0) {
      const input = e.currentTarget;
      const pos = input.selectionStart ?? digits.length;

      // If cursor is at start → let default
      if (pos === 0) return;

      // If cursor is on/after last char, always remove last digit
      if (pos >= formatPhone(digits).length) {
        const newDigits = digits.slice(0, -1);
        setDigits(newDigits);
        onChange?.(newDigits);
        e.preventDefault();
      }
    }
  };

  return (
    <div className="w-full">
      <InputDark
        type="tel"
        inputMode="numeric"
        placeholder="(123) 456-7890"
        value={formatPhone(digits)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label="Phone number"
        className={error ? "border-red-500 animate-shake" : ""}
        style={{
          height: "48px",
          width: "100%",
        }}
        filled={digits.length > 0} // ✅ force placeholder vs. user text styling based on raw digits
      />
    </div>
  );
}