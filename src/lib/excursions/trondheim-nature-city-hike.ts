import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const trondheimNatureCityHikeExcursion: ExcursionData = {
  slug: "trondheim-nature-city-hike",
  path: "/excursions/trondheim-nature-city-hike",
  title: "Trondheim Nature and City Hike",
  headline: "Trondheim Nature and City Hike",
  lead: "An active shore excursion combining nature around Trondheim, a city viewpoint, and a walk into the city centre with important sights and local stories. Approximately four hours for active cruise passengers.",
  metaTitle: "Trondheim Nature and City Hike for Active Cruise Passengers",
  metaDescription:
    "Book the Trondheim Nature and City Hike shore excursion. Nature trails, city viewpoints, walk into historic centre with sights and stories. Approx. 4 hours for active cruise passengers.",
  heroImage: siteImages.natureHikeTour,
  heroImageAlt: imageAlts.natureHikeCard,
  heroBadge: "Active option for longer port calls",
  summary: {
    duration: "Approx. 4 hours",
    meetingPoint:
      "Central Trondheim near cruise berths or designated hike meeting point",
    returnReassurance:
      "Built for four-hour port windows with return-to-ship buffer",
    bestFor:
      "Active cruise passengers who want nature, viewpoints, and historic city sights in one energetic outing",
  },
  snapshotCards: [
    { label: "Pace", value: "Active hiking and city walking" },
    { label: "Fitness level", value: "Moderate to active" },
    { label: "Highlights", value: "Nature trails, viewpoint, city centre" },
    { label: "Season", value: "Best May to September" },
  ],
  gallery: [
    { src: siteImages.bakklandet, alt: imageAlts.bakklandet },
    { src: siteImages.nidarosCathedral, alt: imageAlts.nidarosCathedral },
    { src: siteImages.nidelva, alt: imageAlts.nidelva },
    { src: siteImages.waterfront, alt: imageAlts.waterfront },
  ],
  highlights: [
    "Nature trails in the hills around Trondheim",
    "City viewpoint with panoramic Trondheim vistas",
    "Walk down into the historic city centre",
    "Important sights with local stories and commentary",
    "Nidaros Cathedral and riverfront sections where time allows",
    "Designed for active cruise passengers",
    "Return-to-ship friendly pacing for four-hour port calls",
  ],
  description: [
    "The Trondheim Nature and City Hike is the active alternative for passengers who want more than a gentle city stroll. The route begins in green spaces above the city, where forest trails and open viewpoints reveal Trondheim's setting between fjord and hillside.",
    "Your guide shares local stories about how Trondheim's geography shaped its history as Norway's medieval capital. After the nature section, the hike descends into the city centre where cathedral spires, wharves, and Bakklandet wooden houses reward the effort.",
    "This tour demands a longer port window, approximately four hours, and moderate fitness. It is the headline active recommendation in our Cruise Smart Planner for four-to-six-hour calls and pairs well with unhurried harbour time on six-plus-hour days.",
    "Wear sturdy shoes and dress in layers. Trondheim weather can change quickly between hillside trails and sheltered city streets.",
  ],
  included: [
    "Guided nature hike with city descent into historic centre",
    "Viewpoint stops with panoramic commentary",
    "Walking tour of key city sights where time allows",
    "Return-to-ship timing advice from your guide",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Cathedral interior admission unless stated by operator",
    "Optional extended stops beyond published itinerary",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Requires at least four hours ashore. Do not book on tight two-hour port calls.",
    "Disembark promptly, active hikes start on schedule and rarely wait for late arrivals.",
    "Keep 45 minutes before all aboard for the return to your gangway.",
    "Wear hiking or trail shoes with good grip for nature sections.",
  ],
  faqs: [
    {
      question: "How long is the Trondheim Nature and City Hike?",
      answer:
        "Most operators run approximately four hours including nature trails, a viewpoint, and walk into the city centre.",
    },
    {
      question: "What fitness level is required?",
      answer:
        "Moderate to active. The tour includes uphill hiking on trails before descending into the city. Not suitable for passengers with significant mobility limits.",
    },
    {
      question: "Is this tour good for short port calls?",
      answer:
        "No. You need at least four hours ashore. For shorter calls, choose the City Walk or Waterfront tour instead.",
    },
    {
      question: "Does the hike include Nidaros Cathedral?",
      answer:
        "City centre sections include cathedral exterior and nearby sights where the schedule allows after the nature portion.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Trondheim Nature and City Hike" },
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
    { label: "One day in Trondheim", href: "/one-day-in-trondheim" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Trondheim Nature and City Hike?",
  ctaText:
    "Combine nature trails, city viewpoints, and historic sights with a guide who keeps cruise timetables in mind.",
};
