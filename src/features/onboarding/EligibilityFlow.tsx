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
import { StepTracker } from "@ui/feedback/StepTracker";
import { EligibilityConfirmedBar } from "@ui/feedback/EligibilityConfirmedBar";
import { IneligibleBar } from "@ui/feedback/IneligibleBar";
import { Lock, GraduationCap, School, MapPin } from "lucide-react";
import { OnboardingContainer } from "./OnboardingContainer";

export function EligibilityFlow() {
  // 👇 start at "step 0" which renders nothing
  const [currentStep, setCurrentStep] = useState<number>(0);
  const totalSteps = 3;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return null; // 🚀 empty step just shows container
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
        return <p>Unknown step</p>;
    }
  };

  return (
    <OnboardingContainer>
      {/* 🚫 No tracker/bars shown in step 0 */}
      {currentStep !== 0 && (
        <>
          {currentStep < 4 && currentStep < 6 && (
            <div className="mt-6 self-center min-h-[40px] flex items-center">
              <StepTracker
                currentStep={currentStep}
                totalSteps={totalSteps}
                onBack={() => setCurrentStep((s) => Math.max(1, s - 1))}
              />
            </div>
          )}
          {currentStep === 4 && (
            <div className="mt-6 self-center min-h-[40px] flex items-center">
              <EligibilityConfirmedBar />
            </div>
          )}
          {currentStep === 6 && (
            <div className="mt-6 self-center min-h-[40px] flex items-center">
              <IneligibleBar icon={Lock} />
            </div>
          )}
          {currentStep === 7 && (
            <div className="mt-6 self-center min-h-[40px] flex items-center">
              <IneligibleBar icon={GraduationCap} />
            </div>
          )}
          {currentStep === 8 && (
            <div className="mt-6 self-center min-h-[40px] flex items-center">
              <IneligibleBar icon={School} />
            </div>
          )}
          {currentStep === 9 && (
            <div className="mt-6 self-center min-h-[40px] flex items-center">
              <IneligibleBar icon={MapPin} />
            </div>
          )}
        </>
      )}

      {/* Step content */}
      {renderStep()}
    </OnboardingContainer>
  );
}
