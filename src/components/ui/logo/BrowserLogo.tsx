// src/components/ui/logo/BrowserLogo.tsx

"use client";

import Image from "next/image";

interface BrowserLogoProps {
  theme?: "dark" | "light";
  variant?: "wide" | "mark" | "stacked";
}

export function BrowserLogo({ theme = "dark", variant = "wide" }: BrowserLogoProps) {
  const src = `/images/logos/${variant}-${theme}.svg`;

  return (
    <div className="absolute top-6 left-6 z-10">
      <Image
        src={src}
        alt={`App logo (${variant} ${theme})`}
        width={301}
        height={40}
        className="h-10 w-auto max-w-[200px] sm:max-w-[301px]"
        priority
      />
    </div>
  );
}
