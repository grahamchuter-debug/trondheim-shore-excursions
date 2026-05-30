import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const privateCustomTrondheimTourExcursion: ExcursionData = {
  slug: "private-custom-trondheim-tour",
  path: "/excursions/private-custom-trondheim-tour",
  title: "Private Custom Trondheim Tour",
  headline: "Private Custom Trondheim Tour",
  lead: "A premium private tour from 2 to 9 hours with customized sightseeing, flexible start time, and your choice of Nidaros Cathedral, Bakklandet, waterfront, viewpoints, or museums depending on interest. Best for couples, families, and small groups.",
  metaTitle: "Private Custom Trondheim Tour for Cruise Passengers",
  metaDescription:
    "Book a Private Custom Trondheim Tour. 2 to 9 hours, customized sightseeing, flexible start time. Cathedral, Bakklandet, waterfront, viewpoints or museums. Best for couples, families and small groups.",
  heroImage: siteImages.hero,
  heroImageAlt: imageAlts.hero,
  heroBadge: "Premium private option",
  summary: {
    duration: "2 to 9 hours possible",
    meetingPoint:
      "Flexible pickup near cruise berths, harbour, or agreed central Trondheim location",
    returnReassurance:
      "Private pacing tailored to your port window with return-to-ship buffer",
    bestFor:
      "Couples, families, and small groups who want a personalized Trondheim experience on their own schedule",
  },
  snapshotCards: [
    { label: "Pace", value: "Fully customized to your group" },
    { label: "Fitness level", value: "Flexible, discuss with guide" },
    { label: "Highlights", value: "Your choice of Trondheim sights" },
    { label: "Season", value: "Available May to September" },
  ],
  gallery: [
    { src: siteImages.stiftsgarden, alt: imageAlts.stiftsgarden },
    { src: siteImages.nidarosCathedral, alt: imageAlts.nidarosCathedral },
    { src: siteImages.bakklandet, alt: imageAlts.bakklandet },
    { src: siteImages.waterfront, alt: imageAlts.waterfront },
  ],
  highlights: [
    "2 to 9 hours possible depending on port schedule",
    "Customized sightseeing tailored to your interests",
    "Flexible start time aligned with your disembarkation",
    "Nidaros Cathedral, Bakklandet, and waterfront options",
    "Viewpoints or museums depending on your preferences",
    "Private guide for couples, families, and small groups",
    "Return-to-ship timing built into your itinerary",
  ],
  description: [
    "The Private Custom Trondheim Tour puts your port day entirely in your hands. Choose a two-hour cathedral and Bakklandet focus, a half-day combining waterfront and wharves, or a full nine-hour exploration that adds viewpoints, museums, and unhurried café time.",
    "Your private guide adjusts pacing to your group, whether that means detailed cathedral history for culture lovers, photo stops along the Nidelva, or family-friendly storytelling through the Old Town Bridge. Flexible start times align with your actual disembarkation rather than fixed group departures.",
    "This is the premium recommendation in our Cruise Smart Planner for three-to-four-hour calls and the headline choice for six-plus-hour days. Couples celebrating anniversaries, multi-generational families, and small groups of friends all benefit from itinerary control.",
    "Discuss your interests when booking. Popular combinations include cathedral plus Bakklandet, waterfront photography routes, and nature viewpoints with city centre descent on longer port calls.",
  ],
  included: [
    "Private guide for your group only",
    "Customized itinerary based on your interests and port window",
    "Flexible start time near cruise berths or agreed location",
    "Return-to-ship timing advice throughout your tour",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Museum and cathedral interior admission unless stated",
    "Transport beyond walking tours unless arranged separately",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Works across all port lengths from two hours to full days. Match duration to your actual hours ashore.",
    "Book early on peak summer days, private guides have limited availability.",
    "Keep 45 minutes before all aboard even on private tours, your guide will plan accordingly.",
    "Share mobility needs and interests when booking so the itinerary suits your group.",
  ],
  faqs: [
    {
      question: "How long can a Private Custom Trondheim Tour last?",
      answer:
        "From 2 to 9 hours depending on your port schedule and interests. Discuss your ship's timetable when booking.",
    },
    {
      question: "Can we choose what to see?",
      answer:
        "Yes. Popular choices include Nidaros Cathedral, Bakklandet, waterfront, viewpoints, and museums. Your guide builds the day around your preferences.",
    },
    {
      question: "Is a private tour worth it for small groups?",
      answer:
        "Often yes. Split among four to six passengers, per-person cost can compare favourably with ship excursions while offering flexible pacing and personalized commentary.",
    },
    {
      question: "Can the tour start when we disembark?",
      answer:
        "Flexible start times are a key benefit. Confirm your expected gangway time when booking so your guide meets you promptly.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Private Custom Trondheim Tour" },
  ],
  relatedLinks: [
    {
      label: "Trondheim City Walk",
      href: "/excursions/trondheim-city-walk",
    },
    {
      label: "Trondheim Nature and City Hike",
      href: "/excursions/trondheim-nature-city-hike",
    },
    { label: "Trondheim port guide", href: "/trondheim-port-guide" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Private Custom Trondheim Tour?",
  ctaText:
    "Design your perfect Trondheim port day with a private guide who understands cruise timetables.",
};
