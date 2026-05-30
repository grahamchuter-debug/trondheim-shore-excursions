import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Molde on a Cruise",
  description:
    "Best time to visit Molde for cruise passengers: seasonal weather, Atlantic Ocean Road conditions, rose gardens, summer crowds, and month-by-month advice for Norway coastal sailings.",
  path: "/best-time-to-visit-molde",
  ogImage: siteImages.bestTime,
  ogImageAlt: imageAlts.bestTime,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Molde" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Molde port guide", href: "/molde-port-guide" },
  { label: "Is Molde worth visiting?", href: "/is-molde-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is the best month to visit Molde on a cruise?",
    answer:
      "June through August offers the longest daylight, warmest temperatures, and full excursion schedules. May and September can be quieter with fewer ships but cooler, changeable Atlantic weather.",
  },
  {
    question: "Does the Atlantic Ocean Road look different by season?",
    answer:
      "Summer brings long daylight and calmer sightseeing conditions. Autumn adds moody skies for photography. Winter sailings are less common but can offer dramatic storm seas when tours operate.",
  },
  {
    question: "When is Molde busiest for cruise passengers?",
    answer:
      "July and early August see peak cruise traffic. Pre-book Atlantic Ocean Road tours and disembark early on multi-ship days.",
  },
  {
    question: "Is Molde weather predictable in summer?",
    answer:
      "No — Atlantic coast weather changes quickly. Summer days can be clear and mild or windy and wet within hours. Pack waterproof layers regardless of forecast.",
  },
] as const;

export default function BestTimeToVisitMoldePage() {
  return (
    <ContentPage
      title="Best Time to Visit Molde"
      lead="Seasonal advice for cruise passengers calling at Molde — when the Atlantic Ocean Road is at its best, how City of Roses gardens peak, and what to expect from weather and crowds across the Norway cruise season."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Peak season: June to August</h2>
        <p>
          Most Norway cruise itineraries call at Molde between June and August.
          Long daylight hours, rose gardens in bloom, and full excursion schedules
          make this the default best time for first-time visitors. Expect peak
          crowds in July — pre-book{" "}
          <Link href="/excursions/atlantic-ocean-road-bud">
            Atlantic Ocean Road and Bud tours
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Shoulder season: May and September</h2>
        <p>
          Shoulder months offer fewer ships and softer light for coastal
          photography, but cooler temperatures and more frequent wind on exposed
          bridges. Excursions generally still operate — confirm availability when
          booking early- or late-season sailings.
        </p>
      </section>

      <section>
        <h2>Weather on the Atlantic coast and Mount Varden</h2>
        <p>
          Molde faces open Atlantic influence — mist, wind, and passing showers
          are common even in summer. Clear conditions deliver spectacular
          Romsdal panoramas from Mount Varden; overcast skies can still produce
          atmospheric fishing village photography at Bud.
        </p>
      </section>

      <section>
        <h2>Planning tips by season</h2>
        <ul>
          <li>
            <strong>Summer:</strong> Book excursions early; disembark promptly on
            multi-ship days
          </li>
          <li>
            <strong>Shoulder:</strong> Pack extra layers; have realistic coastal
            visibility expectations
          </li>
          <li>
            <strong>All seasons:</strong> Waterproof jacket and comfortable
            walking shoes are essential
          </li>
        </ul>
      </section>

      <section>
        <h2>Match timing to your port call</h2>
        <p>
          Season matters less than your hours ashore. Use the{" "}
          <Link href="/#planner">Molde Cruise Smart Planner</Link> to see which
          excursions fit your ship&apos;s schedule regardless of month.
        </p>
      </section>
    </ContentPage>
  );
}
