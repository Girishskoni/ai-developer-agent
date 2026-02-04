import readline from "readline";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { runDeveloperAgent } from "./agent.js";
import { developerPrompt } from "./promptTemplates.js";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createScaffold(baseDir, data) {
  // Create folders
  data.folders.forEach(folder => {
    const folderPath = path.join(baseDir, folder);
    fs.mkdirSync(folderPath, { recursive: true });
  });

  // Create files
  for (const filePath in data.files) {
    const fullPath = path.join(baseDir, filePath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, data.files[filePath]);
  }
}

rl.question("Enter product name: ", (name) => {
  rl.question("Enter domain: ", (domain) => {
    rl.question("Enter features (comma separated): ", async (features) => {
      const prompt = developerPrompt({
        name,
        domain,
        features: features.split(",")
      });

      const result = await runDeveloperAgent(prompt);

      // Parse AI response
      const parsed = JSON.parse(result);

      const outputDir = path.join(process.cwd(), name.replace(/\s+/g, "-").toLowerCase());
      fs.mkdirSync(outputDir, { recursive: true });

      createScaffold(outputDir, parsed);

      console.log(`\n✅ Project scaffold created at: ${outputDir}`);
      rl.close();
    });
  });
});
