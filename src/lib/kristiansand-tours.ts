import { imageAlts, siteImages } from "@/lib/site-images";

export type KristiansandTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const kristiansandTourCards: readonly KristiansandTourCard[] = [
  {
    href: "/excursions/kristiansand-highlights",
    image: siteImages.highlightsTour,
    imageAlt: imageAlts.highlightsCard,
    title: "Kristiansand Highlights Shore Excursion",
    description:
      "Main city-and-culture tour: Vest-Agder Cultural Heritage Museum, Høllen coastal village, Domkirke, Fiskebrygga fish market, Christiansholm Fortress, Kilden, harbour and marina views. Best for first-time visitors.",
    accent: "blue",
  },
  {
    href: "/excursions/baneheia-ravnedalen-nature-trek",
    image: siteImages.natureTrekTour,
    imageAlt: imageAlts.natureTrekCard,
    title: "Baneheia and Ravnedalen Nature Trek",
    description:
      "Nature-focused headline tour through Baneheia and Ravnedalen with forest trails, lakes, viewpoints, and coastal woodland scenery. Moderate activity level.",
    accent: "red",
  },
  {
    href: "/excursions/walking-exploration-kristiansand",
    image: siteImages.walkingTour,
    imageAlt: imageAlts.walkingCard,
    title: "Walking Exploration of Kristiansand",
    description:
      "Short-port and independent cruise passenger option: Fiskebrygga fish market, Christiansholm Fortress, waterfront promenade, Bystranda beach, Otra river, and harbourfront at an easy walking pace.",
    accent: "blue",
  },
  {
    href: "/excursions/harbour-fortress-fish-market",
    image: siteImages.harbourWalkTour,
    imageAlt: imageAlts.harbourWalkCard,
    title: "Kristiansand Harbour, Fortress and Fish Market Walk",
    description:
      "Compact harbour walk covering Fiskebrygga, Christiansholm Fortress, marina, local food atmosphere, and short-port suitability for tight cruise schedules.",
    accent: "red",
  },
  {
    href: "/excursions/family-beach-day",
    image: siteImages.familyBeachTour,
    imageAlt: imageAlts.familyBeachCard,
    title: "Kristiansand Family and Beach Day",
    description:
      "Family-friendly planning tour with Bystranda beach, Aquarama area, waterfront promenade, relaxed town time, and activities suitable for children.",
    accent: "blue",
  },
] as const;

export const kristiansandTourListItems = kristiansandTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
