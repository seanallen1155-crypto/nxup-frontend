"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", value, ...props }, ref) => {
    const hasValue = value !== undefined && value !== "";

    return (
      <input
        ref={ref}
        value={value}
        className={clsx(
          "w-full rounded-md px-4 py-2",
          "bg-gray-800 text-white font-extrabold",
          "placeholder-gray-500 placeholder:font-normal",
          "transition-colors duration-200",
          // Base border
          hasValue
            ? "border border-green-500"
            : "border border-gray-600 hover:border-green-400",
          // Focus state (always green)
          "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
