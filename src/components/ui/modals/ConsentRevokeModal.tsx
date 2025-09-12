"use client";

import { useEffect } from "react";
import { parentConsentRevokeCopy } from "@/constants/copy/parentConsentRevoke";

interface ConsentRevokeModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConsentRevokeModal({
  open,
  onClose,
  onConfirm,
}: ConsentRevokeModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-t-lg sm:rounded-lg shadow-lg w-full sm:w-[480px] max-h-[80vh] flex flex-col animate-slideUp sm:animate-fadeIn">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 px-4 pt-6">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-600 font-bold">!</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Revoke Consent
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-4 text-left text-gray-700 overflow-y-auto space-y-3">
          <ul className="list-disc list-inside space-y-2">
            {parentConsentRevokeCopy.bullets.map((line, idx) => (
              <li key={idx} className="text-sm leading-relaxed">
                {line}
              </li>
            ))}
          </ul>

          <a
            href={parentConsentRevokeCopy.privacyPolicy.href}
            className="block text-xs text-blue-600 underline mt-4"
          >
            {parentConsentRevokeCopy.privacyPolicy.text}
          </a>
        </div>

        {/* Footer Actions */}
        <div className="px-6 pb-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onConfirm}
             // TODO: Wire this action to update consent status in state + backend API
            className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            {parentConsentRevokeCopy.buttons.confirm}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            {parentConsentRevokeCopy.buttons.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
