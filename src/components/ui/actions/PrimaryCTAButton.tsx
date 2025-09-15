"use client";

import React from "react";
import "remixicon/fonts/remixicon.css";

type PrimaryCTAButtonProps = {
  children: React.ReactNode; // text label
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode; // optional override (Heroicon or custom)
  iconClassName?: string; // tweak remix icon if needed
};

export function PrimaryCTAButton({
  children,
  onClick,
  disabled = false,
  icon,
  iconClassName,
}: PrimaryCTAButtonProps) {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-md"
      style={{
        padding: "16px 28px",
        fontFamily: "var(--font-satoshi, sans-serif)",
        fontWeight: 600,
        fontSize: "clamp(16px, 1.5vw, 18px)",
        lineHeight: "140%",
        letterSpacing: "0em",
        color: "#FFFFFF",
        background: "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)",
        textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
        borderRadius: "8px",
        transition: "all 0.2s ease-in-out",
        boxShadow: "0px 4px 12px rgba(255, 90, 31, 0.4)",
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(90deg, #FF7A3F 0%, #FF5A1F 100%)";
        const svg = e.currentTarget.querySelector("i, svg");
        if (svg) (svg as HTMLElement).style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)";
        const svg = e.currentTarget.querySelector("i, svg");
        if (svg) (svg as HTMLElement).style.transform = "translateX(0)";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.97)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "2px solid rgba(255,255,255,0.6)";
        e.currentTarget.style.outlineOffset = "2px";
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
            color: "#FFFFFF",
            transition: "transform 0.2s ease-in-out",
          }}
          aria-hidden="true"
        />
      )}
    </button>
  );
}
