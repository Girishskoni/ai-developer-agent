import axios from "axios";

export async function generateFlow(domain) {
  const prompt = `
You are a workflow generator AI.

Create a simple system flowchart for: "${domain}"

Return ONLY valid JSON in EXACTLY this format:

{
  "nodes": ["Start","Step1","Step2","End"],
  "edges": [["Start","Step1"],["Step1","Step2"],["Step2","End"]]
}

STRICT RULES:
- Only nodes and edges keys
- No extra fields
- No description
- No explanation
- No markdown
- No backticks
- Only raw JSON
`;

  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openrouter/auto",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2 // 🔥 less creativity = more structured output
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  let content = res.data.choices[0].message.content;

  // ✅ Clean markdown fences if model still adds them
  content = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(content);
  } catch (err) {
    console.error("❌ Invalid JSON from AI:\n", content);
    throw new Error("Flow JSON parsing failed");
  }
}
