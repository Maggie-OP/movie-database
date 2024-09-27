// import Image from "next/image";
import Link from "next/link";

import { Movie } from "~/app/movies/types";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="border-gray-100 rounded-lg overflow-hidden shadow">
      <div className="relative">
        <Link href="">
          {/*to be changed to Image */}
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </Link>
        <button className="absolute w-[26px] h-[26px] rounded-full bg-gray-400 top-4 right-4 hover:bg-blue-100"></button>
      </div>
      <div className="p-3 pt-[26px] relative">
        <div className="absolute -top-1/2 translate-y-1/2 w-[34px] h-[34px] rounded-full bg-gray-900 flex items-center justify-center">
          <span className="text-sm text-white font-bold">
            {(movie.vote_average * 10).toFixed(0)}
          </span>
        </div>
        <h3 className="text-base font-semibold hover:text-blue-100 transition-colors">
          <Link href="/">{movie.title}</Link>
        </h3>
        <p className="text-base text-[#00000060]">{movie.release_date}</p>
      </div>
    </div>
  );
}
