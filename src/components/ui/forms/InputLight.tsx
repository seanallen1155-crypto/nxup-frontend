"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputVariant = "default" | "parent";
type InputFieldSize = "sm" | "md" | "lg";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  value?: string;
  variant?: InputVariant;
  fieldSize?: InputFieldSize;
  hasError?: boolean;
}

export const InputLight = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      value,
      variant = "default",
      fieldSize = "md",
      hasError = false,
      ...props
    },
    ref
  ) => {
    const hasValue = value !== undefined && value !== "";

    // Base + typography
    const baseClasses =
      "w-full rounded-md transition-colors duration-200";
    const typography =
      "placeholder-gray-400 placeholder:font-normal";

    // Size scaling
    const sizeClasses =
      fieldSize === "sm"
        ? "px-2 py-1 text-sm"
        : fieldSize === "lg"
        ? "px-0 py-0 text-center text-2xl leading-none font-medium"
        : "px-4 py-2 text-base font-semibold";

    let variantClasses = "";

    if (variant === "default") {
      variantClasses = clsx(
        "bg-white text-gray-900",
        hasValue
          ? "border border-brand-primary"
          : "border border-gray-300 hover:border-brand-primary",
        "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
      );
    }

    if (variant === "parent") {
      if (hasError) {
        variantClasses = clsx(
          "bg-parent-error-bg text-parent-error-text",
          "border border-parent-error-border",
          "focus:outline-none focus:ring-2 focus:ring-parent-error-border focus:border-parent-error-border"
        );
      } else if (hasValue) {
        variantClasses = clsx(
          "bg-parent-teal-bgActive text-parent-teal-text",
          "border border-parent-teal-border",
          "focus:outline-none focus:ring-2 focus:ring-parent-teal-border focus:border-parent-teal-border"
        );
      } else {
        variantClasses = clsx(
          "bg-parent-teal-bgInactive text-gray-700",
          "border border-transparent",
          "focus:outline-none focus:ring-2 focus:ring-parent-teal-border focus:border-parent-teal-border"
        );
      }
    }

    return (
      <input
        ref={ref}
        value={value}
        className={clsx(baseClasses, typography, sizeClasses, variantClasses, className)}
        {...props}
      />
    );
  }
);

InputLight.displayName = "InputLight";
