import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Trondheim Shore Excursions",
  url: "https://trondheimshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Trondheim cruise port guides and shore excursion planning for passengers visiting Nidaros Cathedral, Bakklandet, the Old Town Bridge, historic wharves, and Trondheim's walkable riverfront city centre.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Trondheim Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
