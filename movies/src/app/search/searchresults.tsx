"use client";

import { useSearchParams } from "next/navigation";
import useSearch from "../hooks/useSearch";
import MovieCard from "../components/MovieCard";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const { results, loading, error } = useSearch(query);

  if (!query) return <p className="text-center text-gray-600 mt-8">Please enter search query.</p>;
  if (loading) return <p className="text-center text-gray-600 mt-8">Searching...</p>;
  if (error) return <p className="text-center text-red-600 mt-8">{error}</p>;

  return (
    <section className="p-5">
      <h1 className="text-3xl font-bold mb-6">Search results for &quot;{query}&quot;</h1>
      {results.length === 0 && <p className="text-center text-gray-500">No movies found.</p>}
      <div className="flex flex-wrap gap-5 justify-center">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
