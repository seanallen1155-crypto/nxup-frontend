// src/components/patterns/BackgroundImage.tsx

"use client";

import Image from "next/image";

interface BackgroundImageProps {
  blurred?: boolean;
  darken?: boolean;
}

export function BackgroundImage({ blurred = false, darken = false }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/landing/athlete.png"
        alt="Athlete background"
        fill
        className={`object-cover transition-all duration-500 ${
          blurred ? "blur-md" : ""
        }`}
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D0D0D 10%, #1E1E1E 35%, #1E1E1E 65%, #0D0D0D 100%)",
          opacity: darken ? 0.65 : 0.55, // slightly darker when flow is active
        }}
      />
    </div>
  );
}
