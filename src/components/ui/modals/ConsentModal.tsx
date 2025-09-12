"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ParentConsentAgreementText } from "@/constants/copy/parentConsentLong";
import { renderText } from "@/utils/renderText";
import { Check } from "lucide-react";

interface ConsentModalProps {
  open: boolean;
  onClose: () => void;
  runtimeVars: Record<string, string>;
}

export function ConsentModal({ open, onClose, runtimeVars }: ConsentModalProps) {
  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-modal-title"
    >
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-3xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2
            id="consent-modal-title"
            className="text-lg font-semibold text-gray-900"
          >
            Full Parent Consent Agreement
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {/* Intro */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {renderText(ParentConsentAgreementText.intro, runtimeVars)}
          </p>

          {/* Sections */}
          {ParentConsentAgreementText.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {renderText(section.title, runtimeVars)}
              </h3>
              <ul className="space-y-2 pl-6">
                {section.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-gray-700 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-teal-600 mr-2 mt-0.5 shrink-0" />
                    <span>{renderText(bullet, runtimeVars)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Closing */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {renderText(ParentConsentAgreementText.closing, runtimeVars)}
          </p>

          {/* Legal */}
          <p className="text-xs text-gray-500 italic">
            {renderText(ParentConsentAgreementText.legal, runtimeVars)}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="text-sm text-blue-600 underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
