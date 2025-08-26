// src/components/ui/OnboardingProgress.tsx
"use client";

type OnboardingProgressProps = {
  currentStep: number;
  totalSteps: number;
  label?: boolean;
};

export default function OnboardingProgress({
  currentStep,
  totalSteps,
  label = true,
}: OnboardingProgressProps) {
  return (
    <div className="flex items-center space-x-3 z-10">
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          return (
            <div
              key={step}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentStep === step ? "bg-white" : "bg-white/30"
              }`}
            />
          );
        })}
      </div>

      {/* Only show label when progress has started */}
      {label && currentStep > 0 && (
        <span className="ml-2 text-white/80 text-sm font-medium">
          Step {currentStep}/{totalSteps}
        </span>
      )}
    </div>
  );
}
