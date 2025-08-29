// src/components/ui/BrandCard.tsx
"use client";

import { Camera } from "lucide-react";
import ScoreBadge from "@/components/ui/ScoreBadge";

type BrandCardProps = {
  imageSrc?: string;
  firstName?: string;
  lastName?: string;
  classYear?: string;
  hometown?: string;
  score?: number;
};

export default function BrandCard({
  imageSrc,
  firstName = "your first name",
  lastName = "LAST NAME",
  classYear = "Your Class Year",
  hometown = "Your Hometown",
  score = 0,
}: BrandCardProps) {
  const isPlaceholderYear = classYear === "Your Class Year";
  const isPlaceholderHometown = hometown === "Your Hometown";

  return (
    <div
      className="relative mx-auto w-full max-w-[calc(100%-32px)] 
                 rounded-[20px] p-4 sm:p-6
                 flex gap-4 sm:gap-6
                 bg-[linear-gradient(135deg,#0d0f13_0%,#1c1e26_60%,#202737_100%)]
                 backdrop-blur-[12px] border border-white/15
                 shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(0,132,255,0.15),0_0_15px_rgba(0,114,255,0.35),0_0_25px_rgba(255,0,200,0.15)]"
    >
      {/* === Left photo panel === */}
      <div className="w-32 sm:w-48 rounded-[16px] bg-gradient-to-br from-[#111822] to-[#1a2232] flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt="Athlete headshot"
            className="h-full w-full object-cover"
          />
        ) : (
          <Camera className="text-white/50" size={32} />
        )}
      </div>

      {/* === Right text block === */}
      <div className="relative flex-1 flex flex-col justify-start gap-4 pl-2 sm:pl-4">
        {/* Top row (only NXUP on the right) */}
        <div className="flex items-start justify-end">
          <div className="text-xs text-white/70">
            <span className="opacity-70">powered by </span>
            <span className="font-bold text-white">NXUP</span>
          </div>
        </div>

        {/* Name + details */}
        <div className="flex flex-col">
          <span className="text-white text-sm sm:text-[22px] font-light lowercase leading-tight">
            {firstName}
          </span>
          <span className="text-white text-base sm:text-[28px] font-bold uppercase leading-tight">
            {lastName}
          </span>

          <div className="mt-3 space-y-1 text-xs sm:text-[14px] text-white/75">
            <div className={isPlaceholderYear ? "italic" : ""}>{classYear}</div>
            <div className={isPlaceholderHometown ? "italic" : ""}>
              {hometown}
            </div>
          </div>
        </div>

        {/* ScoreBadge */}
        <div className="mt-4 flex justify-end sm:mt-0 sm:block sm:absolute sm:bottom-6 sm:right-6">
          <ScoreBadge score={score} />
        </div>
      </div>
    </div>
  );
}

export function BrandCardBase() {
  return <BrandCard />;
}
