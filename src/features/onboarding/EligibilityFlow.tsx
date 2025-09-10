"use client";

import { useState } from "react";
import { StepDOB } from "./steps/StepDOB";
import { StepGrade } from "./steps/StepGrade";
import { StepZip } from "./steps/StepZip";
import { StepResultsSuccess } from "./steps/StepResultsSuccess";
import { StepFinalExit } from "./steps/StepFinalExit";
import { BackgroundImage } from "@patterns/background/BackgroundImage";
import { BrowserLogo } from "@ui/logo/BrowserLogo";
import { BrowserFooter } from "@ui/footer/BrowserFooter";
import { SolidCard } from "@ui/cards/SolidCard";
import { StepTracker } from "@ui/feedback/StepTracker";
import { EligibilityConfirmedBar } from "@ui/feedback/EligibilityConfirmedBar";

export function EligibilityFlow() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 3;

  const renderStep = () => {
    switch (currentStep) {
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

      {/* Tracker / Success Bar */}
      {currentStep < 4 && (
        <div className="mt-6 self-center min-h-[40px] flex items-center">
          <StepTracker
            currentStep={currentStep}
            totalSteps={totalSteps}
            onBack={() => setCurrentStep((s) => Math.max(1, s - 1))}
          />
        </div>
      )}
      {(currentStep === 4) && (
        <div className="mt-6 self-center min-h-[40px] flex items-center">
          <EligibilityConfirmedBar />
        </div>
      )}
      {/* Step 5 intentionally has no tracker/success bar */}

      {/* Step Card */}
      {currentStep !== 5 && (
        <div className="relative z-10 flex flex-1 items-start justify-center mt-8">
          <SolidCard
            className={`w-[90vw] max-w-[600px] min-h-[400px] flex flex-col transition-colors duration-300
              ${currentStep === 4 ? "border border-green-500" : ""}`}
          >
            {renderStep()}
          </SolidCard>
        </div>
      )}

      {/* Step 5 content without card */}
      {currentStep === 5 && (
        <div className="relative z-10 flex flex-1 items-center justify-center">
          {renderStep()}
        </div>
      )}

      {/* Footer */}
      <div className="relative z-10 mt-8">
        <BrowserFooter theme="dark" />
      </div>
    </div>
  );
}
