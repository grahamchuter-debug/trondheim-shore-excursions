import {
  getTrondheimMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/trondheim-schedules";

const staticRoutes = [
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
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getTrondheimMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

export const siteRoutes = staticRoutes;
