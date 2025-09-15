// src/components/ui/feedback/StepTracker.tsx

"use client";

interface StepTrackerProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function StepTracker({
  currentStep,
  totalSteps,
  className = "",
}: StepTrackerProps) {
  const progress = Math.min(
    100,
    Math.round((currentStep / totalSteps) * 100)
  );

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Progress Bar (track + fill) */}
      <div
        style={{
          position: "relative",
          height: "6px",
          width: "100%",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "3px",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)",
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
            borderTopRightRadius: progress === 100 ? "3px" : "0px",
            borderBottomRightRadius: progress === 100 ? "3px" : "0px",
            transition: "width 0.4s ease",
            boxShadow: "0 0 6px rgba(255,90,31,0.6)", // subtle glow
          }}
        />
      </div>

      {/* Step label */}
      <div
        style={{
          marginBottom: "24px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          color: "rgba(255,255,255,0.65)",
          textAlign: "center",
        }}
      >
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
}