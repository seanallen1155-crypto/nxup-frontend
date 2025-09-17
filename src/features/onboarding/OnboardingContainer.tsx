"use client";

import { useState } from "react";
import Image from "next/image";
import { OnboardingCard } from "@/components/ui/cards/OnboardingCard";
import { StepTracker } from "@/components/ui/feedback/StepTracker";
import { EligibilitySuccessIndicator } from "@/components/ui/feedback/EligibilitySuccessIndicator";
import OnboardingHeader from "@/components/ui/header/OnboardingHeader";
import { OnboardingLogo } from "@/components/ui/header/OnboardingLogo";
import { OnboardingNavMenu } from "@/components/ui/header/OnboardingNavMenu";
import { BrowserFooter } from "@/components/ui/footer/BrowserFooter";

type OnboardingContainerProps = {
  children?: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
  showBack?: boolean;
  onBack?: () => void;
};

export function OnboardingContainer({
  children,
  currentStep = 1,
  totalSteps = 3,
  showBack = false,
  onBack,
}: OnboardingContainerProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Background image with blur + scale */}
      <Image
        src="/images/landing/hero-athlete-v2.jpg"
        alt="Onboarding background athlete hero"
        fill
        priority
        className="object-cover object-[60%] md:object-center scale-[1.05]"
        style={{
          filter: "blur(8px)",
        }}
      />

      {/* Left scrim gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade gradient */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "60vh",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Brightness / Contrast overlay */}
      <div
        className="absolute inset-0"
        style={{
          filter: "brightness(0.85) contrast(1.05)",
          zIndex: 2,
        }}
      />

      {/* Header */}
      <OnboardingHeader
        left={<OnboardingLogo />}
        right={<OnboardingNavMenu />}
      />

      {/* Main Content (card + tracker/success + step-specific content) */}
      <div className="relative z-3 flex-1 flex flex-col items-center pt-[88px]">
        <OnboardingCard>
          {currentStep === 4 ? ( // ✅ show success icon instead of StepTracker
            <EligibilitySuccessIndicator />
          ) : currentStep === 5 ? ( // ✅ Final Exit uses larger icon
            <EligibilitySuccessIndicator size={48} />
          ) : currentStep === 6 ? null : ( // ✅ hide tracker for ineligible under 13
            <StepTracker
              currentStep={currentStep}
              totalSteps={totalSteps}
              showBack={showBack}
              onBack={onBack}
            />
          )}
          <div style={{ flex: 1 }}>{children}</div>
        </OnboardingCard>
      </div>

      {/* Footer */}
      <footer className="relative z-3 mt-auto">
        <BrowserFooter />
      </footer>
    </div>
  );
}