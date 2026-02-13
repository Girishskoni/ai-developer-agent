import axios from "axios";

export async function generateJiraUserStories(domain, features) {
  const prompt = `
You are a Senior Product Owner.

Generate professional JIRA-style user stories for a "${domain}" system.

Features:
${features.join(", ")}

Requirements:

1. Group stories under relevant Epics.
2. Each story must include:
   - Story ID (US-101, US-102, incrementing)
   - Title
   - Type: Story
   - Priority (High/Medium/Low)
   - Story Points (1,3,5,8,13)
   - Labels
   - Description (As a..., I want..., So that...)
   - Acceptance Criteria (numbered list)

3. Use realistic roles based on domain (Customer, Admin, Manager, Vendor, User, etc.)

4. Return ONLY markdown.

Format example:

# Epic: Authentication

## US-101 – User Registration
Type: Story  
Priority: High  
Story Points: 5  
Labels: auth  

### Description
As a customer,
I want to register,
So that I can access the system.

### Acceptance Criteria
1. ...
2. ...
`;

  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openrouter/auto",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return res.data.choices[0].message.content.trim();
}
