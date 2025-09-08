import { tokens } from "../../tokens";

export default { title: "UI/Card" };

export const Default = () => (
  <div
    style={{
      width: "200px",
      height: "120px",
      background: "#fff",
      borderRadius: tokens.radii.lg,
      boxShadow: tokens.shadows.md,
      padding: "1rem",
    }}
  >
    <h4 style={{ margin: 0 }}>Card Title</h4>
    <p style={{ fontSize: tokens.typography.fontSize.body }}>Some content here.</p>
  </div>
);
