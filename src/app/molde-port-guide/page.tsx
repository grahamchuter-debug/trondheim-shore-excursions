import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Molde Cruise Port Guide",
  description:
    "Molde cruise port guide for passengers: terminal locations, walking distances to Mount Varden, harbour facilities, local transport, currency, weather, and return-to-ship tips.",
  path: "/molde-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Molde Port Guide" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Molde", href: "/one-day-in-molde" },
  { label: "Is Molde worth visiting?", href: "/is-molde-worth-visiting" },
] as const;

const faqs = [
  {
    question: "How far is the Molde cruise port from Mount Varden and the town centre?",
    answer:
      "Most cruise berths are 5–15 minutes on foot from the harbour, City of Roses centre, and Mount Varden cable car base. Tourist information sits in the compact town area.",
  },
  {
    question: "Where do cruise ships dock in Molde?",
    answer:
      "Ships typically berth at Skansekaien or nearby harbour facilities close to the city centre. Confirm your exact pier on the ship's app the night before arrival.",
  },
  {
    question: "What currency is used in Molde?",
    answer:
      "Norwegian kroner (NOK). Cards are widely accepted, but carry some cash for small purchases and market stalls.",
  },
  {
    question: "How early should cruise passengers return to the ship in Molde?",
    answer:
      "Plan to be back at the gangway at least 30–45 minutes before all aboard. Coach returns from the Atlantic Ocean Road and harbour queues can compress that buffer on peak summer days.",
  },
] as const;

export default function MoldePortGuidePage() {
  return (
    <ContentPage
      title="Molde Port Guide for Cruise Passengers"
      lead="Everything you need to navigate Molde cruise port — terminal locations, walking routes, Mount Varden access, facilities, and how to reach shore excursions without losing precious port time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Cruise terminal locations</h2>
        <p>
          Molde sits on the northern shore of the Romsdalsfjord with cruise berths
          typically close to the compact city centre and harbour promenade. Large
          ships dock at Skansekaien and adjacent facilities within walking distance
          of excursion meeting points and the City of Roses town core.
        </p>
        <p>
          Confirm your exact berth on the ship&apos;s app the night before
          arrival. Assignments can change when several vessels share the port on
          the same day.
        </p>
      </section>

      <section>
        <h2>Walking distances from the pier</h2>
        <ul>
          <li>
            <strong>Molde harbour promenade:</strong> often 5–10 minutes on foot
          </li>
          <li>
            <strong>City of Roses town centre:</strong> typically 5–15 minutes
            from main cruise berths
          </li>
          <li>
            <strong>Mount Varden cable car base:</strong> about 10–15 minutes
            from the harbour area
          </li>
          <li>
            <strong>Tourist information:</strong> in the compact centre, walkable
            from most piers
          </li>
          <li>
            <strong>Atlantic Ocean Road:</strong> not walkable — coach tours
            depart from designated pickups
          </li>
        </ul>
      </section>

      <section>
        <h2>Mount Varden access</h2>
        <p>
          Mount Varden overlooks Molde with the Romsdal Alps as a backdrop. The
          cable car or walking paths reach the summit viewpoint. Many shore
          excursions include Varden as part of a city tour. Allow time for
          queues on busy cruise days.
        </p>
      </section>

      <section>
        <h2>Tourist information and facilities</h2>
        <p>
          Visitor services, ATMs, pharmacies, and cafés cluster around the town
          centre and harbour. Restrooms and shelter are available in shopping
          areas. Most excursion operators meet guests at signed locations near
          the harbour — check your voucher for the exact meeting point.
        </p>
      </section>

      <section>
        <h2>Local transport</h2>
        <p>
          Molde&apos;s centre is compact and walkable. Coach tours to the Atlantic
          Ocean Road, Bud, and coastal villages depart from harbour pickups.
          Taxis are available near cruise berths on arrival days. Local buses
          serve outlying areas but are rarely needed on a short port call.
        </p>
      </section>

      <section>
        <h2>Currency and payments</h2>
        <p>
          Norway uses Norwegian kroner (NOK). Contactless cards are accepted
          almost everywhere. Some smaller stalls may prefer cash — withdraw kroner
          from ATMs in the town centre if needed.
        </p>
      </section>

      <section>
        <h2>Weather on cruise days</h2>
        <p>
          Coastal Molde can be mild in summer but changeable year-round. Pack a
          light rain layer and windproof jacket — Mount Varden and the Atlantic
          Ocean Road are exposed to Atlantic weather. Clear days reward early
          disembarkation with the best panorama photography.
        </p>
      </section>

      <section>
        <h2>Cruise day tips</h2>
        <ul>
          <li>Disembark as early as your cruise line allows on busy port days</li>
          <li>Pre-book Atlantic Ocean Road tours — coastal drives fill on multi-ship days</li>
          <li>Wear sturdy shoes for Varden paths and harbour cobbles</li>
          <li>Monitor your cruise app for all-aboard updates throughout the day</li>
          <li>
            Use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> to match activities
            to your hours ashore
          </li>
        </ul>
      </section>
    </ContentPage>
  );
}
