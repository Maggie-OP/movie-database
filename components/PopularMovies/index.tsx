"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import SearchSidebar from "../search-sidebar";
import MovieCard from "../movie-card";
import {
  PageWrapper,
  Form,
  MoviesSection,
  MoviesGrid,
  LoadMoreBtn,
} from "./styles";

import { Genre, GetMoviesResponse } from "~/app/movies/types";
import { discoverMovies, getPopularMovies } from "~/app/lib/api";

interface PopularMoviesProps {
  moviesInitialData: GetMoviesResponse;
  genres: Genre[];
}

export default function PopularMovies({
  moviesInitialData,
  genres,
}: PopularMoviesProps) {
  const [params, setParams] = useState("");
  const [isInfiniteScrollUnabled, setIsInfiniteScrollUnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(moviesInitialData);

  const { results: movies = [], page, total_pages } = data;

  const { ref, inView } = useInView();

  const onSubmit = async (formData: FormData) => {
    const params = new URLSearchParams(
      formData as unknown as Record<string, string>
    ).toString();
    setParams(params);
    try {
      const response = await discoverMovies(params);
      setData(response);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const handleFetch = async () => {
    setIsLoading(true);
    let response: GetMoviesResponse;
    if (params) {
      response = await discoverMovies(`${params}&page=${page + 1}`);
    } else {
      response = await getPopularMovies(`page=${page + 1}`);
    }
    const { results, ...rest } = response;
    setData((prev) => ({
      results: [...prev.results, ...results],
      ...rest,
    }));
    setIsLoading(false);
  };

  useEffect(() => {
    if (inView) {
      if (!isLoading && page < total_pages && isInfiniteScrollUnabled) {
        handleFetch();
      }
    }
  }, [inView, isLoading]);

  useEffect(() => {
    setIsInfiniteScrollUnabled(false);
  }, [params]);

  const handleLoadMore = async () => {
    if (!isInfiniteScrollUnabled && page < total_pages) {
      await handleFetch();
      setIsInfiniteScrollUnabled(true);
    }
  };

  return (
    <PageWrapper>
      <Form action={onSubmit}>
        <SearchSidebar genres={genres} />
      </Form>
      <MoviesSection>
        <MoviesGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MoviesGrid>
        <div ref={ref} />
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </LoadMoreBtn>
      </MoviesSection>
    </PageWrapper>
  );
}
