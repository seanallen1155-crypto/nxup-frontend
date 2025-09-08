import { tokens } from "../../tokens";

export default { title: "UI/ProgressBar" };

export const Linear = () => (
  <div style={{ width: "200px", background: tokens.colors.gray[300], height: "8px" }}>
    <div
      style={{
        width: "40%",
        height: "100%",
        background: tokens.colors.brand.primary,
        transition: `width ${tokens.motion.duration.medium} ${tokens.motion.ease.out}`,
      }}
    />
  </div>
);
