import { TMDBMovie } from "../utils/type";
import Image from "next/image";

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

  const handleAdd = () => onAddFavorite && onAddFavorite(movie);
  const handleRemove = () => onRemoveFavorite && onRemoveFavorite(movie.id);

  return (
    <div className="w-100 m-auto rounded-lg overflow-hidden shadow-lg dark:bg-black">
      <Image src={posterUrl} alt={movie.title} width={200} height={200} className="w-full object-cover" />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{movie.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">Rating: {movie.vote_average}</p>

        {isFavorite ? (
          <button
            onClick={handleRemove}
            className="w-full mt-3 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="w-full mt-3 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}
