"use client";

import Link from "next/link";
import useLatestMovies from "./hooks/useLatestMovies";
import useFavorites from "./hooks/useFavourites";
import MovieHero from "./components/MovieHero";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const { movies, loading, error } = useLatestMovies();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  const featured = movies[0];

  return (
    <>
      <header style={{ padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Moovie</h1>
        <SearchBar />
        <Link href="/favorites">
          <button>Go to Favorites</button>
        </Link>
      </header>
      {featured && <MovieHero movie={featured} onAddFavorite={addFavorite} isFavorite={isFavorite} />}
      <section style={{ padding: 20 }}>
        <h2>Latest Movies & Series</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {movies.map((m) => (
            <MovieCard
              key={m.id}
              movie={m}
              onAddFavorite={addFavorite}
              onRemoveFavorite={removeFavorite}
              isFavorite={isFavorite(m.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
