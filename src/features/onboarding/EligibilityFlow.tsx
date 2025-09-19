// src/features/onboarding/EligibilityFlow.tsx
"use client";

import { useState } from "react";
import { StepDOB } from "./steps/StepDOB";
import { StepGrade } from "./steps/StepGrade";
import { StepZip } from "./steps/StepZip";
import { StepResultsSuccess } from "./steps/StepResultsSuccess";
import { StepFinalExit } from "./steps/StepFinalExit";
import { StepIneligibleUnder13 } from "./steps/StepIneligibleUnder13"; // ✅ restored
import { StepIneligible } from "./steps/StepIneligible"; // ✅ unified for grade/state/college
import { StepIneligibleExit } from "./steps/StepIneligibleExit";
import { OnboardingContainer } from "./OnboardingContainer";
import { isEligibleByAge, DOB } from "@/lib/eligibility";

export function EligibilityFlow() {
  const [currentStep, setCurrentStep] = useState<number>(10);

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
        return <StepIneligibleUnder13 />;

      case 7: // Not HS (grade)
        return <StepIneligible reason="grade" onNext={() => setCurrentStep(10)} />;

      case 8: // College
        return <StepIneligible reason="college" onNext={() => setCurrentStep(10)} />;

      case 9: // State
        return <StepIneligible reason="state" onNext={() => setCurrentStep(10)} />;

      case 10: // Exit (after form submission)
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