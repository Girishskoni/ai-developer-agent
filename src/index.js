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

// 🔹 Safely extract JSON from AI output
function extractJSON(text) {
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("No valid JSON found in AI response");
  }

  return JSON.parse(text.substring(firstBrace, lastBrace + 1));
}

// 🔹 Create folders and files
function createScaffold(baseDir, data) {
  // Create folders
  data.folders.forEach(folder => {
    fs.mkdirSync(path.join(baseDir, folder), { recursive: true });
  });

  // Create files
  for (const filePath in data.files) {
    const fullPath = path.join(baseDir, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, data.files[filePath]);
  }
}

rl.question("Enter product name: ", (name) => {
  rl.question("Enter domain: ", (domain) => {
    rl.question("Enter features (comma separated): ", async (features) => {
      try {
        const prompt = developerPrompt({
          name,
          domain,
          features: features.split(",").map(f => f.trim())
        });

        const result = await runDeveloperAgent(prompt);

        const parsed = extractJSON(result);

        const outputDir = path.join(
          process.cwd(),
          name.replace(/\s+/g, "-").toLowerCase()
        );

        fs.mkdirSync(outputDir, { recursive: true });
        createScaffold(outputDir, parsed);

        console.log(`\n✅ Project scaffold created at:\n${outputDir}`);
      } catch (err) {
        console.error("\n❌ Error:", err.message);
      } finally {
        rl.close();
      }
    });
  });
});
