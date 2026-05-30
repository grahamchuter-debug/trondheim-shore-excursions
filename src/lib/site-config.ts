import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Kristiansand Shore Excursions",
  url: "https://kristiansandshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Kristiansand cruise port guides and shore excursion planning for passengers visiting southern Norway's harbourfront, fish market, fortress, beaches, forest trails, and walkable city centre.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Kristiansand Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
