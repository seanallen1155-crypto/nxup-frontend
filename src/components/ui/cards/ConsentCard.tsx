"use client";

import { useState } from "react";
import ConsentStatusPill from "@/components/ui/indicators/ConsentStatusPill";
import { ParentCTAButton } from "@/components/ui/actions/ParentCTAButton";
import ConsentRevokeModal from "@/components/ui/modals/ConsentRevokeModal";
import ParentPortalCard from "@/components/ui/cards/ParentPortalCard";

interface ConsentCardProps {
  status: "active" | "revoked" | "pending";
  timestamp?: string | null;
}

export default function ConsentCard({ status, timestamp }: ConsentCardProps) {
  const [showRevokeModal, setShowRevokeModal] = useState(false);

  const actionLabel = status === "active" ? "Revoke Consent" : "Grant Consent";

  return (
    <>
      <ParentPortalCard title="Consent Status">
        <div className="flex flex-col gap-4">
          {/* Status pill */}
          <ConsentStatusPill
            status={status}
            timestamp={timestamp ?? undefined}
          />

          {/* Primary Action */}
          <ParentCTAButton
            className="w-full bg-gray-800 hover:bg-gray-900 text-white"
            onClick={() => {
              if (status === "active") {
                setShowRevokeModal(true);
              } else {
                console.log("Grant Consent flow not yet implemented");
              }
            }}
          >
            {actionLabel}
          </ParentCTAButton>
        </div>
      </ParentPortalCard>

      <ConsentRevokeModal
        open={showRevokeModal}
        onClose={() => setShowRevokeModal(false)}
        onConfirm={() => {
          setShowRevokeModal(false);
          console.log("Revoke confirmed 🚨 (TODO: backend integration)");
        }}
      />
    </>
  );
}
