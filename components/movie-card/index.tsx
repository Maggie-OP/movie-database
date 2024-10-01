import Link from "next/link";

import {
  Card,
  CardMedia,
  CardMediaLink,
  CardImage,
  CardOptions,
  MovieRating,
  CardContent,
  CardContentTitle,
  CardDescription,
} from "./styles";

import { Movie } from "~/app/movies/types";

import defaultImage from "~/assets/default-image.svg";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <CardMedia>
        <CardMediaLink href="" className="flex w-full h-[284px]">
          <CardImage
            src={
              !!movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
            width={100}
            height={100}
          />
        </CardMediaLink>
        <CardOptions></CardOptions>
        <MovieRating>{(movie.vote_average * 10).toFixed(0)}</MovieRating>
      </CardMedia>
      <CardContent>
        <CardContentTitle>
          <Link href="/">{movie.title}</Link>
        </CardContentTitle>
        <CardDescription>{movie.release_date}</CardDescription>
      </CardContent>
    </Card>
  );
}
