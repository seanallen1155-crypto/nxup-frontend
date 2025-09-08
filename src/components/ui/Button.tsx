import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition-transform focus:outline-none";

  const variants = {
    primary: "bg-primary text-white hover:scale-hover active:scale-tap",
    secondary: "bg-secondary text-white hover:scale-hover active:scale-tap",
    danger: "bg-error text-white hover:scale-hover active:scale-tap",
    ghost: "bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        isLoading && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
