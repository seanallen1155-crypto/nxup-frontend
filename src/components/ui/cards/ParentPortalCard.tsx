"use client";

import { ReactNode } from "react";
import clsx from "clsx";

/**
 * Shared frame for all Parent Portal cards
 */
interface ParentPortalCardProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export default function ParentPortalCard({
  title,
  className,
  children,
}: ParentPortalCardProps) {
  return (
    <div
      className={clsx(
        "w-full rounded-lg border border-gray-300 bg-white shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="px-4 pt-2 pb-1">
        <span className="text-caption font-medium text-gray-600 tracking-wide uppercase leading-none">
          {title}
        </span>
      </div>

      {/* Body */}
      <div className="px-4 pt-2 pb-4">{children}</div>
    </div>
  );
}
