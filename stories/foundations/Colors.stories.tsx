// stories/foundations/Colors.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/Colors",
};

export const BrandAndSemantic = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
    {Object.entries(tokens.colors).map(([group, values]) => (
      <div key={group} style={{ flexBasis: "100%" }}>
        <h3>{group}</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {Object.entries(values).map(([name, hex]) => (
            <div key={name} style={{ textAlign: "center" }}>
              <div
                style={{
                  backgroundColor: hex,
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
              <small>{name}</small>
              <br />
              <code>{hex}</code>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
