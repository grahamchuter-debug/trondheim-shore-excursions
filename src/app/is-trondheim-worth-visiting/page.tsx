import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Trondheim Worth Visiting for Cruise Passengers?",
  description:
    "Honest guide for cruise guests: is Trondheim worth visiting? Nidaros Cathedral, Bakklandet, colourful wharves, walkable historic centre, riverfront and harbour, and how Trondheim differs from fjord scenery ports.",
  path: "/is-trondheim-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Is Trondheim Worth Visiting?" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Trondheim port guide", href: "/trondheim-port-guide" },
  { label: "One day in Trondheim", href: "/one-day-in-trondheim" },
] as const;

const faqs = [
  {
    question: "Is Trondheim worth it for a short cruise port call?",
    answer:
      "Yes if you have at least two to three hours ashore. The city walk to Nidaros Cathedral and Bakklandet delivers authentic historic atmosphere quickly. With four or more hours, add waterfront touring or a nature hike.",
  },
  {
    question: "Why do cruise passengers love Trondheim?",
    answer:
      "Trondheim combines a walkable historic centre, Norway's national cathedral, colourful wooden houses, riverfront wharves, and cultural depth in one accessible city port, without tender boats or long coach transfers.",
  },
  {
    question: "How is Trondheim different from Norway's fjord ports?",
    answer:
      "Fjord ports like Geiranger and Flam emphasise dramatic mountain scenery and tender logistics. Trondheim is a proper historic city with urban culture, cathedral heritage, and riverfront charm rather than glacier-and-waterfall spectacle.",
  },
  {
    question: "When is Trondheim not worth leaving the ship?",
    answer:
      "If your port time is under two hours, weather is severe, or you have mobility limits without a suitable tour, staying aboard may be safer. Very tight schedules rarely fit nature hikes comfortably.",
  },
  {
    question: "Is Trondheim crowded when cruise ships visit?",
    answer:
      "Summer can be busy when multiple large ships call the same day. Go ashore early, pre-book excursions, and use our port guide to avoid peak queues near Nidaros Cathedral on warm weekends.",
  },
] as const;

export default function IsTrondheimWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Trondheim Worth Visiting?"
      lead="An honest look at whether Trondheim deserves your hours ashore, Nidaros Cathedral and Bakklandet wooden houses, colourful wharves, walkable historic centre, riverfront and harbour, and what cruise passengers gain compared with Norway's fjord scenery ports."
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
          Trondheim is one of the strongest city ports on the central Norway
          cruise circuit. You get Norway&apos;s national cathedral, a walkable
          historic centre, Bakklandet wooden houses, colourful wharves, and
          riverfront atmosphere within easy reach of most cruise berths. For most
          guests, going ashore is worthwhile.
        </p>
      </section>

      <section>
        <h2>Nidaros Cathedral</h2>
        <p>
          Nidaros Cathedral alone justifies a Trondheim port call for many
          passengers. The Gothic west front, pilgrimage history, and royal
          connections make this Norway&apos;s most significant religious
          landmark. Even exterior viewing delivers a memorable cultural moment
          that fjord ports cannot replicate.
        </p>
      </section>

      <section>
        <h2>Bakklandet and the Old Town Bridge</h2>
        <p>
          Crossing Gamle Bybro into Bakklandet feels like stepping into a
          postcard. Colourful wooden houses climb the hillside above the Nidelva,
          and cobbled lanes offer cosy café culture. This is city-break Norway at
          its finest, premium but friendly, historic and walkable.
        </p>
      </section>

      <section>
        <h2>Colourful wharves and riverfront</h2>
        <p>
          Trondheim&apos;s historical wharves along the Nidelva preserve
          warehouse architecture in vivid facades that reflect in the river.
          The waterfront delivers photo opportunities and harbour atmosphere
          without the coach transfers required at many scenic fjord ports.
        </p>
      </section>

      <section>
        <h2>Walkable historic centre</h2>
        <p>
          Unlike remote tender ports, Trondheim puts the main square, Royal
          Residence, cathedral, bridge, and wharves within walking distance of
          most cruise berths. That walkability makes short port calls productive
          and long port calls relaxed.
        </p>
      </section>

      <section>
        <h2>Riverfront and harbour</h2>
        <p>
          The Nidelva river and Trondheim harbour connect old and new waterfront
          districts. Solsiden&apos;s marina atmosphere and modern harbour
          development sit alongside centuries-old trading heritage, giving
          Trondheim a layered maritime character.
        </p>
      </section>

      <section>
        <h2>How Trondheim differs from fjord scenery ports</h2>
        <p>
          Geiranger, Flam, Olden, and Eidfjord sell dramatic natural spectacle:
          waterfalls, glaciers, and narrow fjords. Trondheim sells culture,
          history, and urban charm. If your itinerary is heavy on fjord scenery,
          Trondheim provides welcome variety, a proper Norwegian city with
          cathedral grandeur and wooden-house neighbourhoods rather than another
          mountain viewpoint.
        </p>
        <p>
          Honningsvåg and Molde offer different flavours again: Arctic gateway
          and Atlantic coast respectively. Trondheim occupies the historic
          city-break niche that complements those experiences.
        </p>
      </section>

      <section>
        <h2>Plan your Trondheim port day</h2>
        <p>
          Browse our{" "}
          <Link href="/excursions" className="content-link">
            shore excursions
          </Link>
          , read the{" "}
          <Link href="/trondheim-port-guide" className="content-link">
            port guide
          </Link>
          , and use the{" "}
          <Link href="/#planner" className="content-link">
            Cruise Smart Planner
          </Link>{" "}
          to match tours to your ship&apos;s timetable.
        </p>
      </section>
    </ContentPage>
  );
}
