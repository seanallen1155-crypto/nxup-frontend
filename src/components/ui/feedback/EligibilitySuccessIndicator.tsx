"use client";

import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

export function EligibilitySuccessIndicator() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(true); // trigger entrance animation once
  }, []);

  return (
    <div className="flex justify-center items-center mt-7 mb-5 z-10">
      {/* ✅ Single Icon with glow + animations */}
      <i
        className={`ri-checkbox-circle-fill text-[40px] text-[#22C55E] ${
          entered ? "animate-popFlareOnce" : ""
        } animate-pulseGlow`}
        aria-hidden="true"
      />
    </div>
  );
}
