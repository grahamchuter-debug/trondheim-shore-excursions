import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Trondheim Shore Excursions",
  url: "https://trondheimshoreexcursions.com",
  locale: "en_GB",
  tagline: "Cathedral city walks for a cruise day ashore",
  defaultDescription:
    "Independent Trondheim cruise-port planning: Nidaros Cathedral, Bakklandet, Old Town Bridge, riverfront walks and published ship schedules for your day ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Trondheim Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/one-day-in-trondheim",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@trondheimshoreexcursions.com",
  /** Cloudflare Email Routing active: hello@ → info@wowatour.com */
  contactEmailVerified: true,
} as const;
