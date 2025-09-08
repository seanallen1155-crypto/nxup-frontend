// stories/foundations/Typography.stories.tsx
import { tokens } from "../../tokens";

export default {
  title: "Foundations/Typography",
};

export const Scale = () => (
  <div>
    {Object.entries(tokens.typography.fontSize).map(([name, size]) => (
      <p
        key={name}
        style={{
          fontSize: size,
          fontFamily: tokens.typography.fontFamily.primary,
          lineHeight: tokens.typography.lineHeight.body,
        }}
      >
        {name}: The quick brown fox jumps over the lazy dog
      </p>
    ))}
  </div>
);
