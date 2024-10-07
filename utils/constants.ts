import { NavLink } from "./types";

export const headers = {
  "Content-Type": "text/html;charset=utf-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM2YzdiYWEzYTdjYzQyNmIwZjMwMzQzNDQ3OTBkZSIsIm5iZiI6MTcyNzQ0MzU5NS40NjA0NzQsInN1YiI6IjY2ZjZhY2IxZGUyMWE2Yjc4MjUwYzAyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPQ9fniMAlxOM20ygfbjIC8bFbtoZp2Grvy4zvNfTkE",
};

export const APP_API = "https://api.themoviedb.org/3";

export const FOOTER_SECTIONS = [
  {
    name: "The Basics",
    items: [
      { name: "About TMBD", href: "/" },
      { name: "Contact Us", href: "/" },
      { name: "Support Forums", href: "/" },
      { name: "API", href: "/" },
      { name: "System Status", href: "/" },
    ],
  },
  {
    name: "Get Involved",
    items: [
      { name: "Contribution Bible", href: "/" },
      { name: "Add New Movie", href: "/" },
      { name: "Add New TV Show", href: "/" },
    ],
  },
  {
    name: "Community",
    items: [
      { name: "Guidelines", href: "/" },
      { name: "Discussions", href: "/" },
      { name: "Leaderboard", href: "/" },
    ],
  },
  {
    name: "Legal",
    items: [
      { name: "Terms of Use", href: "/" },
      { name: "API Terms of Use", href: "/" },
      { name: "Privacy Policy", href: "/" },
      { name: "DMCA Policy", href: "/" },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  {
    name: "Movies",
    sections: [
      { name: "Popular", href: "/movies" },
      { name: "New Playing" },
      { name: "Upcoming" },
      { name: "Top Rated" },
    ],
  },
  { name: "TV Shows" },
  { name: "People" },
  { name: "More" },
];

export const SHOW_ME_OPTIONS = [
  { label: "Everything", value: "everything" },
  { label: "Movies I haven't seen", value: "unwatched" },
  { label: "Movies I have seen", value: "watched" },
];

export const SORT_BY_OPTIONS = [
  { label: "Popularity Ascending", value: "popularity.asc" },
  { label: "Popularity Descending", value: "populariry.desc" },
  { label: "Rating Ascending", value: "vote_average.asc" },
  { label: "Rating Descending", value: "vote_average.desc" },
  { label: "Release Date Ascending", value: "primary_release_date.asc" },
  { label: "Release Date Descending", value: "primary_release_date.desc" },
  { label: "Title (A-Z)", value: "title.asc" },
  { label: "Title (Z-A)", value: "title.desc" },
];
