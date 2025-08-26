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
    <div
      className={cn(
        "relative flex items-center justify-center w-[64px] h-[64px] rounded-full",
        "shadow-[0_0_12px_rgba(0,132,255,0.5)]",
        className
      )}
      style={{
        background:
          "radial-gradient(circle at center, rgba(0,150,255,0.35) 0%, rgba(0,0,0,0.9) 80%)",
      }}
    >
      {/* Concentric Rings */}
      <div
        className="absolute rounded-full border border-[rgba(0,132,255,0.15)] animate-[pulse_4s_ease-in-out_infinite]"
        style={{ width: "78px", height: "78px", animationDelay: "0s" }}
      />
      <div
        className="absolute rounded-full border border-[rgba(0,132,255,0.08)] animate-[pulse_4s_ease-in-out_infinite]"
        style={{ width: "96px", height: "96px", animationDelay: "1s" }}
      />

      {/* Score content */}
      <div className="relative flex flex-col items-center justify-center text-center">
        <span className="text-white font-bold text-[26px] leading-none">
          {score}
        </span>
        <span className="uppercase text-[9px] tracking-widest text-white/60 mt-1">
          Brand Strength
        </span>
      </div>
    </div>
  );
}
