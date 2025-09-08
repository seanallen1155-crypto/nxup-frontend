import { tokens } from "../../tokens";

export default { title: "UI/Button" };

export const Variants = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <button
      style={{
        padding: `${tokens.spacing.buttonPaddingY} ${tokens.spacing.buttonPaddingX}`,
        background: tokens.colors.brand.primary,
        color: "#fff",
        borderRadius: tokens.radii.md,
        fontFamily: tokens.typography.fontFamily.primary,
        transition: `transform ${tokens.motion.duration.fast} ${tokens.motion.ease.out}`,
      }}
    >
      Primary
    </button>
    <button
      style={{
        padding: `${tokens.spacing.buttonPaddingY} ${tokens.spacing.buttonPaddingX}`,
        background: tokens.colors.brand.secondary,
        color: "#fff",
        borderRadius: tokens.radii.md,
      }}
    >
      Secondary
    </button>
  </div>
);
