import { tokens } from "../../tokens";

export default { title: "UI/Badge" };

export const Variants = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <span
      style={{
        padding: "4px 8px",
        borderRadius: tokens.radii.full,
        background: tokens.colors.semantic.success,
        color: "#fff",
      }}
    >
      Success
    </span>
    <span
      style={{
        padding: "4px 8px",
        borderRadius: tokens.radii.full,
        background: tokens.colors.semantic.error,
        color: "#fff",
      }}
    >
      Error
    </span>
  </div>
);
