"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export function OnboardingNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col justify-between w-6 h-5 focus:outline-none z-[10000]"
      >
        <span
          className={`block h-0.5 w-full bg-white transform transition duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white transition duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white transform transition duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Drawer in a portal so it escapes section stacking context */}
      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-black/90 transform transition-transform duration-300 ease-in-out`}
            style={{ zIndex: 99999 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <nav className="flex flex-col mt-16 space-y-4 px-6">
              <a href="#features" className="text-white hover:text-orange-400">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-orange-400">
                Pricing
              </a>
              <a href="#about" className="text-white hover:text-orange-400">
                About
              </a>
              <a href="#contact" className="text-white hover:text-orange-400">
                Contact
              </a>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
