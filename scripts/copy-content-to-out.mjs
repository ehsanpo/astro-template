import fs from "fs";
import path from "path";

const root = process.cwd();
const srcContent = path.join(root, "src", "content");
const outDir = path.join(root, "out");
const outContent = path.join(outDir, "content");

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      const srcPath = path.join(src, name);
      const destPath = path.join(dest, name);
      copyRecursiveSync(srcPath, destPath);
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  if (!fs.existsSync(outDir)) {
    console.error("Out directory not found. Did next export run?");
    process.exit(1);
  }
  copyRecursiveSync(srcContent, outContent);
  console.log("Copied src/content → out/content");
} catch (err) {
  console.error("Failed to copy content assets:", err);
  process.exit(1);
}
