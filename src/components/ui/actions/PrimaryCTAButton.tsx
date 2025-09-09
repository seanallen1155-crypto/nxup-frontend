// src/components/ui/actions/PrimaryCTAButton.tsx

"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface PrimaryCTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function PrimaryCTAButton({
  children,
  className = "",
  disabled,
  ...props
}: PrimaryCTAButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "font-inter font-extrabold tracking-tight rounded-md px-6 py-2 text-base transition-colors duration-200",
        disabled
          ? "bg-gray-500 text-gray-300 cursor-not-allowed"
          : "bg-[#FF5A1F] text-white hover:bg-[#e94f17]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
