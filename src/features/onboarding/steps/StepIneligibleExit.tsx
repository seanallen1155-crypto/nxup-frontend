"use client";

import { Hourglass } from "lucide-react";

export function StepIneligibleExit() {
  return (
    <div className="flex flex-col items-center w-full h-full text-center pt-[6vh] px-4">
      {/* Hero / Headline */}
      <h2 className="m-0 font-inter font-black text-white text-2xl leading-snug max-w-[90%]">
        All set. We’ve got your number.
      </h2>

      {/* Big Waitlist Icon */}
      <Hourglass
        className="mt-6 h-20 w-20 text-white"
        strokeWidth={2}
      />

      {/* Subline */}
      <p className="m-0 mt-6 text-base text-[#EAEAEA] max-w-[90%] leading-relaxed">
        We’ll keep your spot warm. As soon as you’re eligible, you’ll get a text
        with your app link.
      </p>
    </div>
  );
}
