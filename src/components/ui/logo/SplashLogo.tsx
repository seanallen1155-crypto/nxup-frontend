// src/components/ui/logo/SplashLogo.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashLogo() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <Image
        src="/logo/nxup_white.png"
        alt="NXUP Logo"
        width={260}
        height={260}
        className="pointer-events-none select-none"
        priority
      />

      {/* Tagline */}
      <motion.p
        className="text-white text-xl md:text-2xl font-semibold text-center mt-1 leading-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Your Name. Your Game. Your Value.
      </motion.p>
    </motion.div>
  );
}
