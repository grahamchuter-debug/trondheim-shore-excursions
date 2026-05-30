export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/atlantic-ocean-road-bud",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-atlantic-ocean-road-bud",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/molde-city-varden-viewpoint",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/atlantic-coast-fishing-village",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/molde-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-molde",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-molde-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-molde",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
] as const;
