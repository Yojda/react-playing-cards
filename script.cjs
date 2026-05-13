// scripts/generate-svg-map.js
const fs = require("fs");
const path = require("path");

const svgDir = "./src/public/assets";
const files = fs.readdirSync(svgDir).filter(f => f.endsWith(".svg"));

const imports = files.map(f => {
  const name = f.replace(".svg", "").replace(/[^a-zA-Z0-9]/g, "_");
  return `import ${name} from "./public/assets/${f}";`;
}).join("\n");

const mapEntries = files.map(f => {
  const key = f.replace(".svg", "");
  const name = f.replace(".svg", "").replace(/[^a-zA-Z0-9]/g, "_");
  return `  "${key}": ${name},`;
}).join("\n");

const output = `// AUTO-GENERATED — do not edit\n${imports}\n\nexport const SVG_MAP = {\n${mapEntries}\n};\n`;
fs.writeFileSync("./src/svg-map.ts", output);