"use server";

import { APP_API, headers } from "/utils/constants";
import { GetMoviesResponse, GetGenresResponse } from "../movies/types";

export const getPopularMovies: (
  params?: string
) => Promise<GetMoviesResponse> = async (params = "") => {
  const response = await fetch(`${APP_API}/movie/popular?${params}`, {
    headers,
  });
  return response.json();
};

export const getGenres: () => Promise<GetGenresResponse> = async () => {
  const response = await fetch(`${APP_API}/genre/movie/list`, { headers });
  return response.json();
};

export const discoverMovies: (
  queryParams?: string
) => Promise<GetMoviesResponse> = async (queryParams = "") => {
  const response = await fetch(`${APP_API}/discover/movie?${queryParams}`, {
    headers,
  });
  return response.json();
};
