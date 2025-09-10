"use client";

import { LucideIcon } from "lucide-react";

interface IneligibleBarProps {
  text?: string;
  icon: LucideIcon;
}

export function IneligibleBar({
  text = "Not quite eligible at this time",
  icon: Icon,
}: IneligibleBarProps) {
  return (
    <div className="w-[90vw] max-w-[600px] flex items-center relative z-10">
      <div className="flex items-center space-x-2">
        <Icon className="h-5 w-5 text-[#FFB3C1]" strokeWidth={2} />
        <span className="text-sm font-medium text-[#FFB3C1]">{text}</span>
      </div>
    </div>
  );
}
