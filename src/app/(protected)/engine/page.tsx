"use client";
import styles from "./page.module.css";
import SearchBar from "@/components/protected/SearchBar";

export default function Engine() {
  function handleSearch(query: string) {
    if (!query.trim()) return;
    console.log("Search query:", query);
  }

  return (
    <div className={styles.engine}>
      <div className={styles.engineContainer}>
        <h2>Your cancer research journey begins here.</h2>
        <SearchBar
          onSearch={handleSearch}
          width="100%"
          height="auto"
          placeholder="Search cancer studies, treatments, and symptoms"
        />
      </div>
    </div>
  );
}
