// src/constants/mocks/parentPortal.mock.ts
import type { ParentPortalData } from "@/types/parentPortal";

export const mockParentPortal: ParentPortalData = {
  linked_children: [
    {
      child_id: "1",
      child_first_name: "Jordan",
      child_last_name: "Doe",
      child_profile_image_url: null,
      consent: {
        consent_status: "active",
        consent_granted_at: "2023-10-15T12:34:56Z",
      },
      activity_snapshot: {
        deal_count: 1,
      },
    },
    {
      child_id: "2",
      child_first_name: "Maya",
      child_last_name: "Smith",
      child_profile_image_url: "https://example.com/maya.png",
      consent: {
        consent_status: "pending",
        consent_granted_at: null,
      },
      activity_snapshot: {
        deal_count: 0,
      },
    },
  ],
};
