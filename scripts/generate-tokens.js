// scripts/generate-tokens.js
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

// Compile tokens.ts to a temporary JS file
execSync("npx tsc tokens.ts --module commonjs --target es2019 --outDir .tmp-tokens", { stdio: "inherit" });

// Import the compiled JS
const mod = require(path.join(process.cwd(), ".tmp-tokens", "tokens.js"));
const tokens = mod.tokens; // 👈 your actual export

// Debug log to see actual exports
console.log("DEBUG tokens.ts exports:", Object.keys(tokens));

let css = "/* generated from tokens.ts */\n:root {\n";

function emit(prefix, obj) {
  if (!obj) return;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      // recurse deeper
      emit(`${prefix}-${key}`, value);
    } else {
      css += `  --${prefix}-${key}: ${value};\n`;
    }
  }
}

emit("color", tokens.colors);
emit("radii", tokens.radii);
emit("shadow", tokens.shadows);
emit("font", tokens.typography);
emit("motion", tokens.motion);

css += "}\n";

const outFile = path.join(process.cwd(), "src", "styles", "tokens.css");
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, css);

console.log("✔ tokens.css generated");