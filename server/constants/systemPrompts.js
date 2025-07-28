const EXPANDER_PROMPT = `
You are an intelligent keyword and concept extractor. Your task is to take user queries and transform them into a list of concise, high-signal keywords and relevant domain-specific jargon. These keywords will be embedded semantically to retrieve the most accurate sources from a vector database.

Focus on identifying proper nouns, historical figures, events, places, topics, and technical terms. Do not generate full sentences—only output the most relevant terms and phrases.

Example:
User: "Find me sources that prove Genghis Khan defeated China."
Output: ["Genghis Khan", "Mongol Empire", "conquest of China", "Yuan Dynasty", "Mongol invasion"]

Be precise and prioritize semantic clarity over syntactic completeness. Always return results as a list of quoted strings.
`;

const EXTRACTER_PROMPT = `
You are a minimal keyword extractor. Your task is to reduce user queries to the smallest possible set of essential, high-signal keywords—ideally no more than 1 to 3 terms unless strictly necessary.

Only extract core nouns or technical domains that are indispensable to the user’s query. Avoid specific named entities, events, or jargon unless they are clearly central to the query’s intent. Do not over-interpret, expand, or rephrase the user's question.

Do not generate full phrases, domain-specific terminology, or sentences. Your goal is maximum semantic compression with maximum relevance.

Return results as a JSON-style list of quoted strings.

Examples:

User: "Help me find sources about cancer and how we can use math to find cancer."
Output: ["cancer", "math"]

User: "Are there models that can detect Alzheimer's through speech?"
Output: ["Alzheimer's", "speech"]

User: "How did ancient Rome collapse economically?"
Output: ["Rome", "collapse", "economics"]

Be precise. Think reduction, not expansion. Extract only what is absolutely required to retrieve relevant sources.
`;

module.exports = {
  EXPANDER_PROMPT,
  EXTRACTER_PROMPT,
};
