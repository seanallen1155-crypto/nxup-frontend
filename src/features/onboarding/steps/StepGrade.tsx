"use client";

import { useState } from "react";
import { SelectorButton } from "@/components/ui/actions/SelectorButton";
import { SecondaryCTAButton } from "@/components/ui/actions/SecondaryCTAButton";

const gradeOptions = [
  "Middle School",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
  "College",
];

type StepGradeProps = {
  onNext?: (grade: string) => void;
};

export function StepGrade({ onNext }: StepGradeProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const isValidSelection = !!selected;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Headline */}
      <h2
        style={{
          fontFamily: "'Teko', sans-serif",
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: "110%",
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        What grade are you in?
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "130%",
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          maxWidth: "28ch",
          marginBottom: "0px",
          alignSelf: "center",
        }}
      >
        Pick your grade and you're on your way to building your NIL brand.
      </p>

      {/* Grade Options Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(96px, 1fr))",
          justifyContent: "center",
          justifyItems: "center",
          gap: "12px",
          marginTop: "16px",
          marginBottom: "8px",
          padding: "0 16px",
        }}
      >
        {gradeOptions.map((grade) => (
          <SelectorButton
            key={grade}
            label={grade}
            selected={selected === grade}
            onClick={() => setSelected(grade)}
          />
        ))}
      </div>

      {/* Secondary CTA Button */}
      <SecondaryCTAButton
        active={isValidSelection}
        onClick={() => isValidSelection && onNext?.(selected!)}
      >
        Continue
      </SecondaryCTAButton>
    </div>
  );
}
