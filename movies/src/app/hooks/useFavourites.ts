import { useState, useEffect } from "react";
import { TMDBMovie } from "../utils/type";

const FAVORITES_KEY = "myFavorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<TMDBMovie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: TMDBMovie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((m) => m.id === id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
