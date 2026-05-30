import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Kristiansand Worth Visiting for Cruise Passengers?",
  description:
    "Honest guide for cruise guests: is Kristiansand worth visiting? Easy walking from cruise port, fish market, fortress, beaches, Baneheia nature, and why Kristiansand differs from Norway's fjord ports.",
  path: "/is-kristiansand-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Is Kristiansand Worth Visiting?" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Kristiansand port guide", href: "/kristiansand-port-guide" },
  { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
] as const;

const faqs = [
  {
    question: "Is Kristiansand worth it for a short cruise port call?",
    answer:
      "Yes if you have at least two to three hours ashore. The harbour walk to Fiskebrygga and Christiansholm Fortress delivers authentic coastal atmosphere quickly. With four or more hours, add highlights touring or Baneheia nature trails.",
  },
  {
    question: "Why do cruise passengers love Kristiansand?",
    answer:
      "Kristiansand combines a walkable harbour, fish market culture, city beach, historic fortress, and forest trails above town in one accessible southern Norway port, without tender boats or long coach transfers.",
  },
  {
    question: "How is Kristiansand different from Norway's fjord ports?",
    answer:
      "Fjord ports like Geiranger and Flam emphasise dramatic mountain scenery and tender logistics. Kristiansand is a proper coastal city with urban beaches, harbour dining, and easy walking from the cruise pier.",
  },
  {
    question: "When is Kristiansand not worth leaving the ship?",
    answer:
      "If your port time is under two hours, weather is severe, or you have mobility limits without a suitable tour, staying aboard may be safer. Very tight schedules rarely fit nature trekking comfortably.",
  },
  {
    question: "Is Kristiansand crowded when cruise ships visit?",
    answer:
      "Summer can be busy when multiple large ships call the same day. Go ashore early, pre-book excursions, and use our port guide to avoid peak queues near Fiskebrygga on warm weekends.",
  },
] as const;

export default function IsKristiansandWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Kristiansand Worth Visiting?"
      lead="An honest look at whether Kristiansand deserves your hours ashore, easy walking from the cruise port, fish market and harbourfront culture, fortress and beaches, Baneheia nature, and what cruise passengers gain compared with Norway's fjord ports."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Short answer: yes for most cruise itineraries</h2>
        <p>
          Kristiansand is one of the strongest city ports on the southern
          Norway cruise circuit. You get a proper harbourfront with fish market
          atmosphere, a historic fortress, a sandy city beach, and forest trails
          above town, all within walking distance of most cruise berths. For most
          guests, going ashore is worthwhile.
        </p>
      </section>

      <section>
        <h2>Easy walking from the cruise port</h2>
        <p>
          Unlike remote fjord tenders, Kristiansand&apos;s cruise terminal sits
          minutes from Fiskebrygga, Christiansholm Fortress, and Bystranda
          beach. You can have a meaningful port experience without booking a
          coach tour, a major advantage for independent travellers and short
          port calls.
        </p>
      </section>

      <section>
        <h2>Fish market and harbourfront</h2>
        <p>
          Fiskebrygga delivers the seafood market bustle, canal-side
          restaurants, and marina views that define southern Norway&apos;s
          coastal character. It is photogenic, lively in summer, and reachable on
          foot from the gangway.
        </p>
      </section>

      <section>
        <h2>Fortress and waterfront</h2>
        <p>
          Christiansholm Fortress adds historic depth to the harbour walk. The
          17th-century circular fort, waterfront promenade, and views toward
          Odderøya peninsula create a compact sightseeing loop that suits all
          ages.
        </p>
      </section>

      <section>
        <h2>Beaches</h2>
        <p>
          Bystranda is a rare asset for a cruise port: a Blue Flag sandy beach
          in the city centre with shallow water and promenade facilities. Few
          Norwegian ports offer this combination of urban beach and walkable
          harbour culture.
        </p>
      </section>

      <section>
        <h2>Baneheia and Ravnedalen nature</h2>
        <p>
          Active guests can escape the harbour entirely on the{" "}
          <Link href="/excursions/baneheia-ravnedalen-nature-trek">
            Baneheia and Ravnedalen Nature Trek
          </Link>
          . Forest trails, lakes, and viewpoints above the city deliver a green
          contrast to harbour-only sightseeing, unique among southern Norway
          cruise ports.
        </p>
      </section>

      <section>
        <h2>Why Kristiansand is different from fjord ports</h2>
        <p>
          Geiranger, Flam, and Olden sell dramatic fjord and glacier scenery
          with tender logistics and long coach drives. Kristiansand sells urban
          coastal life: fish markets, city beaches, renaissance town grids, and
          relaxed city-break pacing. If your itinerary is fjord-heavy, Kristiansand
          offers welcome variety.
        </p>
      </section>

      <section>
        <h2>Match expectations to your port length</h2>
        <p>
          Under three hours:{" "}
          <Link href="/excursions/harbour-fortress-fish-market">
            harbour and fish market walk
          </Link>
          . Three to four hours:{" "}
          <Link href="/excursions/kristiansand-highlights">
            Kristiansand Highlights
          </Link>{" "}
          or{" "}
          <Link href="/excursions/family-beach-day">Family and Beach Day</Link>
          . Four to six hours:{" "}
          <Link href="/excursions/baneheia-ravnedalen-nature-trek">
            Baneheia and Ravnedalen
          </Link>
          . Six or more hours: combine highlights with nature or relaxed harbour
          time.
        </p>
      </section>

      <section>
        <h2>When to reconsider going ashore</h2>
        <p>
          Extremely short port times under two hours, severe weather, or mobility
          constraints without a suitable tour can make staying aboard the safer
          choice. The{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> helps you decide
          honestly based on hours ashore, not marketing hype.
        </p>
      </section>
    </ContentPage>
  );
}
