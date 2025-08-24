import { useState, useEffect } from "react";
import { TMDBMovie } from "../utils/type";
import { fetchLatestMovies } from "../utils/fetchTmdb";

export default function useLatestMovies() {
  const [movies, setMovies] = useState<TMDBMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLatestMovies()
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load latest movies.");
        setLoading(false);
      });
  }, []);

  return { movies, loading, error };
}
