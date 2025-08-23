// src/components/ui/BackgroundEffects.tsx
"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* White floodlight streak */}
      <motion.div
        className="absolute top-1/3 h-1/2 w-[200%] bg-white/30 blur-2xl"
        initial={{ x: "-150%", opacity: 0 }}
        animate={{ x: ["-150%", "150%"], opacity: [0, 0.4, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transform: "skewX(-20deg)" }}
      />

      {/* Blue floodlight streak */}
      <motion.div
        className="absolute top-1/2 h-1/3 w-[200%] bg-blue-400/30 blur-xl"
        initial={{ x: "-150%", opacity: 0 }}
        animate={{ x: ["-150%", "150%"], opacity: [0, 0.3, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        style={{ transform: "skewX(-20deg)" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,black)] opacity-50" />
    </div>
  );
}
