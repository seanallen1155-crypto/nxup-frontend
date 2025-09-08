// stories/foundations/Radii.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/Radii",
};

export const Corners = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    {Object.entries(tokens.radii).map(([name, value]) => (
      <div
        key={name}
        style={{
          width: "80px",
          height: "80px",
          background: tokens.colors.gray[200],
          borderRadius: value,
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
