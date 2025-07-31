interface SourceCardProps {
  title: string;
  published: string;
  summary: string;
  author: string;
  link: string;
  onSave: () => void;
  onTrash: () => void;
}

export default async function getSearch(
  query: string
): Promise<SourceCardProps[]> {
  try {
    console.log("Fetching for data");
    const res = await fetch(
      `http://localhost:3001/api/v1/search?query=${encodeURIComponent(query)}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch for results.");
    }
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    console.log("Something went wrong during querying: " + error);
    return [];
  }
}
