"use client";

import React from "react";

type ParentSecondaryCTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

export function ParentSecondaryCTA({
  children,
  onClick,
  disabled = false,
  className,
  ...rest
}: ParentSecondaryCTAProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-md ${className || ""}`}
      style={{
        borderRadius: "8px",
        fontFamily: "'Satoshi', sans-serif",
        fontWeight: 500, // Medium
        fontSize: "16px",
        lineHeight: "22px",
        letterSpacing: "0.2px",
        color: disabled ? "#A0A0A0" : "#333333",
        textTransform: "none", // sentence case
        padding: "16px 20px",
        minHeight: "44px",
        width: "100%",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: disabled ? "#FFFFFF" : "#FFFFFF",
        border: disabled ? "1px solid #E0E0E0" : "1px solid #D0D0D0",
        boxShadow: "none", // subtlety only via border
        transition:
          "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out",
      }}
      // Hover
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#FAFAFA";
          e.currentTarget.style.borderColor = "#A0A0A0";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#FFFFFF";
          e.currentTarget.style.borderColor = "#D0D0D0";
        }
      }}
      // Pressed
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#F0F0F0";
          e.currentTarget.style.color = "#111111";
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#FAFAFA";
          e.currentTarget.style.color = "#333333";
        }
      }}
      // Focus
      onFocus={(e) => {
        if (!disabled) {
          e.currentTarget.style.outline = "2px solid #A0A0A0";
          e.currentTarget.style.outlineOffset = "2px";
        }
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
