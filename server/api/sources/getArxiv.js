const { XMLParser } = require("fast-xml-parser");

async function getArxiv(query, maxResults = 100) {
  const baseUrl = "https://export.arxiv.org/api/query";
  const searchUrl = `${baseUrl}?search_query=all:${encodeURIComponent(
    query
  )}&start=0&max_results=${maxResults}`;

  const response = await fetch(searchUrl);
  const xml = await response.text();
  const parser = new XMLParser();
  const xmlDoc = parser.parse(xml);
  const entries = xmlDoc.feed.entry;

  const results = Array.from(entries).map((entry) => ({
    id: entry.id,
    title: entry.title,
    summary: entry.summary,
    published: entry.published,
    authors: entry.author,
    link: entry.link,
  }));

  return results;
}

module.exports = getArxiv;
