"use client";

import React from "react";

interface OnboardingHeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function OnboardingHeader({ left, right }: OnboardingHeaderProps) {
  return (
    <header
      className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-3"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 64px)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 50,
      }}
    >
      <div className="flex items-center">{left}</div>
      <div className="flex items-center">{right}</div>
    </header>
  );
}