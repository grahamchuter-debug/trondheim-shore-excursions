import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import {
  trondheimTourCards,
  trondheimTourListItems,
} from "@/lib/trondheim-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Trondheim Excursions, All Shore Tours for Cruise Passengers",
  description:
    "Browse all Trondheim shore excursions for cruise passengers: city walks, waterfront tours, nature hikes, family walks, and private custom tours around Nidaros Cathedral and Bakklandet.",
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
  { label: "Trondheim port guide", href: "/trondheim-port-guide" },
  { label: "One day in Trondheim", href: "/one-day-in-trondheim" },
  {
    label: "Is Trondheim worth visiting?",
    href: "/is-trondheim-worth-visiting",
  },
] as const;

const faqs = [
  {
    question: "What is the best Trondheim excursion for first-time cruise visitors?",
    answer:
      "The Trondheim City Walk is the main walking tour when you have two or more hours in port. For scenic photo routes, choose the Waterfront Guided Tour. Active passengers with four hours should book the Nature and City Hike.",
  },
  {
    question: "How do I choose between Trondheim shore excursions?",
    answer:
      "Match the tour to your hours ashore: city and waterfront walks suit under-four-hour calls; nature hikes need four hours; private custom tours flex across all windows. Use the Cruise Smart Planner on the homepage to compare options.",
  },
  {
    question: "Do Trondheim excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in central Trondheim near the harbour, cruise berths, or designated walking tour meeting points, typically a short walk or shuttle from most piers.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd data={[buildItemListSchema(trondheimTourListItems)]} />
      <ContentPage
        title="Trondheim Excursions"
        lead="Every cruise-friendly shore excursion in Trondheim, city walks, waterfront tours, nature hikes, family walks, and private custom tours, with return-to-ship timing in mind."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing a Trondheim tour?"
        ctaText="Use the Cruise Smart Planner on the homepage to match tours to your ship's timetable."
        ctaHref="/#planner"
        ctaButtonLabel="Open Cruise Smart Planner"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {trondheimTourCards.map((tour) => (
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
          <h2>Compare Trondheim shore excursions</h2>
          <p>
            Each tour below is designed for cruise passengers calling at
            Trondheim. Nature hikes need the longest port window; city and
            waterfront walks fit shorter schedules. Family walks suit relaxed
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
