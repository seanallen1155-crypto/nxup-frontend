// src/components/ui/logo/BrowserLogo.tsx

"use client";

import Image from "next/image";

interface BrowserLogoProps {
  theme?: "dark" | "light";
  variant?: "wide" | "mark" | "stacked";
  className?: string;
}

export function BrowserLogo({
  theme = "dark",
  variant = "wide",
  className = "",
}: BrowserLogoProps) {
  const src = `/images/logos/${variant}-${theme}.svg`;

  return (
    <Image
      src={src}
      alt={`App logo (${variant} ${theme})`}
      width={301}
      height={40}
      className={`h-10 w-auto max-w-[200px] sm:max-w-[301px] ${className}`}
      priority
    />
  );
}
