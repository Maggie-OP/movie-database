export interface SectionLink {
  name: string;
  sections?: { name: string; href?: string }[];
}

export const SECTION_LINKS: SectionLink[] = [
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
