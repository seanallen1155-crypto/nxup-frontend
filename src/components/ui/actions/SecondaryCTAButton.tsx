"use client";

import React from "react";

type SecondaryCTAButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
};

export function SecondaryCTAButton({
  children,
  onClick,
  disabled = false,
  active = false,
}: SecondaryCTAButtonProps) {
  const isInactive = !active && !disabled;
  const isActive = active && !disabled;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        height: "48px",
        width: "100%",
        borderRadius: "8px",
        fontFamily: "var(--font-satoshi, sans-serif)",
        fontWeight: isActive ? 700 : 500,
        fontSize: "16px",
        letterSpacing: "0.01em",
        textTransform: "uppercase",
        transition:
          "background 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        cursor: disabled
          ? "not-allowed"
          : isInactive
          ? "default"
          : "pointer",
        // Backgrounds
        background: disabled
          ? "rgba(255,255,255,0.02)"
          : isInactive
          ? "rgba(255,255,255,0.02)"
          : "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)",
        // Borders
        border: disabled
          ? "1px solid rgba(255,255,255,0.04)"
          : isInactive
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(255,255,255,0.25)",
        // Typography
        color: disabled
          ? "rgba(255,255,255,0.25)"
          : isInactive
          ? "rgba(255,255,255,0.4)"
          : "#FFFFFF",
        // Elevation + highlight
        boxShadow: disabled
          ? "none"
          : isInactive
          ? "inset 0px 1px 2px rgba(0,0,0,0.3)"
          : `
            0px 4px 6px rgba(0,0,0,0.45), 
            0px 1px 2px rgba(0,0,0,0.25), 
            0px 0px 6px rgba(255,255,255,0.12), 
            inset 0px 1px 0px rgba(255,255,255,0.2)`, // ✅ stronger elevated shadow
        marginTop: "24px",
        marginBottom: "24px",
      }}
      // Hover (active only)
      onMouseEnter={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.14) 100%)";
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.3)";
          e.currentTarget.style.transform = "scale(1.02)";
        }
      }}
      onMouseLeave={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)";
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.25)";
          e.currentTarget.style.transform = "scale(1)";
        }
      }}
      // Pressed (active only)
      onMouseDown={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(180deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.18) 100%)";
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.35)";
          e.currentTarget.style.transform = "scale(0.95)";
        }
      }}
      onMouseUp={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.14) 100%)";
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.3)";
          e.currentTarget.style.transform = "scale(1)";
        }
      }}
    >
      {children}
    </button>
  );
}
