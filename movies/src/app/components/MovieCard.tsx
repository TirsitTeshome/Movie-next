import { TMDBMovie } from "../utils/type";
import Link from "next/link";

interface Props {
  movie: TMDBMovie;
  onAddFavorite?: (movie: TMDBMovie) => void;
  onRemoveFavorite?: (id: number) => void;
  isFavorite?: boolean;
}

export default function MovieCard({ movie, onAddFavorite, onRemoveFavorite, isFavorite }: Props) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "/placeholder.png";

  const handleAddFavorite = () => {
    if (onAddFavorite) {
      onAddFavorite(movie);
    }
  };

  return (
    <div className="w-44 m-2 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img src={posterUrl} alt={movie.title} className="w-full object-cover" />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{movie.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">Rating: {movie.vote_average}</p>
        {onAddFavorite && !isFavorite && (
          <Link href="/favorites" className="block mt-3">
            <button
              onClick={handleAddFavorite}
              className="w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add to Favorites
            </button>
          </Link>
        )}
        {onRemoveFavorite && isFavorite && (
          <button
            onClick={() => onRemoveFavorite(movie.id)}
            className="w-full mt-3 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Remove Favorite
          </button>
        )}
      </div>
    </div>
  );
}
