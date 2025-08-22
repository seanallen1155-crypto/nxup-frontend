// badge.tsx
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
    success: "bg-success text-white",
    warning: "bg-warning text-ink",
    error: "bg-error text-white",
    accent: "bg-accent text-ink",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
