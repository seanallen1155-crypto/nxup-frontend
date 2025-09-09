// src/components/ui/feedback/StepTracker.tsx

"use client";

interface StepTrackerProps {
  currentStep: number;
  totalSteps: number;
  className?: string; // allow spacing overrides
}

export function StepTracker({
  currentStep,
  totalSteps,
  className = "",
}: StepTrackerProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={`w-full max-w-[600px] flex flex-col items-center ${className}`}>
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FF5A1F] transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step text */}
      <p className="mt-2 text-xs text-gray-400">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
