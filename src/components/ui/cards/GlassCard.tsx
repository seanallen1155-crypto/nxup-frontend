// src/components/ui/cards/GlassCard.tsx

"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div
      className={`
        relative z-10
        rounded-xl
        px-6 py-8
        bg-white/10 backdrop-blur-lg
        border border-white/20
        shadow-lg
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}
