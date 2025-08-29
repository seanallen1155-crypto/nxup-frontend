"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useOnboardingStore } from "@/store/onboardingStore";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationStep({ onBack }: { onBack: () => void }) {
  const { setZip } = useOnboardingStore();
  const [zip, setZipLocal] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZipLocal(digits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setZip(zip);
    console.log("✅ Location step complete", { zip });
    // TODO: advance to next step
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col min-h-[70vh]">
      {/* Top Nav Back Button */}
      <div className="flex items-center mb-6 -ml-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" strokeWidth={2} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* ZIP Field */}
      <div className="flex flex-col items-center mb-6">
        <label className="text-base text-white mb-2 block font-semibold">
          Where do you play?
        </label>
        <p className="text-sm text-white/60 mb-3">
          Enter your ZIP code so we can check NIL rules in your state.
        </p>
        <input
          type="text"
          inputMode="numeric"
          aria-label="ZIP Code"
          placeholder="#####"
          value={zip}
          onChange={handleChange}
          className="w-4/5 h-12 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-center tracking-widest placeholder-gray-400 placeholder:italic focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* CTA pinned bottom */}
      <div className="mt-auto pt-6">
        <motion.div
          animate={zip.length === 5 ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Button type="submit" disabled={zip.length === 0} className="w-full">
            Continue
          </Button>
        </motion.div>
      </div>
    </form>
  );
}
