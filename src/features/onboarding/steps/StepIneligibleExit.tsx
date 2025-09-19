// src/features/onboarding/steps/StepIneligibleExit.tsx
"use client";

export function StepIneligibleExit() {
  return (
    <div className="flex flex-col items-center text-center px-4 w-full pb-8">
      {/* ✅ Headline */}
      <h2
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "28px",
          color: "#FFFFFF",
          textAlign: "center",
          marginTop: "36px",   // ✅ identical spacing to StepFinalExit
          marginBottom: "20px",
        }}
      >
        All set.<wbr /> We’ve got your number.
      </h2>

      {/* ✅ Supporting Copy */}
      <p
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "22px",
          color: "#A0A0A0",
          textAlign: "center",
          maxWidth: "38ch",
          marginBottom: "24px", // ✅ matches StepFinalExit spacing
        }}
      >
        We’ll keep your spot warm. As soon as you’re eligible for NIL Journey,
        we’ll text you a link with your login to the app.
      </p>
    </div>
  );
}
