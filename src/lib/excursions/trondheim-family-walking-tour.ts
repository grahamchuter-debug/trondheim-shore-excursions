import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const trondheimFamilyWalkingTourExcursion: ExcursionData = {
  slug: "trondheim-family-walking-tour",
  path: "/excursions/trondheim-family-walking-tour",
  title: "Trondheim Family Walking Tour",
  headline: "Trondheim Family Walking Tour",
  lead: "A child-friendly city walk through cosy wooden streets with playground-style stops where suitable, Nidaros Cathedral stories, and tales of Vikings, saints and kings. Best for families on a Trondheim cruise day.",
  metaTitle: "Trondheim Family Walking Tour for Cruise Passengers with Children",
  metaDescription:
    "Book the Trondheim Family Walking Tour. Child-friendly city walk, cosy wooden streets, Nidaros Cathedral stories, Vikings, saints and kings. Best for families on a cruise port day.",
  heroImage: siteImages.familyTour,
  heroImageAlt: imageAlts.familyCard,
  heroBadge: "Family-friendly city walk",
  summary: {
    duration: "Approx. 2 hours",
    meetingPoint:
      "Central Trondheim near cruise berths or family tour meeting point",
    returnReassurance:
      "Paced for families with children and return-to-ship buffer",
    bestFor:
      "Families with children who want engaging stories and gentle walking through Trondheim's historic centre",
  },
  snapshotCards: [
    { label: "Pace", value: "Gentle walking with child-friendly stops" },
    { label: "Fitness level", value: "Easy" },
    { label: "Highlights", value: "Cathedral stories, Bakklandet, bridge" },
    { label: "Season", value: "Popular May to August" },
  ],
  gallery: [
    { src: siteImages.gamleBybro, alt: imageAlts.gamleBybro },
    { src: siteImages.bakklandet, alt: imageAlts.bakklandet },
    { src: siteImages.nidarosCathedral, alt: imageAlts.nidarosCathedral },
    { src: siteImages.historicalWharves, alt: imageAlts.historicalWharves },
  ],
  highlights: [
    "Child-friendly city walk at family pacing",
    "Cosy wooden streets in Bakklandet",
    "Playground-style stops where suitable",
    "Nidaros Cathedral stories for all ages",
    "Vikings, saints and kings brought to life",
    "Old Town Bridge and wharf sections",
    "Return-to-ship friendly for family schedules",
  ],
  description: [
    "The Trondheim Family Walking Tour turns Norway's former capital into an adventure for young explorers. Guides tell cathedral stories, Viking legends, and tales of saints and kings in language that engages children without losing the interest of adults.",
    "The route favours cosy wooden streets in Bakklandet and gentle wharf paths over steep hills. Playground-style stops appear where suitable, giving children room to move while parents enjoy the riverfront atmosphere.",
    "Crossing the Old Town Bridge becomes a highlight moment, red gates framing views that capture imaginations. Commentary connects Trondheim's past to the colourful houses and harbour life visible today.",
    "This tour suits families with at least two to three hours ashore. It is the family headline in our Cruise Smart Planner and pairs well with independent ice cream or café time near the main square when schedules allow.",
  ],
  included: [
    "Family-paced guided walking tour of Trondheim",
    "Engaging stories about Vikings, saints, and kings",
    "Nidaros Cathedral exterior and Bakklandet walking time",
    "Return-to-ship timing advice for families",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Cathedral interior admission unless stated by operator",
    "Playground or activity fees unless stated by operator",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have at least two to three hours ashore with children.",
    "Book ahead on peak summer days when family tours fill quickly.",
    "Keep 45 minutes before all aboard, families move at a slower pace near the gangway.",
    "Bring snacks, water, and weather layers for changeable Trondheim conditions.",
  ],
  faqs: [
    {
      question: "What age children is the family tour suitable for?",
      answer:
        "Most operators welcome school-age children and younger with engaged parents. Confirm stroller accessibility with your operator if needed.",
    },
    {
      question: "Does the tour include playground stops?",
      answer:
        "Playground-style stops are included where suitable on the route and schedule. Exact stops may vary by departure.",
    },
    {
      question: "How much walking is involved for children?",
      answer:
        "Easy walking at a gentle family pace on mostly flat city streets. The tour avoids steep Bakklandet climbs where possible.",
    },
    {
      question: "Is this better than the standard City Walk for families?",
      answer:
        "Yes. The Family Walking Tour uses child-friendly pacing and storytelling. The standard City Walk suits adults and older teens preferring faster coverage.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Trondheim Family Walking Tour" },
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
  ctaTitle: "Ready to book your Trondheim Family Walking Tour?",
  ctaText:
    "Explore Bakklandet, the Old Town Bridge, and cathedral stories with a guide who keeps families and cruise timetables in mind.",
};
