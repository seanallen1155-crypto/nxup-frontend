// card.tsx
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-900 dark:border-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
