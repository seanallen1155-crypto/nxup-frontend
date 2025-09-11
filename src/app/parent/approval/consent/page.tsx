"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BrowserLogo } from "@/components/ui/logo/BrowserLogo";
import { ParentConsentCopy } from "@/constants/copy/parentConsent";
import { renderText } from "@/utils/renderText";
import { Check } from "lucide-react";
import { ParentCTAButton } from "@/components/ui/actions/ParentCTAButton";

export default function ParentApprovalConsentPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Mocked runtime values (later from backend / context)
  const runtimeVars = {
    appName: "NXUP",
    athleteFullName: "Jordan Michael Smith",
    athleteFirstName: "Jordan",
    athleteLastName: "Smith",
    athleteNickname: "Jordy",
    parentFullName: "Alex Smith",
    parentFirstName: "Alex",
    parentLastName: "Smith",
  };

  const handleApproveClick = () => {
    if (!checked) {
      // Trigger pulse animation on checkbox
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
      return;
    }
    router.push("/parent/approval/complete");
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <div
        className="w-full h-16 relative flex items-center"
        style={{ backgroundColor: "#424242" }}
      >
        <div className="absolute left-6">
          <BrowserLogo theme="dark" variant="wide" className="h-8 w-auto" />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-8">
        {/* Section Header */}
        <h2 className="font-inter font-black text-gray-900 text-2xl mb-1">
          {renderText(ParentConsentCopy.header, runtimeVars)}
        </h2>

        {/* Intro Paragraph */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {renderText(ParentConsentCopy.intro, runtimeVars)}
        </p>

        {/* Subheading */}
        <h3 className="text-base font-medium text-gray-900 mt-6 mb-3">
          {renderText(ParentConsentCopy.subheading, runtimeVars)}
        </h3>

        {/* Numbered Sections */}
        {ParentConsentCopy.sections.map((section, i) => (
          <div key={i} className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {renderText(section.title, runtimeVars)}
            </h4>
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

        {/* Closing Paragraph */}
        <p className="text-sm text-gray-700 leading-relaxed mt-6 mb-8">
          {renderText(ParentConsentCopy.closing, runtimeVars)}
        </p>

        {/* FAQ Link */}
        <div>
          <button
            type="button"
            className="text-sm text-blue-600 underline cursor-pointer"
            onClick={() => router.push("/faq")}
          >
            View Consent FAQ
          </button>
        </div>
      </main>

      {/* Sticky Consent Actions */}
      <div className="sticky bottom-0 w-full bg-white border-t p-4">
        <div className="max-w-2xl mx-auto space-y-3">
          {/* Checkbox Confirmation */}
          <label
            className={`flex items-start text-sm text-gray-800 transition rounded px-1 ${
              pulse ? "animate-pulse-highlight" : ""
            }`}
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-teal-600 rounded mt-0.5 mr-2"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span>{renderText(ParentConsentCopy.checkbox, runtimeVars)}</span>
          </label>

          {/* Final Legal Line */}
          <p className="text-xs text-gray-500 leading-snug italic">
            {renderText(ParentConsentCopy.legal, runtimeVars)}
          </p>

          {/* CTA */}
          <ParentCTAButton
            onClick={handleApproveClick}
            className={`w-full ${
              !checked ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            I Approve & Continue
          </ParentCTAButton>
        </div>
      </div>

      {/* Custom pulse animation */}
      <style jsx>{`
        @keyframes pulseHighlight {
          0% {
            background-color: rgba(239, 68, 68, 0.15); /* red-500/15 */
          }
          50% {
            background-color: rgba(239, 68, 68, 0.35); /* red-500/35 */
          }
          100% {
            background-color: transparent;
          }
        }
        .animate-pulse-highlight {
          animation: pulseHighlight 0.6s ease;
        }
      `}</style>
    </div>
  );
}
