"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={onSearch} className="m-5 flex">
      <input
        type="text"
        placeholder="Search movies or series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 w-3/5 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        type="submit"
        className="ml-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-base"
      >
        Search
      </button>
    </form>
  );
}
