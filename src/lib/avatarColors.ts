// src/lib/avatarColors.ts
import clsx from "clsx";

// Map our tokenized avatar colors → Tailwind classes (tokens.css -> tailwind.config.ts)
const AVATAR_COLOR_CLASSES = [
  "bg-avatar-teal-primary",
  "bg-avatar-blue",
  "bg-avatar-indigo",
  "bg-avatar-purple",
  "bg-avatar-slate",
];

export function getAvatarColorClass(
  childId: string,
  index: number,
  total: number
): string {
  if (total === 1) return "bg-avatar-teal-primary";
  if (total === 2) {
    return index === 0 ? "bg-avatar-teal-primary" : "bg-avatar-blue";
  }

  // Deterministic hash → spread colors
  let hash = 0;
  for (let i = 0; i < childId.length; i++) {
    hash = (hash << 5) - hash + childId.charCodeAt(i);
    hash |= 0; // keep 32-bit int
  }
  const colorIndex = Math.abs(hash) % AVATAR_COLOR_CLASSES.length;
  return AVATAR_COLOR_CLASSES[colorIndex] ?? "bg-avatar-slate";
}
