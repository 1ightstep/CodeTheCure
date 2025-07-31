const OpenAI = require("openai");
const { EXPANDER_PROMPT } = require("../../constants/systemPrompts");

async function openaiPaid(query, systemPrompt = EXPANDER_PROMPT) {
  const client = new OpenAI({
    apiKey: process.env.OPEN_AI,
  });

  const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a one-sentence bedtime story about a unicorn.",
  });

  console.log(response.output_text);
}

openaiPaid().then(console.log);
