import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Trondheim on a Cruise",
  description:
    "Best time to visit Trondheim for cruise passengers: seasonal weather, daylight hours, summer crowds, riverfront conditions, and month-by-month advice for central Norway cruise sailings.",
  path: "/best-time-to-visit-trondheim",
  ogImage: siteImages.bestTime,
  ogImageAlt: imageAlts.bestTime,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Trondheim" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Trondheim port guide", href: "/trondheim-port-guide" },
  {
    label: "Is Trondheim worth visiting?",
    href: "/is-trondheim-worth-visiting",
  },
] as const;

const faqs = [
  {
    question: "What is the best month to visit Trondheim on a cruise?",
    answer:
      "June through August offers the warmest temperatures, longest daylight, and best conditions for walking tours. May and September can be quieter with fewer ships but cooler, changeable Trondheimsfjord weather.",
  },
  {
    question: "Is Trondheim pleasant for walking tours outside summer?",
    answer:
      "May and September walking tours work well with layers. Winter cruise calls are less common but cathedral and wharf sightseeing remains rewarding with warm clothing.",
  },
  {
    question: "When is Trondheim busiest for cruise passengers?",
    answer:
      "July and early August see peak cruise traffic. Pre-book excursions and disembark early on multi-ship days.",
  },
  {
    question: "Is Trondheim weather predictable in summer?",
    answer:
      "No. Central Norway weather changes quickly. Summer days can be warm and sunny along the Nidelva or breezy and overcast within hours. Pack layers regardless of forecast.",
  },
] as const;

export default function BestTimeToVisitTrondheimPage() {
  return (
    <ContentPage
      title="Best Time to Visit Trondheim"
      lead="Seasonal advice for cruise passengers calling at Trondheim, when riverfront walks shine, how historic centre life peaks in summer, and what to expect from weather and crowds across the Norway cruise season."
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
          Summer is the sweet spot for Trondheim cruise calls. Long daylight
          hours suit city walks, Bakklandet exploring, and waterfront photo
          routes. Cafés along the Nidelva spill onto terraces, and walking
          tours run at full schedule. Expect the largest crowds in July when
          multiple ships may share the port.
        </p>
      </section>

      <section>
        <h2>Shoulder season: May and September</h2>
        <p>
          May and September offer quieter streets and fewer competing excursion
          groups. Temperatures are cooler, and rain is more frequent, but
          Nidaros Cathedral and Bakklandet remain compelling. Pack waterproof
          layers and book walking tours in advance on the days your ship calls.
        </p>
      </section>

      <section>
        <h2>Month-by-month overview</h2>
        <ul>
          <li>
            <strong>May:</strong> Spring awakening, fewer ships, variable weather,
            good for city walks with layers
          </li>
          <li>
            <strong>June:</strong> Long evenings, comfortable walking, rising cruise
            traffic
          </li>
          <li>
            <strong>July:</strong> Warmest month, peak crowds, book excursions early
          </li>
          <li>
            <strong>August:</strong> Still busy, excellent for waterfront and family
            tours
          </li>
          <li>
            <strong>September:</strong> Quieter port days, autumn light, cooler
            evenings
          </li>
        </ul>
      </section>

      <section>
        <h2>Weather and what to pack</h2>
        <p>
          Trondheim sits at the head of the Trondheimsfjord where coastal breezes
          meet inland weather patterns. Comfortable walking shoes for cobbled
          Bakklandet streets, a waterproof jacket, and layers you can add or
          remove are essential regardless of season.
        </p>
      </section>

      <section>
        <h2>Matching season to excursions</h2>
        <p>
          Summer suits all featured tours including the Nature and City Hike.
          Shoulder season favours the{" "}
          <Link href="/excursions/trondheim-city-walk" className="content-link">
            City Walk
          </Link>{" "}
          and{" "}
          <Link
            href="/excursions/trondheim-waterfront-tour"
            className="content-link"
          >
            Waterfront tour
          </Link>
          . Private custom tours flex across seasons. Use the{" "}
          <Link href="/#planner" className="content-link">
            Cruise Smart Planner
          </Link>{" "}
          when your ship&apos;s timetable is confirmed.
        </p>
      </section>
    </ContentPage>
  );
}
