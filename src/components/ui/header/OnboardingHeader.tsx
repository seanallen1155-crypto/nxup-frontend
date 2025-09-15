"use client";

import { OnboardingLogo } from "./OnboardingLogo";
import { OnboardingNavMenu } from "./OnboardingNavMenu";

export default function OnboardingHeader() {
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
      <OnboardingLogo />
      <OnboardingNavMenu />
    </header>
  );
}
