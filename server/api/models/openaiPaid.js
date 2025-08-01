const OpenAI = require("openai");
const { EXPANDER_PROMPT } = require("../../constants/systemPrompts");
require("dotenv").config();

async function openaiPaid(query, systemPrompt = EXPANDER_PROMPT) {
  const client = new OpenAI({
    apiKey: process.env.OPEN_AI,
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: query,
      },
    ],
  });

  return response.choices[0].message.content;
}
