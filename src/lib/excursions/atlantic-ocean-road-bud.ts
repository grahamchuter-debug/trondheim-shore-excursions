import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const atlanticOceanRoadBudExcursion: ExcursionData = {
  slug: "atlantic-ocean-road-bud",
  path: "/excursions/atlantic-ocean-road-bud",
  title: "Atlantic Ocean Road & Bud",
  headline: "Molde to Bud Scenic Drive and the Atlantic Ocean Road",
  lead: "Molde's headline shore excursion — scenic coastal drive to Bud fishing village and the iconic Atlantic Ocean Road with panoramic ocean views, local history, and return-to-ship friendly timing.",
  metaTitle: "Molde to Bud & Atlantic Ocean Road Shore Excursion",
  metaDescription:
    "Book the Molde to Bud scenic drive and Atlantic Ocean Road shore excursion for cruise passengers. Coastal bridges, Bud fishing village, ocean panoramas, and first-time visitor highlights.",
  heroImage: siteImages.atlanticOceanRoadBudTour,
  heroImageAlt: imageAlts.atlanticOceanRoadBudCard,
  heroBadge: "Headline Molde shore excursion for cruise passengers",
  summary: {
    duration: "Approx. 5–6 hours",
    meetingPoint:
      "Central Molde near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Timed for typical Molde port calls with buffer before all aboard",
    bestFor:
      "First-time visitors who want the Atlantic Ocean Road, Bud, and coastal scenery in one efficient tour",
  },
  snapshotCards: [
    { label: "Drive time", value: "Scenic coastal route east of Molde" },
    { label: "Fitness level", value: "Easy — coach touring with photo stops" },
    { label: "Highlights", value: "Atlantic Ocean Road, Bud, ocean views" },
    { label: "Season", value: "Popular May–September" },
  ],
  gallery: [
    { src: siteImages.atlanticOceanRoad, alt: imageAlts.atlanticOceanRoad },
    { src: siteImages.atlanticOceanRoadCoast, alt: imageAlts.atlanticOceanRoadCoast },
    { src: siteImages.budFishingVillage, alt: imageAlts.budFishingVillage },
    { src: siteImages.coastalRoad, alt: imageAlts.coastalRoad },
  ],
  highlights: [
    "Atlantic Ocean Road bridges and iconic coastal curves",
    "Bud fishing village atmosphere and maritime history",
    "Panoramic ocean views along the Romsdal coast",
    "Scenic drive from Molde with photography stops",
    "Local history commentary from coastal communities",
    "Return-to-ship friendly pacing for typical port calls",
  ],
  description: [
    "The Molde to Bud scenic drive is the essential introduction for cruise passengers who want Norway's Atlantic coast in one outing. Your guide leads you east from Molde through rugged shoreline landscapes toward Bud — a historic fishing community where wooden warehouses, harbour life, and North Atlantic weather define the character of the Romsdal coast.",
    "The route continues onto the Atlantic Ocean Road (Atlanterhavsveien), famous for its dramatic bridges linking small islands and skerries. Storseisundet and neighbouring spans deliver the panoramic ocean views that make this one of Norway's most photographed coastal drives — especially rewarding on clear days when waves break against the rocks below.",
    "Commentary connects the scenery to local history: fishing traditions, wartime coastal heritage, and how communities along this exposed shoreline have lived with the sea for generations. Photo stops are built into the itinerary so you capture the drive without rushing past the signature viewpoints.",
    "Because the Atlantic Ocean Road requires meaningful travel time from Molde, this tour suits four-to-six-hour port calls and longer. It is the anchor recommendation in our Cruise Smart Planner for guests who want the definitive Molde coastal experience on their first visit.",
  ],
  included: [
    "Guided scenic drive from Molde to Bud and the Atlantic Ocean Road",
    "Coastal photo stops at signature bridge and shoreline viewpoints",
    "Commentary on local history and fishing village heritage",
    "Route paced for typical cruise port timings",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Museum admission unless stated by operator",
    "Optional extended stops beyond published itinerary",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have at least four to six hours ashore. With eight or more hours, pair with Mount Varden or a private coastal tour.",
    "Disembark promptly on busy turnaround days — Atlantic Ocean Road departures fill when multiple ships share the region.",
    "Keep 30–45 minutes before all aboard for the coach return to your gangway.",
    "Pack a windproof layer — exposed bridges and Bud harbour can be breezy even in summer.",
  ],
  faqs: [
    {
      question: "How long is the Molde to Bud and Atlantic Ocean Road tour?",
      answer:
        "Most operators run five to six hours including driving, Bud village time, and Atlantic Ocean Road photo stops with return to Molde cruise berths.",
    },
    {
      question: "Is this the best Molde excursion for first-time visitors?",
      answer:
        "Yes. It combines the region's signature coastal drive with Bud fishing village atmosphere — the top recommendation in our Cruise Smart Planner for most port lengths of four hours or more.",
    },
    {
      question: "How far is the Atlantic Ocean Road from the Molde cruise port?",
      answer:
        "Roughly 45–60 minutes each way by coach from central Molde, depending on traffic and berth location. Confirm meeting points on your voucher.",
    },
    {
      question: "Can I combine this tour with Mount Varden on the same day?",
      answer:
        "Only on very long port calls. Most guests choose either the coastal drive or the City of Roses and Mount Varden tour. Use the Cruise Smart Planner to check your margin.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Atlantic Ocean Road & Bud" },
  ],
  relatedLinks: [
    {
      label: "Private Atlantic Ocean Road tour",
      href: "/excursions/private-atlantic-ocean-road-bud",
    },
    {
      label: "City of Roses & Mount Varden",
      href: "/excursions/molde-city-varden-viewpoint",
    },
    { label: "One day in Molde", href: "/one-day-in-molde" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Atlantic Ocean Road tour?",
  ctaText:
    "See Bud fishing village, iconic coastal bridges, and open-ocean panoramas with a guide who understands cruise timetables.",
};
