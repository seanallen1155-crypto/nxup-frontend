// src/components/ui/avatars/ChildAvatar.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { getAvatarColorClass } from "@/lib/avatarColors";
import type { Child } from "@/types/parentPortal";

export interface ChildAvatarProps {
  size?: "sm" | "md" | "lg";
  child: Child;
  isSelected?: boolean;
  index?: number;
  total?: number;
  onSelect?: () => void;
}

const SIZE_MAP = {
  sm: 40,
  md: 48,
  lg: 72,
};

export default function ChildAvatar({
  size = "md",
  child,
  isSelected = false,
  index = 0,
  total = 1,
  onSelect,
}: ChildAvatarProps) {
  const dimension = SIZE_MAP[size];
  const initial = child.firstName.charAt(0).toUpperCase();
  const colorClass = getAvatarColorClass(child.id, index, total);

  // Track if image failed
  const [imageError, setImageError] = useState(false);
  const showFallback = !child.profileImageUrl || imageError;

  return (
    <button
      type="button"
      role="option"
      aria-label={`${child.firstName}, ${child.consentStatus}`}
      aria-selected={isSelected}
      onClick={onSelect}
      className={clsx(
        "flex flex-col items-center focus:outline-none snap-center",
        "motion-safe:transition-transform motion-safe:duration-fast"
      )}
    >
      <div
        className={clsx(
          "relative rounded-full flex items-center justify-center border-2 border-white",
          colorClass,
          "motion-safe:transition-transform motion-safe:duration-fast motion-safe:ease-in-out hover:scale-105",
          isSelected && "ring-4 ring-teal-500 shadow-sm"
        )}
        style={{ width: dimension, height: dimension }}
      >
        {showFallback ? (
          <span
            className="font-bold text-white"
            style={{ fontSize: dimension * 0.5 }}
            aria-hidden="true"
          >
            {initial}
          </span>
        ) : (
          <Image
            src={child.profileImageUrl!}
            alt={child.firstName}
            width={dimension}
            height={dimension}
            className="rounded-full object-cover"
            onError={() => setImageError(true)}
          />
        )}

        {/* Alert badge */}
        {typeof child.alerts === "number" && child.alerts > 0 && (
          <div
            className={clsx(
              "absolute -top-1 -right-1 rounded-full border border-white flex items-center justify-center bg-red-600 text-white",
              "motion-safe:transition"
            )}
            style={{
              width: dimension * 0.4,
              height: dimension * 0.4,
              fontSize: dimension * 0.25,
            }}
            role="status"
            aria-label={`${child.alerts} alert${child.alerts > 1 ? "s" : ""}`}
          >
            {child.alerts > 1 ? child.alerts : ""}
          </div>
        )}
      </div>
      <span
        className={clsx(
          "mt-2 text-caption font-medium",
          isSelected ? "text-text-inverse" : "text-text-muted"
        )}
      >
        {child.firstName}
      </span>
    </button>
  );
}
