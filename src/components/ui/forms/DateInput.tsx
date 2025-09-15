"use client";

import { useRef } from "react";
import { InputDark } from "@/components/ui/forms/InputDark";

export type DateValue = {
  mm: string;
  dd: string;
  yyyy: string;
};

type DateInputProps = {
  value: DateValue;
  onChange: (value: DateValue) => void;
  error?: boolean;
};

export function DateInput({ value, onChange, error }: DateInputProps) {
  const mmRef = useRef<HTMLInputElement>(null);
  const ddRef = useRef<HTMLInputElement>(null);
  const yyyyRef = useRef<HTMLInputElement>(null);

    const handleChange = (
    field: keyof DateValue,
    raw: string,
    nextRef?: React.RefObject<HTMLInputElement>
    ) => {
    const clean = raw.replace(/\D/g, "");
    onChange({ ...value, [field]: clean });

    if (
        (field === "mm" && clean.length === 2 && nextRef?.current) ||
        (field === "dd" && clean.length === 2 && nextRef?.current) ||
        (field === "yyyy" && clean.length === 4)
    ) {
        nextRef?.current?.focus(); // ✅ safe guard
    }
    };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: keyof DateValue,
    prevRef?: React.RefObject<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && value[field].length === 0 && prevRef?.current) {
      prevRef.current.focus();
    }
  };

  const handleArrow = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: keyof DateValue
  ) => {
    if (e.key === "ArrowLeft") {
      if (field === "dd" && mmRef.current) mmRef.current.focus();
      if (field === "yyyy" && ddRef.current) ddRef.current.focus();
    }
    if (e.key === "ArrowRight") {
      if (field === "mm" && ddRef.current) ddRef.current.focus();
      if (field === "dd" && yyyyRef.current) yyyyRef.current.focus();
    }
  };

  // Field-level errors
  const fieldErrors = {
    mm:
      value.mm.length > 0 &&
      (isNaN(Number(value.mm)) ||
        Number(value.mm) < 1 ||
        Number(value.mm) > 12),
    dd:
      value.dd.length > 0 &&
      (isNaN(Number(value.dd)) ||
        Number(value.dd) < 1 ||
        Number(value.dd) > 31),
    yyyy:
      value.yyyy.length > 0 &&
      (isNaN(Number(value.yyyy)) || value.yyyy.length !== 4),
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "8px", // ✅ intrinsic spacing
      }}
    >
      {/* MM */}
      <InputDark
        ref={mmRef}
        type="text"
        placeholder="MM"
        value={value.mm}
        onChange={(e) => handleChange("mm", e.target.value, ddRef)}
        onKeyDown={(e) => {
          handleBackspace(e, "mm");
          handleArrow(e, "mm");
        }}
        maxLength={2}
        filled={!!value.mm}
        error={fieldErrors.mm || error}
        style={{ flexBasis: "20%" }}
      />

      {/* DD */}
      <InputDark
        ref={ddRef}
        type="text"
        placeholder="DD"
        value={value.dd}
        onChange={(e) => handleChange("dd", e.target.value, yyyyRef)}
        onKeyDown={(e) => {
          handleBackspace(e, "dd", mmRef);
          handleArrow(e, "dd");
        }}
        maxLength={2}
        filled={!!value.dd}
        error={fieldErrors.dd || error}
        style={{ flexBasis: "20%" }}
      />

      {/* YYYY */}
      <InputDark
        ref={yyyyRef}
        type="text"
        placeholder="YYYY"
        value={value.yyyy}
        onChange={(e) => handleChange("yyyy", e.target.value)}
        onKeyDown={(e) => {
          handleBackspace(e, "yyyy", ddRef);
          handleArrow(e, "yyyy");
        }}
        maxLength={4}
        filled={!!value.yyyy}
        error={fieldErrors.yyyy || error}
        style={{ flexBasis: "60%" }}
      />
    </div>
  );
}