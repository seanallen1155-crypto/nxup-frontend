"use client";

import Image from "next/image";

export function OnboardingLogo() {
  return (
    <Image
      src="/images/logos/NILJourney_Logo_Horizontal_Reverse.svg"
      alt="nil Journey Logo"
      width={160}
      height={40}
      style={{
        height: "clamp(28px, 6vw, 40px)",
        width: "auto",
        opacity: 0.8,
        transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "0.8";
        e.currentTarget.style.transform = "scale(1)";
      }}
      priority
    />
  );
}
