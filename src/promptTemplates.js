export function developerPrompt(input) {
  return `
You are a senior backend developer.

Generate backend scaffolding for the following product.

Product Name: ${input.name}
Domain: ${input.domain}
Tech Stack: Node.js, Express

Features:
${input.features.join(", ")}

Respond ONLY in valid JSON in this format:

{
  "folders": [
    "controllers",
    "routes",
    "models",
    "middlewares"
  ],
  "files": {
    "server.js": "<express server code>",
    "controllers/authController.js": "<controller code>",
    "routes/authRoutes.js": "<routes code>"
  }
}

Do not add explanations. Do not add markdown.
`;
}
