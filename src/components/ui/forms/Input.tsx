// src/components/ui/forms/Input.tsx

"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full rounded-md px-4 py-2",
          "bg-gray-800 text-white font-extrabold", // entered text = heavy
          "placeholder-gray-500 placeholder:font-normal", // placeholder = normal
          "border border-gray-600",
          "focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] focus:border-transparent",
          "transition-colors duration-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
