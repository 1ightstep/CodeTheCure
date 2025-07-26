"use client";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import SearchBar from "@/components/protected/SearchBar";
import SourceCard from "@/components/protected/SourceCard";
import getSearch from "@/app/api/getSearch";

interface SourceCardProps {
  title: string;
  publicationDate: string;
  aiSummary: string;
  author: string;
  sourceLink: string;
  onSave: () => void;
  onTrash: () => void;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));

  const [results, setResults] = useState<SourceCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const queryResults: SourceCardProps[] = await getSearch(query);
      setResults(queryResults);
    };

    setIsLoading(false);
  }, [query]);

  function handleSearch(newQuery: string) {
    if (!newQuery.trim()) return;
    setQuery(newQuery);
    setIsLoading(true);
    router.push(`/engine/search?q=${newQuery}`);
    console.log(`Searching for: ${newQuery}`);
  }

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchContentContainer}>
        <SearchBar onSearch={handleSearch} width="100%" height="2rem" />
        <div className={styles.resultContainer}>
          {isLoading && <h3>Womp Womp, your content is loading</h3>}
          {results.length === 0 && (
            <h3>Uhmm, try searching for something else</h3>
          )}
          {results.map((item, index) => (
            <SourceCard
              key={index}
              title={item.title}
              publicationDate={item.publicationDate}
              aiSummary={item.aiSummary}
              author={item.author}
              sourceLink={item.sourceLink}
              onSave={() => console.log("Saved!")}
              onTrash={() => console.log("Trashed!")}
            />
          ))}
        </div>
        <div className={styles.showMoreContainer}>
          <button className={styles.showMoreButton}>Show more</button>
        </div>
      </div>
    </div>
  );
}
