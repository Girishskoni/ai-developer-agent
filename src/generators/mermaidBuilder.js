import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function toId(text) {
  return text.replace(/\s+/g, "_");
}

export function buildMermaid(flowJson, fileName = "generated-flow") {
  let mermaid = "flowchart TD\n";

  flowJson.edges.forEach(([from, to]) => {
    mermaid += `  ${toId(from)} --> ${toId(to)}\n`;
  });

  // ensure docs folder exists
  const docsDir = path.resolve("docs");
  fs.mkdirSync(docsDir, { recursive: true });

  const mmdPath = path.join(docsDir, `${fileName}.mmd`);
  const pngPath = path.join(docsDir, `${fileName}.png`);

  // write .mmd
  fs.writeFileSync(mmdPath, mermaid);

  // 🔥 convert to PNG automatically
  execSync(`mmdc -i "${mmdPath}" -o "${pngPath}"`);

  console.log("✅ Mermaid file created:", mmdPath);
  console.log("🖼️ PNG generated:", pngPath);

  return pngPath;
}
