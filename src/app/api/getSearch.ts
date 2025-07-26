interface SourceCardProps {
  title: string;
  publicationDate: string;
  aiSummary: string;
  author: string;
  sourceLink: string;
  onSave: () => void;
  onTrash: () => void;
}

export default async function getSearch(
  query: string
): Promise<SourceCardProps[]> {
  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return data.results;
  } catch (error: unknown) {
    console.log("Something went wrong during querying: " + error);
    return [];
  }
}
