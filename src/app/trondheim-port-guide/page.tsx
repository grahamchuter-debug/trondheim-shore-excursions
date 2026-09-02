import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Trondheim Cruise Port Guide",
  description:
    "Trondheim cruise port guide for passengers: terminal location, walking distance to city centre, Nidaros Cathedral, Bakklandet, Old Town Bridge, historical wharves, Royal Residence, transport, weather, and return-to-ship tips.",
  path: "/trondheim-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Trondheim Port Guide" },
] as const;

const relatedLinks = [
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Trondheim", href: "/one-day-in-trondheim" },
  {
    label: "Is Trondheim worth visiting?",
    href: "/is-trondheim-worth-visiting",
  },
] as const;

const faqs = [
  {
    question: "How far is the Trondheim cruise port from the city centre?",
    answer:
      "Most cruise berths are 10 to 20 minutes on foot from Nidaros Cathedral, the main square, and the Nidelva riverfront. Some piers may require a short shuttle or taxi to the historic centre.",
  },
  {
    question: "Where do cruise ships dock in Trondheim?",
    answer:
      "Ships typically berth at Trondheim harbour facilities including the cruise terminal area. Confirm your exact pier on the ship's app the night before arrival.",
  },
  {
    question: "What currency is used in Trondheim?",
    answer:
      "Norwegian kroner (NOK). Cards are widely accepted throughout the city centre, Bakklandet, and waterfront cafés.",
  },
  {
    question: "How early should cruise passengers return to the ship in Trondheim?",
    answer:
      "Plan to be back at the gangway at least 30 to 45 minutes before all aboard. Even on walkable port days, queues at the gangway can compress that buffer on peak summer days.",
  },
] as const;

export default function TrondheimPortGuidePage() {
  return (
    <ContentPage
      title="Trondheim Port Guide for Cruise Passengers"
      lead="Everything you need to navigate Trondheim cruise port, terminal locations, walking routes to the historic centre, and how to reach shore excursions without losing precious port time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Trondheim cruise port location</h2>
        <p>
          Trondheim sits at the head of the Trondheimsfjord in central Norway.
          Cruise ships berth at harbour facilities close to the city, with many
          passengers reaching Nidaros Cathedral and the Nidelva riverfront on
          foot or via a short shuttle. Trondheim is Norway&apos;s historic
          capital and one of the strongest city-break ports on the cruise circuit.
        </p>
        <p>
          Confirm your exact berth on the ship&apos;s app the night before
          arrival. Assignments can change when several vessels share the port on
          the same day.
        </p>
      </section>

      <section>
        <h2>Walking distance to city centre</h2>
        <ul>
          <li>
            <strong>Nidaros Cathedral:</strong> often 10 to 15 minutes on foot
            from main cruise berths
          </li>
          <li>
            <strong>Main square / Torvet:</strong> typically 10 to 20 minutes
            through the historic centre
          </li>
          <li>
            <strong>Gamle Bybro Old Town Bridge:</strong> about 15 to 20 minutes
            from harbour piers
          </li>
          <li>
            <strong>Bakklandet:</strong> cross the Old Town Bridge, then 5 to 10
            minutes into the wooden-house district
          </li>
          <li>
            <strong>Historical wharves:</strong> along the Nidelva, roughly 15
            to 25 minutes from cruise terminals
          </li>
          <li>
            <strong>Royal Residence / Stiftsgården:</strong> on Munkegata near
            the main square, central to most walking routes
          </li>
        </ul>
      </section>

      <section>
        <h2>Nidaros Cathedral</h2>
        <p>
          Nidaros Cathedral is Norway&apos;s national shrine and the defining
          landmark of any Trondheim port day. The Gothic west front dominates
          the skyline, and guided tours typically include exterior viewing and
          commentary on Viking kings, medieval saints, and pilgrimage history.
        </p>
        <p>
          Interior visits depend on service times and operator arrangements.
          Allow time for photos of the west front and surrounding churchyard
          before crossing toward the riverfront.
        </p>
      </section>

      <section>
        <h2>Bakklandet and the Old Town Bridge</h2>
        <p>
          Gamle Bybro, the Old Town Bridge with its distinctive red gates, frames
          classic Trondheim views across the Nidelva toward Bakklandet. The
          Bakklandet district climbs the hillside with colourful wooden houses,
          cosy cafés, and cobbled lanes that feel worlds away from fjord scenery
          ports.
        </p>
        <p>
          The{" "}
          <Link href="/excursions/trondheim-city-walk" className="content-link">
            Trondheim City Walk
          </Link>{" "}
          covers both landmarks in approximately two hours.
        </p>
      </section>

      <section>
        <h2>Historical wharves and riverfront</h2>
        <p>
          Trondheim&apos;s wharves along the Nidelva preserve warehouse
          architecture from the city&apos;s trading heyday. Colourful facades
          reflect in the river, and bridges connect both banks of the historic
          centre. The{" "}
          <Link
            href="/excursions/trondheim-waterfront-tour"
            className="content-link"
          >
            Waterfront Guided Tour
          </Link>{" "}
          follows this photo-friendly route.
        </p>
      </section>

      <section>
        <h2>Royal Residence / Stiftsgården</h2>
        <p>
          Stiftsgården on Munkegata is one of the largest wooden buildings in
          Scandinavia and serves as the Royal Residence when the Norwegian royal
          family visits Trondheim. The yellow façade anchors the main square area
          and appears on most city walking routes.
        </p>
      </section>

      <section>
        <h2>Local transport</h2>
        <p>
          Trondheim city centre is compact and walkable for most cruise
          passengers. Local buses serve the wider city if your berth is farther
          from the historic centre. Taxis are available at the cruise terminal
          on busy turnaround days.
        </p>
        <ul>
          <li>Walking is the default for cathedral, Bakklandet, and wharf touring</li>
          <li>Shuttle buses may operate from distant piers on large-ship days</li>
          <li>Taxis suit passengers with mobility limits or tight return windows</li>
        </ul>
      </section>

      <section>
        <h2>Weather and clothing advice</h2>
        <p>
          Trondheim weather is changeable year-round. Summer days can be warm
          and sunny along the Nidelva, while rain and cool breezes arrive
          quickly. Pack waterproof layers, comfortable walking shoes for cobbled
          streets, and a light jacket even in July.
        </p>
      </section>

      <section>
        <h2>Return-to-ship buffer advice</h2>
        <p>
          Trondheim feels relaxed because the historic centre is walkable, but
          that can lull passengers into cutting margins too fine. Aim to be at
          the gangway 45 minutes before your ship&apos;s published departure.
          Use the{" "}
          <Link href="/#planner" className="content-link">
            Cruise Smart Planner
          </Link>{" "}
          to match excursions to your actual hours ashore.
        </p>
      </section>
    </ContentPage>
  );
}
