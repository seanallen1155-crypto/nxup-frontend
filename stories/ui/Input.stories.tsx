import { tokens } from "../../tokens";

export default { title: "UI/Input" };

export const Default = () => (
  <input
    placeholder="Enter text"
    style={{
      height: tokens.spacing.inputHeight,
      padding: "0 12px",
      border: `1px solid ${tokens.colors.gray[400]}`,
      borderRadius: tokens.radii.md,
    }}
  />
);
