import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Molde Worth Visiting for Cruise Passengers?",
  description:
    "Honest guide for cruise guests: is Molde worth visiting? Atlantic Ocean Road, Bud fishing village, Mount Varden panoramas, walkability, photography, and when to stay on board.",
  path: "/is-molde-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Is Molde Worth Visiting?" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Molde port guide", href: "/molde-port-guide" },
  { label: "One day in Molde", href: "/one-day-in-molde" },
] as const;

const faqs = [
  {
    question: "Is Molde worth it for a short cruise port call?",
    answer:
      "Yes if you have at least three to four hours ashore. Mount Varden and a harbour walk deliver authentic coastal atmosphere quickly. With six or more hours, add the Atlantic Ocean Road for the full Molde experience.",
  },
  {
    question: "Why do cruise passengers love Molde?",
    answer:
      "Molde combines the famous Atlantic Ocean Road, historic Bud, and a sweeping Romsdal Alps panorama from Mount Varden in one accessible cruise port.",
  },
  {
    question: "Is Molde good for photography?",
    answer:
      "Excellent. Atlantic Ocean Road bridges, fishing villages, and Mount Varden outlooks provide strong coastal compositions in any light.",
  },
  {
    question: "When is Molde not worth leaving the ship?",
    answer:
      "If your port time is under three hours, weather is severe, or you have mobility limits without a suitable tour, staying aboard may be safer. Very tight schedules rarely fit Atlantic Ocean Road touring comfortably.",
  },
  {
    question: "Is Molde crowded when cruise ships visit?",
    answer:
      "Summer can be busy when multiple large ships call the same day. Go ashore early, pre-book excursions, and use our port guide to avoid peak queues near coaches and the cable car.",
  },
] as const;

export default function IsMoldeWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Molde Worth Visiting?"
      lead="An honest look at whether Molde deserves your hours ashore — Atlantic Ocean Road scenery, Bud fishing village heritage, Mount Varden panoramas, walkability, and what cruise passengers gain on different port lengths."
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
          Molde is one of the strongest coastal ports on the Norwegian cruise
          circuit. You get the Atlantic Ocean Road within reach, a historic
          fishing village at Bud, and a signature mountain panorama above the
          City of Roses — without the complexity of a remote fjord tender port.
          For most guests, going ashore is worthwhile.
        </p>
      </section>

      <section>
        <h2>Why cruise passengers love Molde</h2>
        <ul>
          <li>Walkable harbour with attractions close to cruise berths</li>
          <li>Atlantic Ocean Road — one of Norway&apos;s most iconic coastal drives</li>
          <li>Mount Varden viewpoint with Romsdal Alps panorama</li>
          <li>Bud fishing village atmosphere and maritime heritage</li>
          <li>Elegant town character as Norway&apos;s City of Roses</li>
        </ul>
      </section>

      <section>
        <h2>Match expectations to your port length</h2>
        <p>
          Under four hours: choose{" "}
          <Link href="/excursions/molde-city-varden-viewpoint">
            Mount Varden and town touring
          </Link>
          . Four to six hours:{" "}
          <Link href="/excursions/atlantic-ocean-road-bud">
            Atlantic Ocean Road and Bud
          </Link>
          . Six or more hours: add{" "}
          <Link href="/excursions/private-atlantic-ocean-road-bud">
            private coastal touring
          </Link>{" "}
          or the{" "}
          <Link href="/excursions/atlantic-coast-fishing-village">
            fishing village experience
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>When to reconsider going ashore</h2>
        <p>
          Extremely short port times, severe weather on exposed coastal drives,
          or mobility constraints without a suitable tour can make staying aboard
          the safer choice. The{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> helps you decide
          honestly based on hours ashore, not marketing hype.
        </p>
      </section>
    </ContentPage>
  );
}
