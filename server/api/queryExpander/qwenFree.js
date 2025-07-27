require("dotenv").config();
const { QWEN_SYSTEM_PROMPT } = require("../../constants/prompts");

async function qwenFree(query) {
  const res = await fetch("https://api.arliai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.ARLI_AI}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "Qwen3-14B",
      messages: [
        { role: "system", content: QWEN_SYSTEM_PROMPT },
        { role: "user", content: query },
      ],
      repetition_penalty: 1.1,
      temperature: 0.7,
      top_p: 0.9,
      top_k: 40,
      max_tokens: 1024,
      stream: false,
    }),
  });

  if (!res.ok) {
    throw Error("Qwen query expansion failed.");
  }

  const data = await res.json();
  const response = JSON.parse(
    data.choices[0].message.content.split("</think>\n")[1]
  );

  return response;
}
