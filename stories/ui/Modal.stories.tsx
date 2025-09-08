import { tokens } from "../../tokens";

export default { title: "UI/Modal" };

export const Default = () => (
  <div
    role="dialog"
    aria-modal="true"
    style={{
      width: "400px",
      margin: "2rem auto",
      background: "#fff",
      borderRadius: tokens.radii.md,
      padding: "1rem",
      boxShadow: tokens.shadows.lg,
    }}
  >
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
  </div>
);
