import { tokens } from "../../tokens";

export default { title: "UI/Avatar" };

export const Default = () => (
  <div
    style={{
      width: "64px",
      height: "64px",
      borderRadius: tokens.radii.full,
      background: tokens.colors.brand.primary,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: tokens.typography.fontFamily.primary,
    }}
  >
    SA
  </div>
);
