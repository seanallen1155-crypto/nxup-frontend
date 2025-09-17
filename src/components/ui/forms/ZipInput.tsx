"use client";

import React from "react";
import { InputDark } from "./InputDark";

interface ZipInputProps {
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
}

export function ZipInput({ value = "", onChange, error }: ZipInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 5); // ✅ only digits, max 5
    onChange?.(raw);
  };

  return (
    <InputDark
      type="text"
      inputMode="numeric"
      pattern="\d*"
      maxLength={5}
      placeholder="ZIP"
      aria-label="Zip Code"
      value={value}
      onChange={handleChange}
      textAlign="center"
      style={{ width: "12ch" }}
      error={error}
    />
  );
}