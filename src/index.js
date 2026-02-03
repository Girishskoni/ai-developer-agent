import readline from "readline";
import dotenv from "dotenv";
import { runDeveloperAgent } from "./agent.js";
import { developerPrompt } from "./promptTemplates.js";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter product name: ", (name) => {
  rl.question("Enter domain: ", (domain) => {
    rl.question("Enter features (comma separated): ", async (features) => {
      const prompt = developerPrompt({
        name,
        domain,
        features: features.split(",")
      });

      const result = await runDeveloperAgent(prompt);
      console.log("\nGenerated Output:\n");
      console.log(result);

      rl.close();
    });
  });
});
