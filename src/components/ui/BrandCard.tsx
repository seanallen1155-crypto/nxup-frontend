// src/components/ui/BrandCard.tsx
"use client";

import { Camera } from "lucide-react";
import ScoreBadge from "@/components/ui/ScoreBadge";

type BrandCardProps = {
  imageSrc?: string;
  firstName?: string;
  lastName?: string;
  sports?: string[];
  classYear?: string;
  hometown?: string;
  age?: string | number;
  score?: number;
};

export default function BrandCard({
  imageSrc,
  firstName = "your first name",
  lastName = "LAST NAME",
  sports = [],
  classYear = "202X",
  hometown = "Hometown",
  age = "—",
  score = 0,
}: BrandCardProps) {
  return (
    <div
      className="relative mx-auto w-full max-w-[calc(100%-32px)] aspect-[5/3] rounded-[20px] p-6
                 grid grid-cols-[1fr_2fr] gap-5
                 bg-[linear-gradient(135deg,#0d0f13_0%,#1c1e26_60%,#202737_100%)]
                 backdrop-blur-[12px] border border-white/15
                 shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(0,132,255,0.15),0_0_15px_rgba(0,114,255,0.35),0_0_25px_rgba(255,0,200,0.15)]"
    >
      {/* === Left photo panel === */}
      <div className="rounded-[16px] bg-gradient-to-br from-[#111822] to-[#1a2232] flex items-center justify-center overflow-hidden">
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
      <div className="relative flex flex-col justify-start gap-4">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className="uppercase text-[12px] font-medium tracking-wider text-white/60">
            {sports.length > 0 ? sports.join(" | ") : "YOUR SPORTS"}
          </div>
          <div className="text-xs text-white/70">
            <span className="opacity-70">powered by </span>
            <span className="font-bold text-white">NXUP</span>
          </div>
        </div>

        {/* Name + details */}
        <div className="flex flex-col">
          <span className="text-white text-[22px] sm:text-[28px] font-light lowercase leading-tight">
            {firstName}
          </span>
          <span className="text-white text-[22px] sm:text-[28px] font-bold uppercase leading-tight">
            {lastName}
          </span>

          <div className="mt-3 space-y-1 text-[14px] text-white/75">
            <div>Class of {classYear}</div>
            <div>
              <span className="font-semibold text-white">Hometown:</span>{" "}
              {hometown}
            </div>
            <div>
              <span className="font-semibold text-white">Age:</span> {age}
            </div>
          </div>
        </div>

        {/* ScoreBadge remains external, placed by parent */}
        <div className="absolute bottom-0 right-0">
          <ScoreBadge score={score} label="Athl Score" />
        </div>
      </div>
    </div>
  );
}

export function BrandCardBase() {
  return <BrandCard />;
}
