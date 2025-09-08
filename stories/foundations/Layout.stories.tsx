// stories/foundations/Layout.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/Layout",
};

export const Containers = () => (
  <div style={{ width: "100%", background: tokens.colors.gray[100], padding: "1rem" }}>
    {Object.entries(tokens.layout.container).map(([bp, width]) => (
      <div
        key={bp}
        style={{
          maxWidth: width,
          margin: "0 auto",
          background: tokens.colors.brand.primary,
          color: "#fff",
          padding: tokens.layout.containerPadding,
        }}
      >
        {bp}: {width}
      </div>
    ))}
  </div>
);

export const Gutters = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: tokens.layout.gutter,
      background: tokens.colors.gray[200],
      padding: tokens.layout.containerPadding,
    }}
  >
    <div style={{ background: tokens.colors.brand.secondary, height: "80px" }}>Col 1</div>
    <div style={{ background: tokens.colors.brand.secondary, height: "80px" }}>Col 2</div>
  </div>
);
