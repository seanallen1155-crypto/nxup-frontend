import { tokens } from "../../tokens";

export default { title: "UI/Notification" };

export const Default = () => (
  <div
    role="alert"
    style={{
      background: tokens.colors.semantic.info,
      color: "#fff",
      padding: "0.75rem 1rem",
      borderRadius: tokens.radii.sm,
      maxWidth: "300px",
    }}
  >
    Info notification — auto-dismiss in 3s
  </div>
);
