"use client";

import React, { InputHTMLAttributes, forwardRef, useState } from "react";

type InputDarkProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  success?: boolean;
  filled?: boolean;
  textAlign?: "left" | "center" | "right";
};

export const InputDark = forwardRef<HTMLInputElement, InputDarkProps>(
  ({ error, success, filled, style, textAlign = "left", ...props }, ref) => {
    const [hasValue, setHasValue] = useState(
      typeof props.value === "string" && props.value.length > 0
    );

    return (
      <input
        ref={ref}
        {...props}
        style={{
          height: "48px",
          width: "100%",
          borderRadius: "8px",
          background: filled
            ? "rgba(26,26,26,0.9)"
            : "rgba(26,26,26,0.9)",
          border: error
            ? "1px solid #FF3B30"
            : success
            ? "1px solid #22C55E"
            : "1px solid #333333",
          padding: "0 14px", // ✅ internal padding only
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "16px",
          fontWeight: hasValue ? 500 : 400, // ✅ Regular (placeholder) → Medium (entered text)
          color: hasValue ? "#FFFFFF" : "#9CA3AF", // ✅ white for text, gray for placeholder
          textAlign: textAlign,
          lineHeight: "24px",
          letterSpacing: hasValue ? "0px" : "0.25px",
          outline: "none",
          transition: "all 0.2s ease",
          boxShadow: error
            ? "0 0 6px rgba(255,59,48,0.5)"
            : success
            ? "0 0 6px rgba(34,197,94,0.4)"
            : "none",
          ...style,
        }}
        aria-invalid={error}
        aria-describedby={error ? "input-error" : undefined}
        onChange={(e) => {
          props.onChange?.(e);
          setHasValue(e.target.value.length > 0);
        }}
        onFocus={(e) => {
          e.currentTarget.style.border = error
            ? "1px solid #FF3B30"
            : success
            ? "1px solid #22C55E"
            : "1px solid #FF5A1F";
          e.currentTarget.style.boxShadow = error
            ? "0 0 6px rgba(255,59,48,0.5)"
            : success
            ? "0 0 6px rgba(34,197,94,0.4)"
            : "0 0 6px rgba(255,90,31,0.5)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = error
            ? "1px solid #FF3B30"
            : success
            ? "1px solid #22C55E"
            : "1px solid #333333";
          e.currentTarget.style.boxShadow = "none";
        }}
        placeholder={props.placeholder}
      />
    );
  }
);

InputDark.displayName = "InputDark";