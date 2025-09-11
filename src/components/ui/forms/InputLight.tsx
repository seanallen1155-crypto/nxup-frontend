"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
}

export const InputLight = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", value, ...props }, ref) => {
    const hasValue = value !== undefined && value !== "";

    return (
      <input
        ref={ref}
        value={value}
        className={clsx(
          "w-full rounded-md px-4 py-2",
          "bg-white text-gray-900 font-semibold",
          "placeholder-gray-400 placeholder:font-normal",
          "transition-colors duration-200",
          // Base border
          hasValue
            ? "border border-teal-500"
            : "border border-gray-300 hover:border-teal-400",
          // Focus state (always teal)
          "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500",
          className
        )}
        {...props}
      />
    );
  }
);

InputLight.displayName = "InputLight";
