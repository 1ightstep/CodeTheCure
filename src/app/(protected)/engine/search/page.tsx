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
  published: string;
  summary: string;
  author: string;
  link: string;
  onSave: () => void;
  onTrash: () => void;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));

  const [results, setResults] = useState<SourceCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    console.log(`Searching for: ${query}`);
    if (!query) return;
    (async () => {
      const queryResults: SourceCardProps[] = await getSearch(query);
      setResults(queryResults);
      setIsLoading(false);
    })();
  }, [query]);

  function handleSearch(newQuery: string) {
    if (!newQuery.trim()) return;
    setQuery(newQuery);
    setIsLoading(true);
    router.push(`/engine/search?query=${newQuery}`);
  }

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchContentContainer}>
        <SearchBar onSearch={handleSearch} width="100%" height="2rem" />
        <div className={styles.resultContainer}>
          {results.map((item, index) => (
            <SourceCard
              key={index}
              title={item.title}
              published={item.published}
              summary={item.summary}
              author={item.author}
              link={item.link}
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
