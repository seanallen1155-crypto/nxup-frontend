// src/components/ui/logo/Logo.tsx
import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function Logo({ className, alt = "NXUP Logo", priority = false }: LogoProps) {
  return (
    <div className={clsx("relative", className)}>
      <Image
        src="/logo/nxup_white.png"
        alt={alt}
        fill
        priority={priority} // preload on splash/auth screens
        className="object-contain"
        sizes="(max-width: 768px) 150px, 200px" // responsive scaling
      />
    </div>
  );
}
