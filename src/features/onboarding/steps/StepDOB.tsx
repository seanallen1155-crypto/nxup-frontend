"use client";

type StepDOBProps = {
  onNext?: () => void;
};

export function StepDOB({ onNext }: StepDOBProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Content for Step 1 (DOB) will go here */}
    </div>
  );
}