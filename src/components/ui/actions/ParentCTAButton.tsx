// src/components/parent/ParentCTAButton.tsx

"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ParentCTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ParentCTAButton({
  children,
  className = "",
  disabled,
  ...props
}: ParentCTAButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "font-inter font-extrabold tracking-tight rounded-md px-6 py-2 text-base transition-colors duration-200",
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-[#008080] text-white hover:bg-[#006666]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
