function reconstructAbstract(invertedIndex) {
  if (!invertedIndex) return null;

  const positionToWord = {};

  for (const [word, positions] of Object.entries(invertedIndex)) {
    positions.forEach((pos) => {
      positionToWord[pos] = word;
    });
  }

  const sortedPositions = Object.keys(positionToWord)
    .map(Number)
    .sort((a, b) => a - b);

  const abstract = sortedPositions.map((pos) => positionToWord[pos]).join(" ");
  return abstract;
}

async function getOpenAlex(query, maxResults) {
  const url = `https://api.openalex.org/works?search=${encodeURIComponent(
    query
  )}&per-page=${maxResults}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "codethecure@gmail.com",
    },
  });
  if (!res.ok) throw Error("Failed to fetch from Open Alex.");
  const data = await res.json();
  const raw = data.results;

  const result = raw.map((entry) => {
    const date = new Date(entry.publication_date);
    const readableDate = date.toLocaleString("en-US", {
      dateStyle: "short",
    });
    let authors = entry.authorships.map((author) => author.raw_author_name);
    authors =
      authors.length > 1 ? authors[0].split(" ")[1] + " et al." : authors[0];

    return {
      id: entry.id,
      title: entry.title,
      abstract: reconstructAbstract(entry.abstract_inverted_index),
      published: readableDate,
      authors: authors,
      link: entry.doi,
    };
  });
  return result;
}

module.exports = getOpenAlex;
