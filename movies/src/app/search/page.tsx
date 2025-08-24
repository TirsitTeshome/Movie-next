"use client";

import { useSearchParams } from "next/navigation";
import useSearch from "../hooks/useSearch";
import MovieCard from "../components/MovieCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const { results, loading, error } = useSearch(query);

  if (!query) return <p>Please enter search query.</p>;
  if (loading) return <p>Searching...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section style={{ padding: 20 }}>
      <h1>Search results for "{query}"</h1>
      {results.length === 0 && <p>No movies found.</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
