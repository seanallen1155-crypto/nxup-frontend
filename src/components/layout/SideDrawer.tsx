"use client";

import { useState } from "react";

export function SideDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        className="md:hidden p-2 text-text-primaryLight dark:text-text-primaryDark"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-bg-light dark:bg-bg-dark shadow-lg z-modal transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <nav className="mt-12 flex flex-col space-y-4 px-6 text-lg font-medium">
          <a href="#" className="hover:text-brand-primary">
            Dashboard
          </a>
          <a href="#" className="hover:text-brand-primary">
            Settings
          </a>
          <a href="#" className="hover:text-brand-primary">
            Logout
          </a>
        </nav>
      </aside>
    </>
  );
}
