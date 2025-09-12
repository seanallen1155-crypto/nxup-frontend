"use client";

import { BrowserLogo } from "@/components/ui/logo/BrowserLogo";

interface ParentPortalProps {
  locked?: boolean;
}

export default function ParentPortal({ locked = false }: ParentPortalProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <div
        className="w-full h-16 relative flex items-center shadow-md overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #4A4A4A, #2E2E2E)",
        }}
      >
        {/* CSS noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at center, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 100%)",
            backgroundSize: "3px 3px",
          }}
        />

        {/* bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <div className="absolute left-6">
          <BrowserLogo theme="dark" variant="wide" className="h-8 w-auto" />
        </div>
      </div>

      {/* Body placeholder */}
      <div className="flex-1 flex items-center justify-center">
        {locked ? (
          <p className="text-gray-500">🔒 Portal is locked until consent is given.</p>
        ) : (
          <p className="text-gray-900">Welcome to the Parent Portal!</p>
        )}
      </div>
    </div>
  );
}
