export function developerPrompt(input) {
  return `
Product Name: ${input.name}
Domain: ${input.domain}
Tech Stack: Node.js, Express

Features:
${input.features.join(", ")}

Generate:
1. Folder structure
2. Basic Express server
3. Sample controller
`;
}
