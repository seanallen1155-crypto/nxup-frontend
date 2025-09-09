// src/features/onboarding/EligibilityFlow.tsx

"use client";

import { useState } from "react";
import { StepDOB } from "./steps/StepDOB";
import { BackgroundImage } from "@/components/patterns/background/BackgroundImage";

export function EligibilityFlow() {
  const [currentStep] = useState<number>(1); // currently locked to DOB

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
      {/* Background: blurred + darkened version for flow */}
      <BackgroundImage blurred darken />

      {/* Step content on top */}
      <div className="relative z-10 flex-1 flex flex-col">
        {renderStep()}
      </div>
    </div>
  );
}
