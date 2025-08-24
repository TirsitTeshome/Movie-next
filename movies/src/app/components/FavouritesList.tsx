"use client";

import useFavorites from "../hooks/useFavourites";
import MovieCard from "./MovieCard";

export default function FavoritesList() {
  const { favorites, removeFavorite, isFavorite } = useFavorites();

  if (favorites.length === 0) return <p className="text-center text-gray-500 mt-8">No favorites yet.</p>;

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onRemoveFavorite={() => removeFavorite(movie.id)}
          isFavorite={isFavorite(movie.id)}
        />
      ))}
    </div>
  );
}
