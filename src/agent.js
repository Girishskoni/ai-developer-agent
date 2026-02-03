import axios from "axios";

export async function runDeveloperAgent(productDetails) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "deepseek/deepseek-chat",
      messages: [
        {
          role: "system",
          content: "You are a senior software developer. Generate backend code scaffolding."
        },
        {
          role: "user",
          content: productDetails
        }
      ]
    },
    {
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.choices[0].message.content;
}
