// src/components/ui/ScoreBadge.tsx
"use client";

import { cn } from "@/lib/utils";

type ScoreBadgeProps = {
  score?: number;
  className?: string;
};

export default function ScoreBadge({
  score = 0,
  className,
}: ScoreBadgeProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {/* Badge */}
      <div
        className="relative flex items-center justify-center w-[56px] h-[56px] rounded-full shadow-[0_0_10px_rgba(0,132,255,0.4)]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,150,255,0.35) 0%, rgba(0,0,0,0.9) 80%)",
        }}
      >
        {/* Concentric Rings */}
        <div
          className="absolute rounded-full border border-[rgba(0,132,255,0.15)] animate-[pulse_4s_ease-in-out_infinite]"
          style={{ width: "70px", height: "70px", animationDelay: "0s" }}
        />
        <div
          className="absolute rounded-full border border-[rgba(0,132,255,0.08)] animate-[pulse_4s_ease-in-out_infinite]"
          style={{ width: "84px", height: "84px", animationDelay: "1s" }}
        />

        {/* Score */}
        <span className="text-white font-bold text-[22px] leading-none relative z-10">
          {score}
        </span>
      </div>

      {/* Label below badge */}
      <span className="uppercase text-[10px] tracking-widest text-white/65 mt-2">
        Brand Strength
      </span>
    </div>
  );
}
