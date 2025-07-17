"use client";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import SearchBar from "@/components/protected/SearchBar";
import SourceCard from "@/components/protected/SourceCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`/api/v1/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data.results || []));
  }, [query]);

  function handleSearch(newQuery: string) {
    if (!newQuery.trim()) return;
    console.log(`Searching for: ${newQuery}`);
  }

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchContentContainer}>
        <SearchBar onSearch={handleSearch} width="100%" height="2rem" />
        <div className={styles.resultContainer}>
          <SourceCard
            title="Testing"
            publicationDate="7/26/2025"
            aiSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            author="John Doe"
            sourceLink="https://example.com"
            onSave={() => console.log("Saved!")}
            onTrash={() => console.log("Trashed!")}
          />
        </div>
        <div className={styles.showMoreContainer}>
          <button className={styles.showMoreButton}>Show more</button>
        </div>
      </div>
    </div>
  );
}
