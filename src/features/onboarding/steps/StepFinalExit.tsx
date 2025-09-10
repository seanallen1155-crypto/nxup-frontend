"use client";

import { CheckCircle } from "lucide-react";

export function StepFinalExit() {
  return (
    <div className="flex flex-col items-center w-full h-full text-center pt-[6vh] px-4">
      {/* Hero / Headline */}
      <h2 className="m-0 font-inter font-black text-white text-2xl leading-snug max-w-[90%]">
        All set here. Check your text messages to log in.
      </h2>

      {/* Big Success Icon */}
      <CheckCircle
        className="mt-6 h-20 w-20 text-[#28A745]"
        strokeWidth={2}
      />

      {/* Subline */}
      <p className="m-0 mt-6 text-base text-[#EAEAEA] max-w-[90%] leading-relaxed">
        We sent the link to your phone. Tap it to log into the app.
      </p>

      {/* Resend Link */}
      <button
        type="button"
        className="mt-6 text-sm font-medium text-[#EAEAEA] hover:underline"
        onClick={() => {
          // TODO: Wire up resend functionality
          console.log("Resend link clicked");
        }}
      >
        Didn’t get it? Resend
      </button>
    </div>
  );
}
