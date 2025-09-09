import Link from "next/link";
import clsx from "clsx";

export function Footer() {
  return (
    <footer
      className={clsx(
        "w-full py-4 flex justify-center gap-6",
        "bg-transparent",
        "text-text-secondaryDark text-xs md:text-sm"
      )}
    >
      <nav role="navigation" className="flex gap-6">
        <Link href="/terms" className="hover:text-brand-primary">
          Terms of Use
        </Link>
        <Link href="/privacy" className="hover:text-brand-primary">
          Privacy Policy
        </Link>
        <Link href="/contact" className="hover:text-brand-primary">
          Contact
        </Link>
        <Link href="/parents" className="hover:text-brand-primary">
          For Parents: How It Works
        </Link>
      </nav>
    </footer>
  );
}
