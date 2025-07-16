"use client";
import styles from "./page.module.css";
import SearchBar from "@/components/protected/SearchBar";
import { useRouter } from "next/navigation";

export default function Engine() {
  const router = useRouter();

  function handleSearch(query: string) {
    if (!query.trim()) return;
    router.push(`/engine/search?query=${encodeURIComponent(query)}`);
  }

  return (
    <div className={styles.engine}>
      <div className={styles.engineContainer}>
        <h2>Your cancer research journey begins here.</h2>
        <SearchBar
          onSearch={handleSearch}
          width="100%"
          height="2.5rem"
          placeholder="Search cancer studies, treatments, and symptoms"
        />
      </div>
    </div>
  );
}
