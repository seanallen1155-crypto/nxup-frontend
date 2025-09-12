// src/components/patterns/flows/ParentPortal.tsx
"use client";

import { useState } from "react";
import clsx from "clsx";
import { BrowserLogo } from "@/components/ui/logo/BrowserLogo";
import ChildAvatar from "@/components/ui/avatars/ChildAvatar";
import { mockParentPortal } from "@/constants/mocks/parentPortal.mock";
import type { Child, ChildProfile } from "@/types/parentPortal";

interface ParentPortalProps {
  locked?: boolean;
}

/**
 * Map ChildProfile (API shape) → Child (UI shape)
 */
function mapChildProfileToChild(profile: ChildProfile): Child {
  return {
    id: profile.child_id,
    firstName: profile.child_first_name,  // ✅ cleanly mapped now
    profileImageUrl: profile.child_profile_image_url ?? null,
    consentStatus: profile.consent.consent_status,
    lastActiveAt: profile.consent.consent_granted_at ?? "1970-01-01T00:00:00Z",
    alerts: profile.activity_snapshot.deal_count ?? 0,
  };
}

export default function ParentPortal({ locked = false }: ParentPortalProps) {
  // Transform mock data into Child[]
  const children: Child[] = mockParentPortal.linked_children.map(mapChildProfileToChild);

  // Sort alphabetically by firstName
  const sortedChildren = [...children].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  // Default selection = most recently active
  const [selectedChildId, setSelectedChildId] = useState<Child["id"]>(
    children.reduce((latest, child) =>
      !latest || child.lastActiveAt > latest.lastActiveAt ? child : latest
    ).id
  );

  return (
    <div className="min-h-screen w-full flex flex-col bg-bg-light">
      {/* Header */}
      <div className="w-full h-16 relative flex items-center shadow-md overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_100%)] bg-[length:3px_3px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        <div className="absolute left-6">
          <BrowserLogo theme="dark" variant="wide" className="h-8 w-auto" />
        </div>
      </div>

      {/* Child Selector */}
      {!locked && (
        <div
          className="w-full overflow-x-auto border-b border-gray-200 bg-bg-light motion-safe:transition pt-2"
          role="listbox"
        >
          <div
            className={clsx(
              "flex gap-4 px-4 py-3 snap-x snap-mandatory",
              sortedChildren.length <= 3 ? "justify-center" : "justify-start"
            )}
          >
            {sortedChildren.map((child, index) => (
              <ChildAvatar
                key={child.id}
                child={child}
                isSelected={child.id === selectedChildId}
                index={index}
                total={sortedChildren.length}
                onSelect={() => setSelectedChildId(child.id)}
              />
            ))}
          </div>
        </div>
      )}


      {/* Body */}
      <div className="flex-1 flex items-center justify-center">
        {locked ? (
          <p className="text-gray-500">
            🔒 Portal is locked until consent is given.
          </p>
        ) : (
          <p className="text-gray-900">
            Welcome, you’re viewing content for{" "}
            {sortedChildren.find((c) => c.id === selectedChildId)?.firstName}.
          </p>
        )}
      </div>
    </div>
  );
}
