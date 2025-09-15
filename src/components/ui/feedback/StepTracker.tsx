"use client";

import { ChevronLeft } from "lucide-react";

interface StepTrackerProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function StepTracker({
  currentStep,
  totalSteps,
  className = "",
  showBack = false,
  onBack,
}: StepTrackerProps) {
  const progress = Math.min(
    100,
    Math.round((currentStep / totalSteps) * 100)
  );

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Back button row */}
      <div
        style={{
          height: "44px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "16px", // align with card padding
          marginBottom: "8px", // spacing below back control before bar
        }}
      >
        {showBack ? (
          <button
            onClick={onBack}
            aria-label="Go back"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px", // spacing between icon + text
              height: "44px",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "normal",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,1.0)";
              (e.currentTarget as HTMLButtonElement).style.textDecoration =
                "underline";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.85)";
              (e.currentTarget as HTMLButtonElement).style.textDecoration =
                "none";
            }}
          >
            <ChevronLeft size={16} strokeWidth={2} />
            Back
          </button>
        ) : null}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          position: "relative",
          height: "6px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "3px",
          marginBottom: "12px",
          marginLeft: "16px",
          marginRight: "16px",
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
            boxShadow: "0 0 6px rgba(255,90,31,0.6)",
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
