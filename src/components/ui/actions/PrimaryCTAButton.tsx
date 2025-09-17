"use client";

import React from "react";
import "remixicon/fonts/remixicon.css";

type PrimaryCTAButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  icon?: React.ReactNode;
  iconClassName?: string;
};

export function PrimaryCTAButton({
  children,
  onClick,
  disabled = false,
  active = false,
  icon,
  iconClassName,
}: PrimaryCTAButtonProps) {
  const isInactive = !active && !disabled;
  const isActive = active && !disabled;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center gap-2 rounded-md"
      style={{
        height: "48px",
        width: "100%",
        borderRadius: "8px",
        fontFamily: "var(--font-satoshi, sans-serif)",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0.01em",
        textTransform: "uppercase",
        transition:
          "background 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        cursor: disabled
          ? "default"
          : isInactive
          ? "default"
          : "pointer",
        // Backgrounds
        background: disabled
          ? "rgba(255,255,255,0.10)"
          : isInactive
          ? "rgba(255,255,255,0.10)"
          : "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)",
        // Borders
        border: disabled
          ? "1px solid rgba(255,255,255,0.18)"
          : isInactive
          ? "1px solid rgba(255,255,255,0.18)"
          : "none",
        // Typography
        color: disabled
          ? "rgba(255,255,255,0.32)"
          : isInactive
          ? "rgba(255,255,255,0.44)"
          : "#FFFFFF",
        // Shadows
        boxShadow: disabled
          ? "none"
          : isInactive
          ? "inset 0px 1px 2px rgba(0,0,0,0.25)"
          : "0px 4px 12px rgba(255,90,31,0.4)",
      }}
      // Hover (active only)
      onMouseEnter={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(90deg, #FF7A3F 0%, #FF5A1F 100%)";
          e.currentTarget.style.boxShadow =
            "0 0 8px rgba(255,90,31,0.4)";
        }
      }}
      onMouseLeave={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)";
          e.currentTarget.style.boxShadow =
            "0px 4px 12px rgba(255,90,31,0.4)";
        }
      }}
      // Pressed (active only)
      onMouseDown={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(90deg, #E64500 0%, #CC3A00 100%)";
          e.currentTarget.style.boxShadow =
            "inset 0px 2px 4px rgba(0,0,0,0.3)";
        }
      }}
      onMouseUp={(e) => {
        if (isActive) {
          e.currentTarget.style.background =
            "linear-gradient(90deg, #FF7A3F 0%, #FF5A1F 100%)";
          e.currentTarget.style.boxShadow =
            "0 0 8px rgba(255,90,31,0.4)";
        }
      }}
      // Focus ring (active only)
      onFocus={(e) => {
        if (isActive) {
          e.currentTarget.style.outline = "2px solid #FF5A1F";
          e.currentTarget.style.outlineOffset = "2px";
        }
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
    >
      {children}
      {icon ? (
        icon
      ) : (
        <i
          className={`ri-arrow-right-line ${iconClassName || ""}`}
          style={{
            fontSize: "20px",
            color: "inherit",
            transition: "transform 0.2s ease-in-out",
          }}
          aria-hidden="true"
        />
      )}
    </button>
  );
}