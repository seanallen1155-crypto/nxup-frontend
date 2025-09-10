"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface EligibilityConfirmedBarProps {
  text?: string;
}

export function EligibilityConfirmedBar({
  text = "Eligibility Confirmed",
}: EligibilityConfirmedBarProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when mounted
    setAnimate(true);
  }, []);

  return (
    <div className="w-[90vw] max-w-[600px] flex justify-center items-center relative z-10 overflow-hidden">
      {/* Animated gradient wipe */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#28A745]/30 to-transparent
        ${animate ? "animate-wipe" : ""}`}
      />

      {/* Icon + Text lockup */}
      <div className="flex items-center space-x-2 relative z-10">
        <CheckCircle className="h-5 w-5 text-[#28A745]" strokeWidth={2} />
        <span className="text-sm font-semibold text-[#EAEAEA]">{text}</span>
      </div>
    </div>
  );
}
