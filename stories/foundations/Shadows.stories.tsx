// stories/foundations/Shadows.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/Shadows",
};

export const Levels = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    {Object.entries(tokens.shadows).map(([name, shadow]) => (
      <div
        key={name}
        style={{
          width: "100px",
          height: "100px",
          background: "#fff",
          boxShadow: shadow,
          borderRadius: tokens.radii.md,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {name}
      </div>
    ))}
  </div>
);
