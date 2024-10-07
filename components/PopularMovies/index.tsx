"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import SearchSidebar from "/components/search-sidebar";
import MovieCard from "/components/movie-card";
import {
  PageWrapper,
  Form,
  MoviesSection,
  MoviesGrid,
  LoadMoreBtn,
} from "./styles";

import { Genre, GetMoviesResponse } from "/app/movies/types";
import { discoverMovies, getPopularMovies } from "/app/lib/api";

interface PopularMoviesProps {
  moviesInitialData: GetMoviesResponse;
  genres: Genre[];
}

export default function PopularMovies({
  moviesInitialData,
  genres,
}: PopularMoviesProps) {
  const [params, setParams] = useState("");
  const [isInfiniteScrollEnabled, setIsInfiniteScrollEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(moviesInitialData);

  const { results: movies = [], page, total_pages } = data;

  const { ref, inView } = useInView();

  const onSubmit = async (formData: FormData) => {
    const params = new URLSearchParams(
      formData as unknown as Record<string, string>
    ).toString();
    try {
      setParams(params);
      if (params) {
        const response = await discoverMovies(params);
        setData(response);
      }
    } catch (error) {
      throw new Error("Failed to fetch movies");
    }
  };

  const handleFetch = async () => {
    setIsLoading(true);
    try {
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
    } catch (err) {
      setIsLoading(false);
      throw new Error("Failed to fetch movies");
    }
  };

  useEffect(() => {
    if (inView) {
      if (!isLoading && page < total_pages && isInfiniteScrollEnabled) {
        handleFetch();
      }
    }
  }, [inView, isLoading, page, total_pages, isInfiniteScrollEnabled]);

  useEffect(() => {
    setIsInfiniteScrollEnabled(false);
  }, [params]);

  const handleLoadMore = async () => {
    if (!isInfiniteScrollEnabled && page < total_pages) {
      await handleFetch();
      setIsInfiniteScrollEnabled(true);
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
