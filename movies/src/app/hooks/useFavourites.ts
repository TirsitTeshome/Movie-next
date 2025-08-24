import { useState, useEffect } from "react";
import { TMDBMovie } from "../utils/type";

const FAVORITES_KEY = "myFavorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<TMDBMovie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const addFavorite = (movie: TMDBMovie) => {
    const updated = [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  const removeFavorite = (id: number) => {
    const updated = favorites.filter((m) => m.id !== id);
    setFavorites(updated);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  const isFavorite = (id: number) => favorites.some((m) => m.id === id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
