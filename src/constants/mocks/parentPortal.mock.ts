import { ParentPortalData } from "@/types/parentPortal";

export const mockParentPortal: ParentPortalData = {
  parent_id: "parent_123",
  parent_name: "Jane Doe",
  linked_children: [
    {
      child_id: "child_001",
      child_name: "Alex Doe",
      child_sport: "Basketball",
      child_profile_image_url: "https://example.com/alex.png",
      consent: {
        consent_status: "active",
        consent_granted_at: "2025-09-10T12:00:00Z",
        consent_revoked_at: null,
        consent_document_url: "https://example.com/docs/consent_child_001.pdf",
      },
      activity_snapshot: {
        activity_status: "active",
        brand_builder_status: "active",
        merch_store_status: "preview",
      },
    },
    {
      child_id: "child_002",
      child_name: "Jordan Doe",
      child_sport: "Soccer",
      child_profile_image_url: "https://example.com/jordan.png",
      consent: {
        consent_status: "pending",
        consent_granted_at: null,
        consent_revoked_at: null,
        consent_document_url: null,
      },
      activity_snapshot: {
        activity_status: "inactive",
        brand_builder_status: "not_started",
        merch_store_status: "not_created",
      },
    },
  ],
};
