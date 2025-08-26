// src/app/onboarding/layout.tsx
"use client";

import { OnboardingProvider } from "@/context/OnboardingContext";

export default function OnboardingLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnboardingProvider>{children}</OnboardingProvider>;
}
