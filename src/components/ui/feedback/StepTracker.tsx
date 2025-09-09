// src/components/ui/feedback/StepTracker.tsx

"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface StepTrackerProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  className?: string;
}

export function StepTracker({
  currentStep,
  totalSteps,
  onBack,
  className = "",
}: StepTrackerProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div
      className={`w-[90vw] max-w-[600px] flex flex-col ${className} relative z-10`}
    >
      {/* Row: back button + bar */}
      <div className="flex items-center space-x-2">
        {/* Back button (hidden on step 1) */}
        {currentStep > 1 && (
          <button
            type="button"
            onClick={onBack}
            className="p-2 text-gray-300 hover:text-white"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        )}

        {/* Progress bar with 3-D look */}
        <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden relative shadow-inner">
          {/* Fill */}
          <div
            className="h-full bg-gradient-to-r from-[#FF944D] to-[#FF5A1F] transition-all duration-300 ease-in-out"
            style={{
              width: `${progress}%`,
              boxShadow:
                "inset 0 1px 2px rgba(0,0,0,0.1), inset 0 -1px 2px rgba(255,255,255,0.2)",
            }}
          />
          {/* Highlight strip */}
          <div className="absolute inset-x-0 top-0 h-[40%] bg-white/10 pointer-events-none rounded-t-full" />
        </div>
      </div>

      {/* Step text */}
      <p className="mt-2 text-xs text-gray-300 text-center">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
