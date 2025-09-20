"use client";

import React, {
  InputHTMLAttributes,
  useState,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import clsx from "clsx";

interface InputLightProps extends InputHTMLAttributes<HTMLInputElement> {
  state?: "default" | "error" | "success";
  context?: "athlete" | "parent";
  align?: "left" | "center";
}

export const InputLight = forwardRef<HTMLInputElement, InputLightProps>(
  (
    {
      state = "default",
      context = "parent",
      disabled = false,
      align = "left",
      className,
      style,
      value,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Expose forwarded ref
    useEffect(() => {
      if (typeof ref === "function") {
        ref(inputRef.current);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current =
          inputRef.current;
      }
    }, [ref]);

    // Base styles
    const baseStyles: React.CSSProperties = {
      height: "48px",
      width: "100%",
      borderRadius: "4px",
      backgroundColor: disabled ? "#E0E0E0" : "#FAFAFA",
      border: "1px solid #E0E0E0",
      boxShadow: disabled ? "none" : "0px 1px 2px rgba(0,0,0,0.05)",
      padding: align === "center" ? "0" : "0 14px",
      fontFamily: align === "center" ? "monospace" : "'Satoshi', sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: value ? 500 : 400, // bold if filled
      color: disabled ? "#666666" : "#1A1A1A",
      textAlign: align,
      outline: "none",
      transition: "all 0.2s ease",
    };

    // Placeholder styling (inline trick)
    const placeholderColor = "#8C8C8C"; // gray.450

    // State-specific overrides
    if (state === "error") {
      baseStyles.border = "1px solid #B3261E";
      baseStyles.boxShadow = "0px 0px 6px rgba(179,38,30,0.4)";
    } else if (state === "success") {
      baseStyles.border = "1px solid #176B4D";
      baseStyles.boxShadow = "0px 0px 6px rgba(23,107,77,0.4)";
    } else if (focused && !disabled) {
      if (context === "athlete") {
        baseStyles.border = "1px solid #FF5A1F";
        baseStyles.boxShadow =
          "0px 0px 6px rgba(255,90,31,0.4), 0 0 6px rgba(230,69,0,0.4)";
      } else {
        baseStyles.border = "1px solid #1E2A5E";
        baseStyles.boxShadow =
          "0px 0px 6px rgba(30,42,94,0.35), 0 0 6px rgba(36,61,138,0.35)";
      }
    }

    return (
      <input
        {...props}
        ref={inputRef}
        disabled={disabled}
        style={{ ...baseStyles, ...style }}
        className={clsx("outline-none", className)}
        value={value}
        placeholder={props.placeholder}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
      />
    );
  }
);

InputLight.displayName = "InputLight";
