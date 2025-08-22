"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashLogo() {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-[#006DFF]
      "
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Logo */}
        <Image
          src="/logo/splash-logo.png"
          alt="App Logo"
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
          Your Skill. Your NIL. Your Money.
        </motion.p>
      </motion.div>
    </div>
  );
}
