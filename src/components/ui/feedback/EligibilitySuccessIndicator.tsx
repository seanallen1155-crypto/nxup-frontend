"use client";

import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

interface EligibilitySuccessIndicatorProps {
  size?: number; // size in px, default 40
}

export function EligibilitySuccessIndicator({
  size = 40,
}: EligibilitySuccessIndicatorProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(true); // trigger entrance animation once
  }, []);

  return (
    <div className="flex justify-center items-center z-10">
      {/* ✅ Inline fontSize ensures size works correctly */}
      <i
        className={`ri-checkbox-circle-fill ${
          entered ? "animate-popFlareOnce" : ""
        } animate-pulseGlow`}
        style={{ color: "#2ECC71", fontSize: `${size}px` }}
        aria-hidden="true"
      />
    </div>
  );
}