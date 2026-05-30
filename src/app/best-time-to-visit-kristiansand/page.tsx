import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Kristiansand on a Cruise",
  description:
    "Best time to visit Kristiansand for cruise passengers: seasonal weather, beach conditions, harbour events, summer crowds, and month-by-month advice for southern Norway coastal sailings.",
  path: "/best-time-to-visit-kristiansand",
  ogImage: siteImages.bestTime,
  ogImageAlt: imageAlts.bestTime,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Kristiansand" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Kristiansand port guide", href: "/kristiansand-port-guide" },
  {
    label: "Is Kristiansand worth visiting?",
    href: "/is-kristiansand-worth-visiting",
  },
] as const;

const faqs = [
  {
    question: "What is the best month to visit Kristiansand on a cruise?",
    answer:
      "June through August offers the warmest temperatures, longest daylight, and best beach conditions at Bystranda. May and September can be quieter with fewer ships but cooler, changeable Skagerrak weather.",
  },
  {
    question: "Is Bystranda beach usable outside summer?",
    answer:
      "Bystranda is accessible year-round, but swimming and beach-focused tours are most rewarding May through August. Shoulder-season calls suit harbour walks and highlights touring instead.",
  },
  {
    question: "When is Kristiansand busiest for cruise passengers?",
    answer:
      "July and early August see peak cruise traffic. Pre-book excursions and disembark early on multi-ship days.",
  },
  {
    question: "Is Kristiansand weather predictable in summer?",
    answer:
      "No, Skagerrak coast weather changes quickly. Summer days can be warm and sunny or breezy and overcast within hours. Pack layers regardless of forecast.",
  },
] as const;

export default function BestTimeToVisitKristiansandPage() {
  return (
    <ContentPage
      title="Best Time to Visit Kristiansand"
      lead="Seasonal advice for cruise passengers calling at Kristiansand, when Bystranda beach shines, how harbour life peaks in summer, and what to expect from weather and crowds across the Norway cruise season."
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
          Most Norway cruise itineraries call at Kristiansand between June and
          August. Long daylight hours, warm harbour life at Fiskebrygga, and
          swimmable conditions at Bystranda make this the default best time for
          first-time visitors. Expect peak crowds in July, pre-book{" "}
          <Link href="/excursions/kristiansand-highlights">
            Kristiansand Highlights
          </Link>{" "}
          and{" "}
          <Link href="/excursions/family-beach-day">
            Family and Beach Day
          </Link>{" "}
          tours.
        </p>
      </section>

      <section>
        <h2>Shoulder season: May and September</h2>
        <p>
          Shoulder months offer fewer ships and softer light for harbour
          photography, but cooler temperatures and more frequent wind along the
          Skagerrak coast. Excursions generally still operate; confirm
          availability when booking early- or late-season sailings. Beach tours
          are less central, highlights and walking tours remain strong choices.
        </p>
      </section>

      <section>
        <h2>Weather on the Skagerrak coast</h2>
        <p>
          Kristiansand faces open sea influence from the Skagerrak. Summer can
          be pleasantly warm, but passing showers and sea breezes are common.
          Clear days reward harbour photography and Baneheia viewpoints;
          overcast skies still suit fish market walks and fortress exploring.
        </p>
      </section>

      <section>
        <h2>Forest trails and Baneheia by season</h2>
        <p>
          Baneheia and Ravnedalen are accessible May through September for most
          cruise calls. Spring brings fresh greenery; autumn adds colour to the
          woodland. Trail conditions can be damp after rain, wear appropriate
          footwear for the{" "}
          <Link href="/excursions/baneheia-ravnedalen-nature-trek">
            nature trek
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Planning tips by season</h2>
        <ul>
          <li>
            <strong>Summer:</strong> Book excursions early; pack swimwear for
            Bystranda; disembark promptly on multi-ship days
          </li>
          <li>
            <strong>Shoulder:</strong> Pack extra layers; focus on harbour walks
            and highlights over beach-heavy itineraries
          </li>
          <li>
            <strong>All seasons:</strong> Comfortable walking shoes and a light
            rain jacket are essential
          </li>
        </ul>
      </section>

      <section>
        <h2>Match timing to your port call</h2>
        <p>
          Season matters less than your hours ashore. Use the{" "}
          <Link href="/#planner">Kristiansand Cruise Smart Planner</Link> to see
          which excursions fit your ship&apos;s schedule regardless of month.
        </p>
      </section>
    </ContentPage>
  );
}
