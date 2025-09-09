// src/features/onboarding/EligibilityFlow.tsx

"use client";

import { useState } from "react";
// Later we’ll import step components, e.g. StepDOB, StepGrade, StepZip
// import { StepDOB } from "./steps/StepDOB";

export function EligibilityFlow() {
  // State for which step we’re on (1 = DOB, 2 = Grade, 3 = Zip, etc.)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Temporary placeholder render
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <p>Step 1 (DOB) placeholder</p>;
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
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen">
      <div
        className="
          relative z-10 w-[90vw] max-w-[600px] rounded-lg 
          bg-black/40 backdrop-blur-xl 
          p-8 shadow-lg
        "
      >
        {renderStep()}

        <div className="flex justify-end mt-6">
          <button
            onClick={() => setCurrentStep((s) => s + 1)}
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
