// src/app/onboarding/intro/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "500" });

export default function OnboardingIntroPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🔥 Background: smoother gradient loop with subtle accent */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#007BFF] via-[#6C63FF] to-[#007BFF]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "300% 300%" }}
      />
      {/* Accent glow (very subtle green tint) */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(198,255,69,0.15),transparent_70%)]"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Dark vignette edges */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent,black)] opacity-70" />

      {/* Progress Tracker */}
      <div className="absolute top-6 flex items-center space-x-3 z-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === 1 ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
        <span className="ml-2 text-white/80 text-sm font-medium">
          Warm-Up Drill 1/3
        </span>
      </div>

      {/* Content (upper 1/3) */}
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center pt-[15vh] space-y-6">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${bebas.className} text-white text-6xl drop-shadow-lg`}
        >
          Your NIL Journey Starts Now
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={`${inter.className} text-white/90 text-lg font-semibold`}
        >
          3 quick drills to unlock your first win.
        </motion.h2>

        {/* Supporting Line */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-white/70 italic text-sm"
        >
          Less than 3 minutes to game-ready.
        </motion.h3>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 20px rgba(108,99,255,0.6)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.97,
            transition: { duration: 0.15, ease: "easeIn" },
          }}
          onClick={() => router.push("/onboarding/name")}
          className="mt-10 w-full sm:w-auto px-12 py-4 rounded-full 
                     bg-gradient-to-r from-[#007BFF] to-[#6C63FF]
                     text-white font-bold text-lg shadow-lg relative 
                     flex items-center justify-center space-x-2 transition-all"
        >
          <span>Let’s Play</span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
