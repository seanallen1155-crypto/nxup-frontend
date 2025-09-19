// src/features/onboarding/EligibilityFlow.tsx
"use client";

import { useState } from "react";
import { StepDOB } from "./steps/StepDOB";
import { StepGrade } from "./steps/StepGrade";
import { StepZip } from "./steps/StepZip";
import { StepResultsSuccess } from "./steps/StepResultsSuccess";
import { StepFinalExit } from "./steps/StepFinalExit";
import { StepIneligible } from "./steps/StepIneligible"; // ✅ new unified ineligible step
import { StepIneligibleExit } from "./steps/StepIneligibleExit";
import { OnboardingContainer } from "./OnboardingContainer";
import { isEligibleByAge, DOB } from "@/lib/eligibility";

export function EligibilityFlow() {
  const [currentStep, setCurrentStep] = useState<number>(6);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepDOB
            onNext={(dob: DOB) => {
              if (isEligibleByAge(dob, 13)) {
                setCurrentStep(2);
              } else {
                setCurrentStep(6);
              }
            }}
          />
        );

      case 2:
        return <StepGrade onNext={() => setCurrentStep(3)} />;

      case 3:
        return <StepZip onNext={() => setCurrentStep(4)} />;

      case 4:
        return <StepResultsSuccess onNext={() => setCurrentStep(5)} />;

      case 5:
        return <StepFinalExit />;

      case 6: // Under 13
      case 7: // Not HS
      case 8: // College
      case 9: // State
        return <StepIneligible />; // ✅ blank for now

      case 10:
        return <StepIneligibleExit />;

      default:
        return <p style={{ color: "white" }}>Unknown step</p>;
    }
  };

  return (
    <OnboardingContainer
      currentStep={currentStep}
      totalSteps={3}
      showBack={currentStep > 1}
      onBack={() => setCurrentStep((s) => Math.max(1, s - 1))}
    >
      {renderStep()}
    </OnboardingContainer>
  );
}