// stories/foundations/Accessibility.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/Accessibility",
};

export const ReducedMotion = () => (
  <div>
    <p>Hover the box below. Motion will be disabled if <code>prefers-reduced-motion</code> is set in the OS.</p>
    <div
      style={{
        width: "100px",
        height: "100px",
        background: tokens.colors.brand.primary,
        transition: `transform ${tokens.motion.duration.medium} ${tokens.motion.ease.inOut}`,
      }}
      className="motion-safe:hover:translate-x-10 motion-reduce:transition-none"
    />
  </div>
);

export const ContrastCheck = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
    {Object.entries(tokens.colors.bg).map(([bgName, bgColor]) => (
      <div
        key={bgName}
        style={{
          background: bgColor,
          padding: "1rem",
          border: "1px solid #ccc",
          flex: "0 0 200px",
        }}
      >
        <div
          style={{
            color: tokens.colors.text.primaryDark,
            marginBottom: "0.5rem",
          }}
        >
          PrimaryDark on {bgName}
        </div>
        <div style={{ color: tokens.colors.text.secondaryDark }}>
          SecondaryDark on {bgName}
        </div>
      </div>
    ))}
  </div>
);

export const ScreenReaderPatterns = () => (
  <div>
    <button aria-label="Close modal" style={{ padding: "0.5rem 1rem" }}>
      ❌
    </button>
    <div
      role="alert"
      style={{
        background: tokens.colors.semantic.error,
        color: "#fff",
        padding: "0.5rem 1rem",
        marginTop: "1rem",
      }}
    >
      Error toast with role=alert
    </div>
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal"
      style={{
        background: "#fff",
        border: "1px solid #ccc",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <h2 id="demo-modal">Demo Modal</h2>
      <p>This modal uses proper ARIA attributes.</p>
    </div>
  </div>
);
