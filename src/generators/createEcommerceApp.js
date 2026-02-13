import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// 🔹 Domain → Business Flow Mapper
function getDomainFlow(domain) {
  const d = domain.toLowerCase();

  if (d.includes("ecommerce")) {
    return `
flowchart TD
    User --> Login["Login / Register"]
    Login --> Browse["Browse Products"]
    Browse --> Product["View Product"]
    Product --> Cart["Add to Cart"]
    Cart --> Checkout["Checkout"]
    Checkout --> Payment["Payment"]
    Payment --> Order["Order Placed"]
    Order --> Confirmation["Order Confirmation"]
`;
  }

  if (d.includes("movie")) {
    return `
flowchart TD
    User --> Login["Login / Register"]
    Login --> Movies["Browse Movies"]
    Movies --> Theatre["Select Theatre"]
    Theatre --> Show["Select Show Time"]
    Show --> Seats["Select Seats"]
    Seats --> Payment["Payment"]
    Payment --> Ticket["Ticket Generated"]
`;
  }

  if (d.includes("food")) {
    return `
flowchart TD
    User --> Login["Login / Register"]
    Login --> Restaurants["Browse Restaurants"]
    Restaurants --> Menu["Select Food"]
    Menu --> Cart["Add to Cart"]
    Cart --> Checkout["Checkout"]
    Checkout --> Payment["Payment"]
    Payment --> Delivery["Order Delivered"]
`;
  }

  if (d.includes("edtech") || d.includes("learning")) {
    return `
flowchart TD
    User --> Login["Login / Register"]
    Login --> Courses["Browse Courses"]
    Courses --> Enroll["Enroll Course"]
    Enroll --> Payment["Payment"]
    Payment --> Access["Access Learning Content"]
`;
  }

  // Fallback
  return `
flowchart TD
    User --> System
    System --> Process
    Process --> Output
`;
}

export function createEcommerceApp(appName, domain) {
  const appPath = path.join(process.cwd(), appName);

  const folders = ["controllers", "routes", "config", "docs"];

  // Create base folder
  fs.mkdirSync(appPath, { recursive: true });

  // Subfolders
  folders.forEach(folder => {
    fs.mkdirSync(path.join(appPath, folder), { recursive: true });
  });

  // server.js
  fs.writeFileSync(
    path.join(appPath, "server.js"),
`import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("${appName} backend running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
`
  );

  // package.json
  fs.writeFileSync(
    path.join(appPath, "package.json"),
`{
  "name": "${appName}",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  }
}`
  );

  // .gitignore
  fs.writeFileSync(
    path.join(appPath, ".gitignore"),
`node_modules
.env`
  );

  /* =========================
     1️⃣ GENERIC ARCHITECTURE FLOW
     ========================= */
  const architectureFlow = `
flowchart TD
    User -->|"HTTP Request"| API["Express API"]
    API --> Routes
    Routes --> Controllers
    Controllers --> DB["Database"]
    DB --> Controllers
    Controllers --> Routes
    Routes --> API
    API -->|"HTTP Response"| User
`;

  fs.writeFileSync(
    path.join(appPath, "docs", "architecture-flow.mmd"),
    architectureFlow.trim()
  );

  /* =========================
     2️⃣ DOMAIN-SPECIFIC BUSINESS FLOW
     ========================= */
  const businessFlow = getDomainFlow(domain);

  fs.writeFileSync(
    path.join(appPath, "docs", "business-flow.mmd"),
    businessFlow.trim()
  );

  // Convert to PNG
  try {
    execSync(
      "npx @mermaid-js/mermaid-cli -i docs/architecture-flow.mmd -o docs/architecture-flow.png",
      { cwd: appPath }
    );
    execSync(
      "npx @mermaid-js/mermaid-cli -i docs/business-flow.mmd -o docs/business-flow.png",
      { cwd: appPath }
    );
  } catch {
    console.log("⚠️ Mermaid CLI not available, PNG generation skipped");
  }

  console.log("✅ Project created with generic + domain-specific flowcharts");
}