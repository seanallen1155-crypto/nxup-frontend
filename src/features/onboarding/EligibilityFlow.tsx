// src/features/onboarding/EligibilityFlow.tsx

"use client";

import { useState } from "react";
import { StepDOB } from "./steps/StepDOB";
import { BackgroundImage } from "@patterns/background/BackgroundImage";
import { BrowserLogo } from "@ui/logo/BrowserLogo";
import { BrowserFooter } from "@ui/footer/BrowserFooter";
import { SolidCard } from "@ui/cards/SolidCard";
import { StepTracker } from "@ui/feedback/StepTracker";

export function EligibilityFlow() {
  const [currentStep] = useState<number>(1);
  const totalSteps = 3;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepDOB />;
      case 2:
        return <p>Step 2 (Grade) placeholder</p>;
      case 3:
        return <p>Step 3 (Zip) placeholder</p>;
      case 4:
        return <p>Eligibility result placeholder</p>;
      default:
        return <p>Unknown step</p>;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background */}
      <BackgroundImage blurred darken />

      {/* Logo */}
      <div className="relative z-10 mt-8 self-start ml-6">
        <BrowserLogo theme="dark" variant="wide" />
      </div>

      {/* Tracker */}
      <div className="relative z-10 mt-4 w-full max-w-[600px] self-center px-4">
        <StepTracker currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Step Card */}
      <div className="relative z-10 flex flex-1 items-start justify-center mt-8">
        <SolidCard className="w-[90vw] max-w-[600px] min-h-[400px] flex flex-col justify-center">
          {renderStep()}
        </SolidCard>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-8">
        <BrowserFooter theme="dark" />
      </div>
    </div>
  );
}
