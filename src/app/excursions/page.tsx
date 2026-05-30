import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import {
  kristiansandTourCards,
  kristiansandTourListItems,
} from "@/lib/kristiansand-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Kristiansand Excursions, All Shore Tours for Cruise Passengers",
  description:
    "Browse all Kristiansand shore excursions for cruise passengers: city highlights, Baneheia nature treks, harbour walks, fish market tours, and family beach days.",
  path: "/excursions",
  ogImage: siteImages.harbour,
  ogImageAlt: imageAlts.harbour,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Excursions" },
] as const;

const relatedLinks = [
  { label: "Kristiansand port guide", href: "/kristiansand-port-guide" },
  { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
  {
    label: "Is Kristiansand worth visiting?",
    href: "/is-kristiansand-worth-visiting",
  },
] as const;

const faqs = [
  {
    question: "What is the best Kristiansand excursion for first-time cruise visitors?",
    answer:
      "The Kristiansand Highlights tour is the main city-and-culture choice when you have three or more hours in port. For shorter calls, the Walking Exploration or Harbour, Fortress and Fish Market Walk fit comfortably within return-to-ship timings.",
  },
  {
    question: "How do I choose between Kristiansand shore excursions?",
    answer:
      "Match the tour to your hours ashore: harbour walks suit under-three-hour calls; highlights and family beach days suit 3 to 4 hours; Baneheia and Ravnedalen suits 4 to 6 hours. Use the Cruise Smart Planner on the homepage to compare options.",
  },
  {
    question: "Do Kristiansand excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in central Kristiansand near the harbour, cruise berths, or designated pickups, typically a short walk from most piers.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd data={[buildItemListSchema(kristiansandTourListItems)]} />
      <ContentPage
        title="Kristiansand Excursions"
        lead="Every cruise-friendly shore excursion in Kristiansand, city highlights, nature treks, harbour walks, fish market tours, and family beach days, with return-to-ship timing in mind."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing a Kristiansand tour?"
        ctaText="Use the Cruise Smart Planner on the homepage to match tours to your ship's timetable."
        ctaHref="/#planner"
        ctaButtonLabel="Open Cruise Smart Planner"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {kristiansandTourCards.map((tour) => (
                  <TourCard
                    key={tour.href}
                    href={tour.href}
                    image={tour.image}
                    imageAlt={tour.imageAlt}
                    title={tour.title}
                    description={tour.description}
                    accent={tour.accent}
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <section>
          <h2>Compare Kristiansand shore excursions</h2>
          <p>
            Each tour below is designed for cruise passengers calling at
            Kristiansand. Nature treks need the longest port window; harbour
            walks fit the shortest schedules. Family beach days suit relaxed
            pacing with children.
          </p>
          <p>
            For port-day planning tools and tier-based recommendations, use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> on the homepage.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
