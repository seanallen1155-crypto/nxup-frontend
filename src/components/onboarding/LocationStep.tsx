"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LocationStep({ onBack }: { onBack: () => void }) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Location submitted", { city, state });
    // Future: save to Zustand store (add setLocation to onboardingStore)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label className="text-xs text-white/70 mb-1">City</label>
      <input
        type="text"
        placeholder="Your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold"
      />

      <label className="text-xs text-white/70 mb-1">State</label>
      <input
        type="text"
        placeholder="Your state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold"
      />

      <div className="flex justify-between space-x-2">
        <Button type="button" onClick={onBack} className="flex-1 bg-gray-700">
          Back
        </Button>
        <Button type="submit" className="flex-1">
          Finish
        </Button>
      </div>
    </form>
  );
}
