// src/components/ui/typography.tsx
import { cn } from "@/lib/utils";

export function H1({ className, ...props }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-h1 text-primary font-bold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function Body({ className, ...props }) {
  return (
    <p
      className={cn(
        "leading-7 text-body", // ✅ semantic font size + semantic color
        className
      )}
      {...props}
    />
  );
}

export function Caption({ className, ...props }) {
  return (
    <span
      className={cn(
        "text-caption tracking-wide uppercase text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  );
}
