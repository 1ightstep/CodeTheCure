"use client";
import styles from "./SearchBar.module.css";
import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  width?: string;
  height?: string;
  placeholder?: string;
};

export default function SearchBar({
  onSearch,
  width,
  height,
  placeholder,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  }

  return (
    <div className={styles.searchBarContainer} style={{ width, height }}>
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder={placeholder || "Search..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchBarInput}
        />
      </form>
    </div>
  );
}
