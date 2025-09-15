"use client";

import { HTMLAttributes } from "react";
import clsx from "clsx";

export interface SelectorButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  selected?: boolean;
  disabled?: boolean;
}

export function SelectorButton({
  label,
  selected = false,
  disabled = false,
  className,
  ...props
}: SelectorButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        "relative flex items-center justify-center min-w-[96px] h-14 rounded-md px-5 py-3 whitespace-normal text-center transition-all duration-200",
        className
      )}
      style={{
        fontFamily: "'Inter', sans-serif", // ✅ hard-coded to match StepGrade/DOB
        fontSize: "14px",
        lineHeight: "18px",
        fontWeight: disabled ? 400 : selected ? 600 : 500,
        color: disabled ? "#666666" : "#FFFFFF",
        backgroundColor: disabled
          ? "rgba(26,26,26,0.6)"
          : "rgba(14,14,14,0.7)",
        border: selected
          ? "2px solid rgba(255,255,255,0.2)"
          : "1px solid #2A2A2A",
        boxShadow: selected
          ? "0 0 6px rgba(255,90,31,0.25)"
          : "none",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      {...props}
    >
      {label}

      {selected && (
        <span
          style={{
            position: "absolute",
            bottom: "6px",
            left: "12px",
            right: "12px",
            height: "2px",
            backgroundColor: "#FF5A1F",
            borderRadius: "1px",
          }}
        />
      )}
    </button>
  );
}
