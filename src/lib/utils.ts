import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// cn() merges conditional + tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
