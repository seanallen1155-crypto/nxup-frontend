// src/components/ui/PulseWrapper.tsx
"use client";

import { motion } from "framer-motion";

export default function PulseWrapper({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={
        isActive
          ? {
              boxShadow: [
                "0 0 0px rgba(0,109,255,0.0)",
                "0 0 15px rgba(0,109,255,0.7)",
                "0 0 0px rgba(0,109,255,0.0)",
              ],
            }
          : { boxShadow: "0 0 0px rgba(0,0,0,0)" }
      }
      transition={{
        duration: 2,
        repeat: isActive ? Infinity : 0,
        ease: "easeInOut",
      }}
      className="rounded-xl"
    >
      {children}
    </motion.div>
  );
}
