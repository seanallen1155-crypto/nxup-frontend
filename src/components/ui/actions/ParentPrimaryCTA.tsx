"use client";

import React from "react";

type ParentPrimaryCTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

export function ParentPrimaryCTA({
  children,
  onClick,
  disabled = false,
  className,
  ...rest
}: ParentPrimaryCTAProps) {
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
        color: disabled ? "#A0A0A0" : "#FFFFFF",
        textTransform: "none", // sentence case
        padding: "16px 20px",
        minHeight: "44px",
        width: "100%",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: disabled ? "#E0E0E0" : "#FF4D00",
        boxShadow: disabled ? "none" : "0px 2px 6px rgba(0,0,0,0.12)",
        transition:
          "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
      }}
      // Hover
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#E64500";
          e.currentTarget.style.boxShadow = "0px 3px 8px rgba(0,0,0,0.16)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#FF4D00";
          e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0,0,0,0.12)";
        }
      }}
      // Pressed
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#CC3700";
          e.currentTarget.style.boxShadow =
            "inset 0px 2px 4px rgba(0,0,0,0.2)";
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#E64500";
          e.currentTarget.style.boxShadow = "0px 3px 8px rgba(0,0,0,0.16)";
        }
      }}
      // Focus
      onFocus={(e) => {
        if (!disabled) {
          e.currentTarget.style.outline = "2px solid #E64500";
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
