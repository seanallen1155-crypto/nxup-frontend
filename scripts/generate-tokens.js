// scripts/generate-tokens.js
const fs = require("fs");
const path = require("path");
const tokens = require("../tokens.ts").default;

// Convert camelCase to kebab-case
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function generateCSSVars(obj, prefix = "--") {
  let cssVars = "";
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      cssVars += generateCSSVars(value, `${prefix}${toKebabCase(key)}-`);
    } else {
      cssVars += `  ${prefix}${toKebabCase(key)}: ${value};\n`;
    }
  }
  return cssVars;
}

function buildTokens() {
  const css = `/* generated from tokens.ts */\n:root {\n${generateCSSVars(
    tokens
  )}}\n`;

  const outPath = path.resolve(__dirname, "../src/styles/tokens.css");
  fs.writeFileSync(outPath, css);
  console.log("✅ tokens.css regenerated at", outPath);
}

buildTokens();
