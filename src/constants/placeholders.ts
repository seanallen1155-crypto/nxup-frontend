/**
 * Centralized placeholder tokens used across the app.
 * These are written in a consistent format {{tokenName}}
 * so we can safely interpolate them later via utils.
 *
 * Example usage inside copy:
 * "This consent is required for {{athleteFirstName}} to participate in {{appName}}."
 */

export type PlaceholderKey =
  // App
  | "appName"
  // Athlete
  | "athleteFullName"
  | "athleteFirstName"
  | "athleteLastName"
  | "athleteNickname"
  // Parent
  | "parentFullName"
  | "parentFirstName"
  | "parentLastName";

export const PLACEHOLDERS: Record<PlaceholderKey, string> = {
  // App
  appName: "{{appName}}",
  // Athlete
  athleteFullName: "{{athleteFullName}}",
  athleteFirstName: "{{athleteFirstName}}",
  athleteLastName: "{{athleteLastName}}",
  athleteNickname: "{{athleteNickname}}",
  // Parent
  parentFullName: "{{parentFullName}}",
  parentFirstName: "{{parentFirstName}}",
  parentLastName: "{{parentLastName}}",
};
