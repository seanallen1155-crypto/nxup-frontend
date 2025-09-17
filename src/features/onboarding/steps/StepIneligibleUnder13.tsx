// src/features/onboarding/steps/StepIneligibleUnder13.tsx
"use client";

export function StepIneligibleUnder13() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full text-center pt-[12vh] px-4">
      {/* Icon */}
      <i
        className="ri-seedling-line"
        style={{
          fontSize: "48px",
          color: "rgba(76, 175, 80, 0.9)",
          filter: "drop-shadow(0 0 8px rgba(76, 175, 80, 0.4))",
        }}
        aria-hidden="true"
      />

      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "28px",
          color: "#FFFFFF",
          textAlign: "center",
          marginTop: "36px", // spacing below the icon
          marginBottom: "0", // reset margin so body spacing is explicit
        }}
      >
        Not quite yet.
      </h1>

      {/* Supporting text */}
      <p
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#CCCCCC",
          textAlign: "center",
          marginTop: "12px",
          maxWidth: "280px",
        }}
      >
        You need to be 13 or older to use this app. Come back when you’re old
        enough to start your NIL journey.
      </p>
    </div>
  );
}
