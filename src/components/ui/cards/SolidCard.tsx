// src/components/ui/cards/SolidCard.tsx

"use client";

import { ReactNode } from "react";

interface SolidCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SolidCard({ children, className = "", style }: SolidCardProps) {
  return (
    <div
      className={`
        relative z-10
        rounded-xl
        px-6 py-8
        shadow-lg
        ${className}
      `}
      style={{
        backgroundColor: "#2A2A2A", // temp hardcoded mid-dark, to be tokenized later
        ...style,
      }}
    >
      {children}
    </div>
  );
}
