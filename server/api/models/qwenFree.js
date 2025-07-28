const { EXPANDER_PROMPT } = require("../../constants/systemPrompts");

async function qwenFree(query, systemPrompt = EXPANDER_PROMPT) {
  const res = await fetch("https://api.arliai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.ARLI_AI}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "Qwen3-14B",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: query },
      ],
      repetition_penalty: 1.1,
      temperature: 0.7,
      top_p: 0.9,
      top_k: 40,
      max_tokens: 1024,
      stream: false,
      hide_thinking: true,
    }),
  });

  if (!res.ok) {
    throw Error("Qwen failed to respond with status " + res.status);
  }

  const data = await res.json();
  const response = JSON.parse(data.choices[0].message.content);

  return response;
}

module.exports = qwenFree;
