// To run: npm run constants

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Step 1: Compile tokens.ts into CommonJS in a temp dir
execSync(
  "npx tsc tokens.ts --module commonjs --target es2019 --outDir .tmp-constants",
  { stdio: "inherit" }
);

// Step 2: Import compiled tokens
const { tokens } = require(path.join(process.cwd(), ".tmp-constants", "tokens.js"));

function writeFile(fileName, content) {
  const outPath = path.resolve(`src/constants/${fileName}`);
  fs.writeFileSync(outPath, content, "utf8");
  console.log(`✅ ${fileName} written`);
}

// COLORS
writeFile(
  "colors.ts",
  `// Auto-generated from tokens.ts. Do not edit manually.
export const colors = ${JSON.stringify(tokens.colors, null, 2)} as const;
`
);

// TYPOGRAPHY
writeFile(
  "typography.ts",
  `// Auto-generated from tokens.ts. Do not edit manually.
export const typography = ${JSON.stringify(tokens.typography, null, 2)} as const;
`
);

// RADII
writeFile(
  "radii.ts",
  `// Auto-generated from tokens.ts. Do not edit manually.
export const radii = ${JSON.stringify(tokens.radii, null, 2)} as const;
`
);

// SHADOWS
writeFile(
  "shadows.ts",
  `// Auto-generated from tokens.ts. Do not edit manually.
export const shadows = ${JSON.stringify(tokens.shadows, null, 2)} as const;
`
);

// MOTION
writeFile(
  "motion.ts",
  `// Auto-generated from tokens.ts. Do not edit manually.
export const motion = ${JSON.stringify(tokens.motion, null, 2)} as const;
`
);

// COPY
writeFile(
  "copy.ts",
  `// Auto-generated from tokens.ts. Do not edit manually.
export const copy = ${JSON.stringify(tokens.copy || {}, null, 2)} as const;
`
);