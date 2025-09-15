"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";

type InputDarkProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  success?: boolean;
  filled?: boolean;
};

export const InputDark = forwardRef<HTMLInputElement, InputDarkProps>(
  ({ error, success, filled, style, ...props }, ref) => {
    return (
      <input
        ref={ref} // ✅ now works with useRef in DateInput
        {...props}
        style={{
          height: "52px",
          width: "100%",
          borderRadius: "8px",
          background: filled
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.05)",
          border: error
            ? "1px solid #DC2626"
            : success
            ? "1px solid #22C55E"
            : "1px solid rgba(255,255,255,0.12)",
          padding: "0 12px",
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          color: "#FFFFFF",
          textAlign: "center",
          letterSpacing: "0.01em",
          outline: "none",
          transition: "all 0.2s ease",
          boxShadow: error
            ? "0 0 6px rgba(220,38,38,0.4)"
            : success
            ? "0 0 6px rgba(34,197,94,0.4)"
            : "none",
          ...style,
        }}
        aria-invalid={error}
        aria-describedby={error ? "input-error" : undefined}
        onFocus={(e) => {
          e.currentTarget.style.border = error
            ? "1px solid #DC2626"
            : success
            ? "1px solid #22C55E"
            : "1px solid #FF5A1F";
          e.currentTarget.style.boxShadow = error
            ? "0 0 6px rgba(220,38,38,0.4)"
            : success
            ? "0 0 6px rgba(34,197,94,0.4)"
            : "0 0 0 3px rgba(255,90,31,0.3)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = error
            ? "1px solid #DC2626"
            : success
            ? "1px solid #22C55E"
            : "1px solid rgba(255,255,255,0.12)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    );
  }
);

InputDark.displayName = "InputDark";
