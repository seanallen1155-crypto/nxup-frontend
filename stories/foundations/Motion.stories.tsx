// stories/foundations/Motion.stories.tsx
import { tokens } from "../../tokens";
import { useState } from "react";

export default {
  title: "Foundations/Motion",
};

export const TactileDemo = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        padding: "1rem 2rem",
        background: tokens.colors.brand.primary,
        color: "#fff",
        borderRadius: tokens.radii.md,
        transform: pressed ? `scale(${tokens.motion.scale.tap})` : "scale(1)",
        transition: `transform ${tokens.motion.duration.fast} ${tokens.motion.ease.out}`,
      }}
    >
      Press Me
    </button>
  );
};
