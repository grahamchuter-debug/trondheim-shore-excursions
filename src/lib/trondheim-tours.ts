import { imageAlts, siteImages } from "@/lib/site-images";

export type TrondheimTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const trondheimTourCards: readonly TrondheimTourCard[] = [
  {
    href: "/excursions/trondheim-city-walk",
    image: siteImages.cityWalkTour,
    imageAlt: imageAlts.cityWalkCard,
    title: "Trondheim City Walk for Cruise Passengers",
    description:
      "Main walking tour: approx. 2 hours covering Nidaros Cathedral, Royal Residence / Stiftsgården, main square, Old Town Bridge, Bakklandet, historical wharves. Easy to moderate walking, ideal for first-time visitors.",
    accent: "blue",
  },
  {
    href: "/excursions/trondheim-waterfront-tour",
    image: siteImages.waterfrontTour,
    imageAlt: imageAlts.waterfrontCard,
    title: "Trondheim Waterfront Guided Tour",
    description:
      "Scenic photo walking route along river and fjord waterfront, new and old harbour, colourful wharves, bridges, and Solsiden harbour atmosphere where suitable.",
    accent: "red",
  },
  {
    href: "/excursions/trondheim-nature-city-hike",
    image: siteImages.natureHikeTour,
    imageAlt: imageAlts.natureHikeCard,
    title: "Trondheim Nature and City Hike",
    description:
      "Active option: nature around Trondheim, city viewpoint, walk into the city centre with important sights and local stories. Approx. 4 hours for active cruise passengers.",
    accent: "blue",
  },
  {
    href: "/excursions/trondheim-family-walking-tour",
    image: siteImages.familyTour,
    imageAlt: imageAlts.familyCard,
    title: "Trondheim Family Walking Tour",
    description:
      "Child-friendly city walk through cosy wooden streets with playground-style stops, Nidaros Cathedral stories, Vikings, saints and kings. Best for families.",
    accent: "red",
  },
  {
    href: "/excursions/private-custom-trondheim-tour",
    image: siteImages.privateTour,
    imageAlt: imageAlts.privateCard,
    title: "Private Custom Trondheim Tour",
    description:
      "Premium private option: 2 to 9 hours possible with customized sightseeing, flexible start time. Nidaros Cathedral, Bakklandet, waterfront, viewpoints or museums. Best for couples, families and small groups.",
    accent: "blue",
  },
] as const;

export const trondheimTourListItems = trondheimTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
