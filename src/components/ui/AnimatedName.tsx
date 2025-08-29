// src/components/ui/AnimatedName.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

function typewriterChars(text: string, fallback: string) {
  return (text.trim() !== "" ? text : fallback).split("");
}

export function AnimatedFirst({
  firstName,
  nickname = "",
}: {
  firstName: string;
  nickname?: string;
}) {
  const display = nickname.trim() !== "" ? nickname : firstName;

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={`inline-block lowercase leading-tight ${
        display.trim() !== ""
          ? "text-[#C6FF45] font-light text-[clamp(18px,4vw,24px)]"
          : "text-white italic font-light text-[clamp(16px,3.5vw,22px)]"
      }`}
    >
      <AnimatePresence mode="sync">
        {typewriterChars(display, "your first name").map((char, i) => (
          <motion.span
            key={`first-${i}-${char}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: i * 0.03, duration: 0.15 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.span>
  );
}

export function AnimatedLast({ lastName }: { lastName: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={`inline-block uppercase leading-tight ${
        lastName.trim() !== ""
          ? "text-[#C6FF45] font-extrabold text-[clamp(24px,5vw,34px)]"
          : "text-white italic font-bold text-[clamp(20px,4.5vw,28px)]"
      }`}
    >
      <AnimatePresence mode="sync">
        {typewriterChars(lastName, "LAST NAME").map((char, i) => (
          <motion.span
            key={`last-${i}-${char}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: i * 0.03, duration: 0.15 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.span>
  );
}
