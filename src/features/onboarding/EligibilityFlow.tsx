"use client";

import { useState } from "react";
import { StepDOB } from "./steps/StepDOB";
import { StepGrade } from "./steps/StepGrade";
import { StepZip } from "./steps/StepZip";
import { StepResultsSuccess } from "./steps/StepResultsSuccess";
import { StepFinalExit } from "./steps/StepFinalExit";
import { StepIneligibleUnder13 } from "./steps/StepIneligibleUnder13";
import { StepIneligibleNotHS } from "./steps/StepIneligibleNotHS";
import { StepIneligibleCollege } from "./steps/StepIneligibleCollege";
import { StepIneligibleState } from "./steps/StepIneligibleState";
import { StepIneligibleExit } from "./steps/StepIneligibleExit";
import { OnboardingContainer } from "./OnboardingContainer";

export function EligibilityFlow() {
  // start at step 1 so we actually see content immediately
  const [currentStep, setCurrentStep] = useState<number>(1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return null;
      case 1:
        return <StepDOB onNext={() => setCurrentStep(2)} />;
      case 2:
        return <StepGrade onNext={() => setCurrentStep(3)} />;
      case 3:
        return <StepZip onNext={() => setCurrentStep(4)} />;
      case 4:
        return <StepResultsSuccess onNext={() => setCurrentStep(5)} />;
      case 5:
        return <StepFinalExit />;
      case 6:
        return <StepIneligibleUnder13 />;
      case 7:
        return <StepIneligibleNotHS onNext={() => setCurrentStep(10)} />;
      case 8:
        return <StepIneligibleCollege onNext={() => setCurrentStep(10)} />;
      case 9:
        return <StepIneligibleState onNext={() => setCurrentStep(10)} />;
      case 10:
        return <StepIneligibleExit />;
      default:
        return <p style={{ color: "white" }}>Unknown step</p>;
    }
  };

  return (
  <OnboardingContainer currentStep={currentStep} totalSteps={3}>
    {renderStep()}
  </OnboardingContainer>
);
}