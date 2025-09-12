"use client";

import ConsentStatusPill from "@/components/ui/indicators/ConsentStatusPill";

interface ConsentCardProps {
  status: "active" | "revoked" | "pending";
  timestamp?: string | null;
}

export default function ConsentCard({ status, timestamp }: ConsentCardProps) {
  return (
    <div className="w-full rounded-lg border border-gray-300 bg-white shadow-sm">
      {/* Header Row */}
      <div className="px-4 pt-2 pb-1">
        <span className="text-caption font-medium text-gray-600 tracking-wide uppercase leading-none">
          PARENTAL CONSENT
        </span>
      </div>

      {/* Body */}
      <div className="px-4 pt-2 pb-4">
        <ConsentStatusPill status={status} timestamp={timestamp ?? undefined} />
      </div>
    </div>
  );
}
