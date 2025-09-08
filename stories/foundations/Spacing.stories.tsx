// stories/foundations/Spacing.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/Spacing",
};

export const Scale = () => (
  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    <div>
      <h4>Button Padding</h4>
      <div
        style={{
          padding: `${tokens.spacing.buttonPaddingY} ${tokens.spacing.buttonPaddingX}`,
          background: "#eee",
        }}
      >
        Example Button
      </div>
    </div>
    <div>
      <h4>Input Height</h4>
      <div
        style={{
          height: tokens.spacing.inputHeight,
          background: "#eee",
          width: "200px",
        }}
      />
    </div>
  </div>
);
