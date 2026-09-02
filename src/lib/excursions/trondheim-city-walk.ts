import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const trondheimCityWalkExcursion: ExcursionData = {
  slug: "trondheim-city-walk",
  path: "/excursions/trondheim-city-walk",
  title: "Trondheim City Walk",
  headline: "Trondheim City Walk for Cruise Passengers",
  lead: "Trondheim's main walking tour covering Nidaros Cathedral, Royal Residence / Stiftsgården, the main square, Old Town Bridge, Bakklandet, and historical wharves in approximately two hours of easy to moderate walking.",
  metaTitle: "Trondheim City Walk Shore Excursion for Cruise Passengers",
  metaDescription:
    "Explore the Trondheim City Walk shore excursion for cruise passengers. Nidaros Cathedral, Stiftsgården, main square, Old Town Bridge, Bakklandet, and historical wharves in approx. 2 hours.",
  heroImage: siteImages.hero,
  heroImageAlt: imageAlts.hero,
  heroBadge: "Main walking tour for first-time visitors",
  summary: {
    duration: "Approx. 2 hours",
    meetingPoint:
      "Central Trondheim near cruise berths, harbour, or designated walking tour meeting point",
    returnReassurance:
      "Timed for typical Trondheim port calls with buffer before all aboard",
    bestFor:
      "First-time visitors who want Trondheim's historic centre, cathedral, and Bakklandet in one efficient walking tour",
  },
  snapshotCards: [
    { label: "Pace", value: "Walking with photo stops" },
    { label: "Fitness level", value: "Easy to moderate" },
    { label: "Highlights", value: "Cathedral, bridge, Bakklandet" },
    { label: "Season", value: "Popular May to September" },
  ],
  gallery: [
    { src: siteImages.nidarosCathedral, alt: imageAlts.nidarosCathedral },
    { src: siteImages.stiftsgarden, alt: imageAlts.stiftsgarden },
    { src: siteImages.gamleBybro, alt: imageAlts.gamleBybro },
    { src: siteImages.bakklandet, alt: imageAlts.bakklandet },
  ],
  highlights: [
    "Nidaros Cathedral, Norway's national shrine",
    "Royal Residence / Stiftsgården on the main square",
    "Torvet main square and historic city centre",
    "Gamle Bybro Old Town Bridge with red gates",
    "Bakklandet wooden-house district across the Nidelva",
    "Historical wharves along the riverfront",
    "Return-to-ship friendly pacing for typical port calls",
  ],
  description: [
    "The Trondheim City Walk is the essential introduction for cruise passengers who want Norway's historic capital in one outing. Your local guide connects Trondheim's royal and religious heritage to the landmarks that define a first visit: the Gothic west front of Nidaros Cathedral, the yellow Stiftsgården Royal Residence, and the cobbled lanes leading toward the Old Town Bridge.",
    "Crossing Gamle Bybro opens onto Bakklandet, where colourful wooden houses climb the hillside above the Nidelva. Commentary weaves together Viking kings, medieval saints, and how Trondheim grew as a trading city at the mouth of the Trondheimsfjord.",
    "The route includes the main square and historical wharves where warehouses once stored timber and dried fish. Photo stops at river viewpoints are built into the itinerary so you capture Trondheim without rushing past signature scenes.",
    "Because this tour stays on foot in the compact historic centre, it suits two-hour port calls and longer. It is the anchor recommendation in our Cruise Smart Planner for guests who want the definitive Trondheim experience on their first visit.",
  ],
  included: [
    "Guided walking tour of Trondheim historic centre",
    "Nidaros Cathedral exterior and main square commentary",
    "Old Town Bridge, Bakklandet, and wharf walking time",
    "Local guide with return-to-ship timing advice",
  ],
  notIncluded: [
    "Cathedral interior admission unless stated by operator",
    "Food, drinks, and personal purchases",
    "Optional extended stops beyond published itinerary",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have at least two to three hours ashore. With four or more hours, pair with the Waterfront tour or relaxed Bakklandet time.",
    "Disembark promptly on busy turnaround days, popular walking tours fill when multiple ships share the port.",
    "Keep 30 to 45 minutes before all aboard for the return to your gangway.",
    "Pack comfortable walking shoes and a light layer for river breezes.",
  ],
  faqs: [
    {
      question: "How long is the Trondheim City Walk?",
      answer:
        "Most operators run approximately two hours including cathedral, main square, Old Town Bridge, Bakklandet, and wharf sections with return to cruise berths.",
    },
    {
      question: "Is this the best Trondheim excursion for first-time visitors?",
      answer:
        "Yes. It combines the city's signature historic landmarks in one walk, the top recommendation in our Cruise Smart Planner for most port lengths of two hours or more.",
    },
    {
      question: "Does the tour include Nidaros Cathedral?",
      answer:
        "Yes. Nidaros Cathedral is a core stop. Exterior viewing and commentary are included; interior visits depend on service times and operator arrangements.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Easy to moderate walking on cobbled streets and gentle hills in Bakklandet. Suitable for most active cruise passengers with comfortable footwear.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Trondheim City Walk" },
  ],
  relatedLinks: [
    {
      label: "Trondheim Waterfront Guided Tour",
      href: "/excursions/trondheim-waterfront-tour",
    },
    {
      label: "Trondheim Family Walking Tour",
      href: "/excursions/trondheim-family-walking-tour",
    },
    { label: "One day in Trondheim", href: "/one-day-in-trondheim" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore Trondheim excursions",
  ctaTitle: "Ready to explore Trondheim City Walk?",
  ctaText:
    "See Nidaros Cathedral, Bakklandet, and the Old Town Bridge with a guide who understands cruise timetables.",
};
