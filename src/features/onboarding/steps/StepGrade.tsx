"use client";

import { useState } from "react";

const gradeOptions = [
  "Middle School",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
  "College",
];

export function StepGrade() {
  const [selected, setSelected] = useState<string | null>(null);

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
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
          textAlign: "center",
          marginBottom: "12px",
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
          marginBottom: "20px",
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
          marginTop: "24px",
          marginBottom: "24px",
          padding: "0 16px",
        }}
      >
        {gradeOptions.map((grade) => {
          const isSelected = selected === grade;

          return (
            <button
              key={grade}
              onClick={() => setSelected(grade)}
              style={{
                minWidth: "96px",
                width: "100%",
                height: "56px",
                borderRadius: "8px",
                padding: "12px 20px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                lineHeight: "18px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "normal",
                position: "relative",

                // State Styles
                backgroundColor: "rgba(14,14,14,0.7)", // Neutral-900 @ 70%
                border: isSelected
                  ? "2px solid rgba(255,255,255,0.2)" // subtle highlight border
                  : "1px solid #2A2A2A", // Neutral-700 default
                boxShadow: isSelected
                  ? "0 0 6px rgba(255,90,31,0.25)" // orange halo
                  : "none",

                fontWeight: isSelected ? 600 : 500,
                color: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(26,26,26,0.85)"; // Neutral-800 @ 85%
                  (e.currentTarget as HTMLButtonElement).style.border =
                    "1px solid #3A3A3A"; // Neutral-600 hover
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(14,14,14,0.7)";
                  (e.currentTarget as HTMLButtonElement).style.border =
                    "1px solid #2A2A2A";
                }
              }}
            >
              {grade}

              {/* Optional underline accent when selected */}
              {isSelected && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    left: "12px",
                    right: "12px",
                    height: "2px",
                    backgroundColor: "#FF5A1F",
                    borderRadius: "1px",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
