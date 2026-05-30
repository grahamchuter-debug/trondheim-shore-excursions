export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/trondheim-city-walk",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/trondheim-waterfront-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/trondheim-nature-city-hike",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/trondheim-family-walking-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-custom-trondheim-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/trondheim-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-trondheim",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-trondheim-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-trondheim",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
] as const;
