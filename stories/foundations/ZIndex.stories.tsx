// stories/foundations/ZIndex.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/ZIndex",
};

export const Layers = () => (
  <div style={{ position: "relative", height: "200px" }}>
    {Object.entries(tokens.zIndex).map(([name, value], i) => (
      <div
        key={name}
        style={{
          position: "absolute",
          top: `${i * 20}px`,
          left: `${i * 20}px`,
          width: "100px",
          height: "100px",
          background: "#3D5AFE",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: Number(value),
        }}
      >
        {name}
      </div>
    ))}
  </div>
);
