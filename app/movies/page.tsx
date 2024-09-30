import { getGenres, getPopularMovies } from "../lib/api";

import PopularMovies from "~/components/PopularMovies";
import { Main, Title } from "./styles";

import { Suspense } from "react";

export default async function Movies() {
  const moviesInitialData = await getPopularMovies();
  const { genres } = await getGenres();

  return (
    <Main>
      <Title>Popular Movies</Title>
      <Suspense fallback={<div>Loding...</div>}>
        <PopularMovies moviesInitialData={moviesInitialData} genres={genres} />
      </Suspense>
    </Main>
  );
}
