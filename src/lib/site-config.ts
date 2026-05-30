import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Molde Shore Excursions",
  url: "https://moldeshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Molde cruise port guides and shore excursion planning for passengers visiting Norway's City of Roses, the Atlantic Ocean Road, Bud fishing village, and Romsdal mountain panoramas.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Molde Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
