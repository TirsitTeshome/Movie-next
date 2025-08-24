import { TMDBMovie } from "../utils/type";
import { Roboto, Nunito } from "next/font/google";

interface Props {
  movie: TMDBMovie;
  onAddFavorite: (movie: TMDBMovie) => void;
  isFavorite: (id: number) => boolean;
}

export default function MovieHero({ movie, onAddFavorite, isFavorite }: Props) {
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center text-white p-10 flex flex-col justify-center"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <h1 className="text-7xl font-extrabold">{movie.title}</h1>
      <p className="max-w-3xl mb-6 text-2">{movie.overview}</p>
      {!isFavorite(movie.id) ? (
        <button
          onClick={() => onAddFavorite(movie)}
          className="mt-5 px-6 py-3 w-1/5 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Favorites
        </button>
      ) : (
        <button disabled className="mt-5 px-6 py-3 w-1/5 bg-gray-500 rounded-lg cursor-not-allowed">
          In Favorites
        </button>
      )}
    </section>
  );
}
