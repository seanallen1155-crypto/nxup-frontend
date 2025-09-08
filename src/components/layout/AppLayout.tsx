import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light text-text-primaryLight dark:bg-bg-dark dark:text-text-primaryDark">
      {/* Top nav (desktop/tablet) */}
      <NavBar />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      {/* Footer (desktop) */}
      <Footer />

      {/* Persistent bottom nav (mobile only) */}
      <BottomNav />
    </div>
  );
}
