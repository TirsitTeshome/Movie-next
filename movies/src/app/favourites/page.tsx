"use client";

import useFavorites from "../hooks/useFavourites";
import MovieCard from "../components/MovieCard";

export default function FavoritesPage() {
  const { favorites, removeFavorite, isFavorite } = useFavorites();

  if (favorites.length === 0) return <p className="text-center text-gray-500 mt-8">No favorites yet.</p>;

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRemoveFavorite={removeFavorite}
            isFavorite={isFavorite(movie.id)}
          />
        ))}
      </div>
    </main>
  );
}
