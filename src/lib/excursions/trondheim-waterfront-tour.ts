import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const trondheimWaterfrontTourExcursion: ExcursionData = {
  slug: "trondheim-waterfront-tour",
  path: "/excursions/trondheim-waterfront-tour",
  title: "Trondheim Waterfront Guided Tour",
  headline: "Trondheim Waterfront Guided Tour",
  lead: "A scenic photo walking route along Trondheim's river and fjord waterfront, covering new and old harbour, colourful wharves, bridges, and Solsiden harbour atmosphere where suitable.",
  metaTitle: "Trondheim Waterfront Guided Tour for Cruise Passengers",
  metaDescription:
    "Book the Trondheim Waterfront Guided Tour. River and fjord waterfront, new and old harbour, colourful wharves, bridges, and photo-friendly routes for cruise passengers.",
  heroImage: siteImages.waterfrontTour,
  heroImageAlt: imageAlts.waterfrontCard,
  heroBadge: "Scenic photo walking route",
  summary: {
    duration: "Approx. 2 hours",
    meetingPoint:
      "Trondheim harbour or Nidelva waterfront near cruise berths or designated meeting point",
    returnReassurance:
      "Designed for photo-friendly pacing with return-to-ship buffer",
    bestFor:
      "Cruise passengers who want riverfront scenery, harbour atmosphere, and Instagram-worthy Trondheim views",
  },
  snapshotCards: [
    { label: "Pace", value: "Relaxed walking with photo stops" },
    { label: "Fitness level", value: "Easy" },
    { label: "Highlights", value: "Nidelva, wharves, harbour bridges" },
    { label: "Season", value: "Popular May to September" },
  ],
  gallery: [
    { src: siteImages.nidelva, alt: imageAlts.nidelva },
    { src: siteImages.waterfront, alt: imageAlts.waterfront },
    { src: siteImages.historicalWharves, alt: imageAlts.historicalWharves },
    { src: siteImages.harbour, alt: imageAlts.harbour },
  ],
  highlights: [
    "Nidelva river and fjord waterfront panoramas",
    "New and old harbour districts",
    "Colourful historic wharves along the river",
    "Bridges spanning the Nidelva including photo viewpoints",
    "Solsiden harbour atmosphere where suitable",
    "Photo-friendly route with guide commentary",
    "Return-to-ship friendly pacing",
  ],
  description: [
    "The Trondheim Waterfront Guided Tour follows the city's most photogenic edge, the Nidelva river where wooden warehouses reflect in the water and bridges frame views toward Bakklandet. Your guide knows the best angles for capturing Trondheim's harbour character without losing sight of your ship's timetable.",
    "The route connects the old wharf district with newer harbour development, showing how Trondheim balances maritime heritage with a modern waterfront lifestyle. Solsiden's café culture and marina atmosphere appear where the itinerary allows.",
    "Commentary covers fishing traditions, shipbuilding history, and how the Trondheimsfjord shaped this former capital. Gentle walking pace and frequent photo stops make this ideal for passengers who prefer scenery over intensive sightseeing.",
    "This tour pairs well with short port calls and complements the City Walk when you have a longer day ashore. It is a headline recommendation in our Cruise Smart Planner for under-three-hour and three-to-four-hour windows.",
  ],
  included: [
    "Guided waterfront walking tour along the Nidelva and harbour",
    "Photo stop guidance at bridges and wharf viewpoints",
    "Commentary on Trondheim maritime history",
    "Return-to-ship timing advice from your guide",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Boat trips unless stated by operator",
    "Optional extended stops beyond published itinerary",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal for two to three hours ashore when you want maximum scenery with minimal walking difficulty.",
    "Morning light often suits river photography; afternoon calls still work well along sheltered wharves.",
    "Keep 30 to 45 minutes before all aboard for the return to your gangway.",
    "Bring a camera or phone with charged battery for bridge and wharf photo stops.",
  ],
  faqs: [
    {
      question: "Is the Trondheim Waterfront tour good for photography?",
      answer:
        "Yes. This tour is designed as a photo-friendly route with guide commentary at the best river, bridge, and wharf viewpoints.",
    },
    {
      question: "Does the tour visit Solsiden?",
      answer:
        "Solsiden harbour atmosphere is included where suitable on your port schedule. Exact routing may vary by departure time and operator.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Easy walking on mostly flat waterfront paths. Suitable for passengers who prefer gentle pacing with frequent stops.",
    },
    {
      question: "Can I combine this with the City Walk?",
      answer:
        "On port calls of four hours or more, many guests do one guided tour plus brief independent time. Use the Cruise Smart Planner to check your margin.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Trondheim Waterfront Guided Tour" },
  ],
  relatedLinks: [
    {
      label: "Trondheim City Walk",
      href: "/excursions/trondheim-city-walk",
    },
    {
      label: "Private Custom Trondheim Tour",
      href: "/excursions/private-custom-trondheim-tour",
    },
    { label: "Trondheim port guide", href: "/trondheim-port-guide" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Trondheim Waterfront tour?",
  ctaText:
    "Walk the Nidelva, colourful wharves, and harbour bridges with a guide who knows the best photo stops.",
};
