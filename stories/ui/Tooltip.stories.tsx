import { tokens } from "../../tokens";

export default { title: "UI/Tooltip" };

export const Default = () => (
  <div style={{ position: "relative", display: "inline-block" }}>
    <button>Hover me</button>
    <div
      role="tooltip"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        background: tokens.colors.gray[700],
        color: "#fff",
        padding: "4px 8px",
        borderRadius: tokens.radii.sm,
        marginTop: "4px",
        transition: `opacity ${tokens.motion.duration.fast} ${tokens.motion.ease.in}`,
        opacity: 1,
      }}
    >
      Tooltip content
    </div>
  </div>
);
