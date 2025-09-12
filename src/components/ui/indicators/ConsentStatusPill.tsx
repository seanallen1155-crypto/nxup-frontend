"use client";

import clsx from "clsx";

interface ConsentStatusPillProps {
  status: "active" | "revoked" | "pending";
  timestamp?: string; // ISO string or human-readable
}

export default function ConsentStatusPill({ status, timestamp }: ConsentStatusPillProps) {
  let pillText = "";
  let pillClasses = "";
  let supportingText = "";

  switch (status) {
    case "active":
      pillText = "Active";
      pillClasses = "bg-green-500 text-white";
      supportingText = timestamp
        ? `Granted on ${new Date(timestamp).toLocaleDateString()}`
        : "Consent is currently active.";
      break;
    case "revoked":
      pillText = "Revoked";
      pillClasses = "bg-red-600 text-white";
      supportingText = timestamp
        ? `Consent was revoked on ${new Date(timestamp).toLocaleDateString()}`
        : "Consent has been revoked.";
      break;
    case "pending":
      pillText = "Pending";
      pillClasses = "bg-amber-500 text-black";
      supportingText = "Consent has not yet been granted.";
      break;
  }

  return (
    <div className="flex flex-col items-start gap-1">
      {/* Pill */}
      <span
        className={clsx(
          "inline-block rounded-full px-3 py-1 text-sm font-semibold",
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
