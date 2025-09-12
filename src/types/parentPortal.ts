// src/types/parentPortal.ts

export type ConsentStatus = "active" | "revoked" | "pending";
export type ActivityStatus = "active" | "inactive";
export type BrandBuilderStatus = "not_started" | "active";
export type MerchStoreStatus = "not_created" | "preview" | "live";

export interface ConsentData {
  consent_status: ConsentStatus;
  consent_granted_at: string | null; // ISO timestamp
  consent_revoked_at: string | null; // ISO timestamp
  consent_document_url: string | null;
}

export interface ActivitySnapshot {
  activity_status: ActivityStatus;
  brand_builder_status: BrandBuilderStatus;
  merch_store_status: MerchStoreStatus;
  // Future-ready (hidden in MVP)
  earnings_summary?: Record<string, unknown>;
  deal_count?: number;
  friend_leaderboard_rank?: number;
}

export interface ChildProfile {
  child_id: string;
  child_name: string;
  child_sport?: string;
  child_profile_image_url?: string;
  consent: ConsentData;
  activity_snapshot: ActivitySnapshot;
}

export interface ParentPortalData {
  parent_id: string;
  parent_name?: string;
  linked_children: ChildProfile[];
}
