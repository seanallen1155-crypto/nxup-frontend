// src/types/parentPortal.ts

export interface ChildProfile {
  child_id: string;

  // ✅ Split into first/last so we aren’t overloading child_name
  child_first_name: string;
  child_last_name?: string;

  child_profile_image_url?: string | null;

  consent: {
    consent_status: string;
    consent_granted_at?: string | null;
  };

  activity_snapshot: {
    deal_count?: number | null;
  };
}

// Simplified UI shape for rendering
export interface Child {
  id: string;
  firstName: string;
  profileImageUrl: string | null;
  consentStatus: string;
  lastActiveAt: string;
  alerts: number;
}

export interface ParentPortalData {
  linked_children: ChildProfile[];
}
