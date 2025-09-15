"use client";

import React from "react";
import clsx from "clsx";

type NumericPadModalProps = {
  isOpen: boolean;
  value: string; // digit string MMDDYYYY
  onChange: (next: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

export function NumericPadModal({
  isOpen,
  value,
  onChange,
  onConfirm,
  onCancel,
}: NumericPadModalProps) {
  if (!isOpen) return null;

  // Format preview MM/DD/YYYY
  const formatted = value
    .replace(/^(\d{0,2})(\d{0,2})(\d{0,4}).*$/, (_, mm, dd, yyyy) =>
      [mm, dd, yyyy].filter(Boolean).join("/")
    )
    .slice(0, 10);

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col justify-end"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay scrim */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onCancel}
        aria-hidden="true"
      />

      {/* Modal container */}
      <div
        className={clsx(
          "relative w-full h-[60vh] flex flex-col shadow-xl",
          "bg-[var(--surface-dark-tier3)] dark:bg-[var(--surface-light-tier3)]"
        )}
      >
        {/* Preview row */}
        <div
          className={clsx(
            "h-16 flex items-center justify-center",
            "bg-[var(--surface-dark-tier2)] dark:bg-[var(--surface-light-tier2)]"
          )}
        >
          <span className="font-satoshi text-lg text-gray-100 dark:text-gray-800">
            {formatted || "MM/DD/YYYY"}
          </span>
        </div>

        {/* Keypad grid */}
        <div className="flex-1 grid grid-cols-3 gap-2 p-4">
          {/* Placeholder — digits will go here */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center border rounded-md text-gray-200 dark:text-gray-900"
            >
              Key {i + 1}
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="h-14 flex gap-4 px-4 py-2 border-t border-gray-700 dark:border-gray-300">
          <button
            onClick={onCancel}
            className="flex-1 border rounded-md font-satoshi text-base text-gray-400 dark:text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-md font-teko text-lg text-white bg-gradient-to-r from-[#FF5A1F] to-[#E64500]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
