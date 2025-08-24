"use client";

import Link from "next/link";
import useLatestMovies from "./hooks/useLatestMovies";
import useFavorites from "./hooks/useFavourites";
import MovieHero from "./components/MovieHero";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Footer from "./footer/page";

export default function Home() {
  const { movies, loading, error } = useLatestMovies();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  const featured = movies[0];

  return (
    <>
      <header className=" w-3/4 m-auto flex items-center p-5">
        <h1 className="text-3xl font-extrabold">Moovie</h1>
        <SearchBar />
      
        
<div>
     <Link href="/"><button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Home
        </button></Link>
</div>
        <Link href="/favourites">
          <button className="ml-4 px-4 py-2 text-white rounded-4xl">
            My List
          </button>
        </Link>
          <Link href="/signin"><button className="ml-4 px-4 py-2  hover:bg-blue-700 transition rounded-4xl">
          Signin
        </button></Link>
      </header>
      {featured && (
        <MovieHero
          movie={featured}
          onAddFavorite={addFavorite}
          isFavorite={isFavorite}
        />
      )}
      <section className="p-5">
        <h2 className="text-5xl font-semibold mt-20 mb-10">Latest Movies & Series</h2>
        <div className="flex flex-wrap gap-5">
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
       <Footer/>
    </>
  );
 
}
