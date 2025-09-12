"use client";

import clsx from "clsx";

interface ConsentStatusPillProps {
  status: "active" | "revoked" | "pending";
  timestamp?: string;
}

export default function ConsentStatusPill({ status, timestamp }: ConsentStatusPillProps) {
  let pillText = "";
  let pillClasses = "";
  let supportingText = "";

  switch (status) {
    case "active":
      pillText = "Active";
      pillClasses =
        "border border-green-500 bg-green-100 text-green-800 font-extrabold";
      supportingText = timestamp
        ? `Granted on ${new Date(timestamp).toLocaleDateString()}`
        : "Consent is currently active.";
      break;

    case "revoked":
      pillText = "Revoked";
      pillClasses = clsx(
        "bg-parent-error-bg text-parent-error-text border border-parent-error-border font-extrabold",
        "focus:outline-none focus:ring-2 focus:ring-parent-error-border focus:border-parent-error-border"
      );
      supportingText = timestamp
        ? `Consent was revoked on ${new Date(timestamp).toLocaleDateString()}`
        : "Consent has been revoked.";
      break;

    case "pending":
      pillText = "Pending";
      pillClasses =
        "border border-gray-400 bg-gray-100 text-gray-700 font-extrabold";
      supportingText = "Pending your approval.";
      break;
  }

  return (
    <div className="flex items-center gap-2">
      {/* Pill */}
      <span
        className={clsx(
          "inline-block rounded-full px-3 py-1 text-sm",
          pillClasses
        )}
      >
        {pillText}
      </span>

      {/* Supporting text */}
      <span className="text-sm text-gray-600">{supportingText}</span>
    </div>
  );
}
