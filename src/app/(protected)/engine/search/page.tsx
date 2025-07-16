"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "@/components/protected/SearchBar";
import styles from "./page.module.css";

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
        <div className={styles.resultContainer}></div>
        <div className={styles.showMoreContainer}>
          <button className={styles.showMoreButton}>Show more</button>
        </div>
      </div>
    </div>
  );
}
