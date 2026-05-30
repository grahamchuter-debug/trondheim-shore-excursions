import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Kristiansand Cruise Port Guide",
  description:
    "Kristiansand cruise port guide for passengers: terminal location, walking distance to town, Fiskebrygga fish market, Christiansholm Fortress, Bystranda beach, Kvadraturen, transport, weather, and return-to-ship tips.",
  path: "/kristiansand-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Kristiansand Port Guide" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
  {
    label: "Is Kristiansand worth visiting?",
    href: "/is-kristiansand-worth-visiting",
  },
] as const;

const faqs = [
  {
    question: "How far is the Kristiansand cruise port from the town centre?",
    answer:
      "Most cruise berths are 5 to 15 minutes on foot from Fiskebrygga fish market, Christiansholm Fortress, Bystranda beach, and the Kvadraturen town centre. Kristiansand is one of Norway's most walkable cruise ports.",
  },
  {
    question: "Where do cruise ships dock in Kristiansand?",
    answer:
      "Ships typically berth at the main cruise terminal and harbour facilities close to the city centre and Kilden Performing Arts Centre. Confirm your exact pier on the ship's app the night before arrival.",
  },
  {
    question: "What currency is used in Kristiansand?",
    answer:
      "Norwegian kroner (NOK). Cards are widely accepted, but carry some cash for small purchases and market stalls at Fiskebrygga.",
  },
  {
    question: "How early should cruise passengers return to the ship in Kristiansand?",
    answer:
      "Plan to be back at the gangway at least 30 to 45 minutes before all aboard. Even on walkable port days, queues at the gangway can compress that buffer on peak summer days.",
  },
] as const;

export default function KristiansandPortGuidePage() {
  return (
    <ContentPage
      title="Kristiansand Port Guide for Cruise Passengers"
      lead="Everything you need to navigate Kristiansand cruise port, terminal locations, walking routes, harbour facilities, and how to reach shore excursions without losing precious port time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Kristiansand cruise port location</h2>
        <p>
          Kristiansand sits on Norway&apos;s southern Skagerrak coast in Agder
          county. Cruise ships berth at the main harbour facilities close to the
          city centre, Kilden Performing Arts Centre, and the walkable
          harbourfront. Large vessels dock within minutes of Fiskebrygga fish
          market and the waterfront promenade.
        </p>
        <p>
          Confirm your exact berth on the ship&apos;s app the night before
          arrival. Assignments can change when several vessels share the port on
          the same day.
        </p>
      </section>

      <section>
        <h2>Walking distance to town</h2>
        <ul>
          <li>
            <strong>Fiskebrygga fish market:</strong> often 5 to 10 minutes on
            foot from cruise berths
          </li>
          <li>
            <strong>Christiansholm Fortress:</strong> typically 10 to 15 minutes
            along the harbour promenade
          </li>
          <li>
            <strong>Bystranda city beach:</strong> about 10 to 15 minutes from
            main cruise piers
          </li>
          <li>
            <strong>Kvadraturen town centre:</strong> roughly 10 to 20 minutes
            from the harbour area
          </li>
          <li>
            <strong>Kilden Performing Arts Centre:</strong> adjacent to the
            cruise terminal area
          </li>
          <li>
            <strong>Baneheia and Ravnedalen:</strong> not walkable from pier on a
            short call, use guided tours or taxis
          </li>
        </ul>
      </section>

      <section>
        <h2>Fiskebrygga fish market</h2>
        <p>
          Fiskebrygga is Kristiansand&apos;s signature waterfront district,
          canal-side fish market stalls, seafood restaurants, and guest berths
          that capture southern Norway&apos;s coastal dining culture. It is the
          natural first stop for most cruise passengers and anchors several
          featured shore excursions on this site.
        </p>
      </section>

      <section>
        <h2>Christiansholm Fortress</h2>
        <p>
          Christiansholm Fortress guards the eastern harbour entrance, a
          well-preserved circular fort from 1672 that is reachable on foot from
          the cruise pier. The exterior and harbour setting are free to explore;
          interior access varies by season.
        </p>
      </section>

      <section>
        <h2>Bystranda beach</h2>
        <p>
          Bystranda is Kristiansand&apos;s Blue Flag city beach with sandy shore,
          shallow water, and promenade facilities. The Aquarama swimming complex
          sits nearby for weather backup. Families often prioritise beach time
          on warm summer port days.
        </p>
      </section>

      <section>
        <h2>Kvadraturen town centre</h2>
        <p>
          The Kvadraturen is Kristiansand&apos;s renaissance grid laid out by
          King Christian IV, with Domkirke cathedral, Markens Gate shopping
          street, and Posebyen&apos;s white wooden houses. It connects easily to
          the harbourfront on foot.
        </p>
      </section>

      <section>
        <h2>Local transport</h2>
        <p>
          Kristiansand&apos;s centre is compact and walkable. Coach tours to
          Høllen, Baneheia, and Ravnedalen depart from harbour pickups. Taxis
          are available near cruise berths on arrival days. Local buses serve
          outlying areas but are rarely needed on a short port call.
        </p>
      </section>

      <section>
        <h2>Weather and clothing advice</h2>
        <p>
          Southern Norway can be milder than fjord ports but still changeable.
          Pack a light rain layer and comfortable walking shoes for harbour
          cobbles and promenade paths. Summer days may be warm enough for
          Bystranda beach; spring and autumn calls need extra layers for sea
          breezes along the waterfront.
        </p>
      </section>

      <section>
        <h2>Return-to-ship buffer advice</h2>
        <p>
          Even in a walkable port, build a 30 to 45 minute buffer before all
          aboard. Gangway queues, last-minute shopping in the Kvadraturen, and
          underestimating walking time back from Baneheia are common reasons
          passengers cut it close. Use the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> to set a realistic
          return time based on your ship&apos;s departure.
        </p>
      </section>

      <section>
        <h2>Cruise day tips</h2>
        <ul>
          <li>Disembark as early as your cruise line allows on busy port days</li>
          <li>Pre-book excursions on peak summer days when multiple ships call</li>
          <li>Wear sturdy shoes for harbour cobbles and forest trails if touring Baneheia</li>
          <li>Monitor your cruise app for all-aboard updates throughout the day</li>
          <li>
            Use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> to match
            activities to your hours ashore
          </li>
        </ul>
      </section>
    </ContentPage>
  );
}
