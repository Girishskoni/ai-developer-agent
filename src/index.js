import readline from "readline";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import { runDeveloperAgent } from "./agent.js";
import { developerPrompt } from "./promptTemplates.js";
import { createEcommerceApp } from "./generators/createEcommerceApp.js";

// 🔥 AI Flowchart System
import { generateFlow } from "./generators/flowchartAgent.js";
import { buildMermaid } from "./generators/mermaidBuilder.js";

// 🔥 JIRA Style User Stories (ONLY)
import { generateJiraUserStories } from "./generators/jiraUserStoryAgent.js";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// ===============================
// Helpers
// ===============================

function extractJSON(text) {
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("No valid JSON found in AI response");
  }

  return JSON.parse(text.substring(firstBrace, lastBrace + 1));
}

function createScaffold(baseDir, data) {
  data.folders.forEach(folder => {
    fs.mkdirSync(path.join(baseDir, folder), { recursive: true });
  });

  for (const filePath in data.files) {
    const fullPath = path.join(baseDir, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, data.files[filePath]);
  }
}


// ===============================
// Main CLI Flow
// ===============================

rl.question("Enter product name: ", (name) => {
  rl.question("Enter domain: ", (domain) => {
    rl.question("Enter features (comma separated): ", async (featuresInput) => {

      try {

        const features = featuresInput
          .split(",")
          .map(f => f.trim())
          .filter(Boolean);

        const prompt = developerPrompt({
          name,
          domain,
          features
        });

        // 🔹 Generate scaffold
        const result = await runDeveloperAgent(prompt);
        const parsed = extractJSON(result);

        const appFolderName = name.replace(/\s+/g, "-").toLowerCase();
        const outputDir = path.join(process.cwd(), appFolderName);

        fs.mkdirSync(outputDir, { recursive: true });
        createScaffold(outputDir, parsed);

        // 🔹 Create backend
        createEcommerceApp(appFolderName, domain);


        // ===================================================
        // 🔥 FLOWCHART GENERATION
        // ===================================================

        const flow = await generateFlow(domain);
        const flowPath = buildMermaid(flow, `${appFolderName}-workflow`);


        // ===================================================
        // 🔥 JIRA USER STORIES GENERATION
        // ===================================================

        const jiraStories = await generateJiraUserStories(domain, features);
        const jiraPath = path.join(outputDir, "JIRA_USER_STORIES.md");
        fs.writeFileSync(jiraPath, jiraStories);


        // ===================================================

        console.log(`\n✅ Project created at: ${outputDir}`);
        console.log(`📊 Flowchart generated at: ${flowPath}`);
        console.log(`📋 JIRA User Stories created at: ${jiraPath}`);

      } catch (err) {
        console.error("\n❌ Error:", err.message);
      } finally {
        rl.close();
      }

    });
  });
});
