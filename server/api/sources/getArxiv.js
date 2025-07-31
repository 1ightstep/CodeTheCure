const { XMLParser } = require("fast-xml-parser");

async function getArxiv(query, maxResults = 100) {
  const baseUrl = "https://export.arxiv.org/api/query";
  const searchUrl = `${baseUrl}?search_query=all:${encodeURIComponent(
    query
  )}&start=0&max_results=${maxResults}`;

  const res = await fetch(searchUrl);
  if (!res.ok) throw Error("Failed to fetch from arxiv.");
  const xml = await res.text();
  const parser = new XMLParser();
  const xmlDoc = parser.parse(xml);
  const entries = xmlDoc.feed.entry;

  const results = Array.from(entries).map((entry) => {
    const date = new Date(entry.published);
    const readableDate = date.toLocaleString("en-US", {
      dateStyle: "short",
    });
    const authors =
      entry.author.length > 1
        ? entry.author[0].name.split(" ")[1] + " et al."
        : entry.author.name;

    return {
      id: entry.id,
      title: entry.title,
      abstract: entry.summary,
      published: readableDate,
      authors: authors,
      link: entry.id,
    };
  });

  return results;
}

getArxiv("cancer", 10).then(console.log);

module.exports = getArxiv;
