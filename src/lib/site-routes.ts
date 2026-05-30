export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/kristiansand-highlights",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/baneheia-ravnedalen-nature-trek",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/walking-exploration-kristiansand",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/harbour-fortress-fish-market",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/family-beach-day",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/kristiansand-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-kristiansand",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-kristiansand-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-kristiansand",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
] as const;
