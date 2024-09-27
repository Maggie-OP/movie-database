import SearchSidebar from "~/components/search-sidebar";
import MovieCard from "~/components/movie-card";

import { GetMoviesResponse } from "./types";

const getPopularMovies: () => Promise<GetMoviesResponse> = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular`, {
    headers: {
      "Content-Type": "text/html;charset=utf-8",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM2YzdiYWEzYTdjYzQyNmIwZjMwMzQzNDQ3OTBkZSIsIm5iZiI6MTcyNzQ0MzU5NS40NjA0NzQsInN1YiI6IjY2ZjZhY2IxZGUyMWE2Yjc4MjUwYzAyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPQ9fniMAlxOM20ygfbjIC8bFbtoZp2Grvy4zvNfTkE",
    },
  });
  return response.json();
};

export default async function Movies() {
  const { results: movies = [] } = await getPopularMovies();

  return (
    <main className="px-[40px] py-[30px] flex flex-col gap-5 flex-1">
      <h1 className="text-heading-1 font-semibold">Popular Movies</h1>
      <section className="flex gap-[30px] flex-1">
        <SearchSidebar />
        <section className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-movie-card gap-8">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <button className="w-full p-3 rounded-lg text-pagination-btn font-bold text-white bg-blue-100 hover:text-black transition-colors">
            Load More
          </button>
        </section>
      </section>
    </main>
  );
}
