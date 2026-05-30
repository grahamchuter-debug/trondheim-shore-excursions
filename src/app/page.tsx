import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import {
  ExploreNorwegianPorts,
  explorePortsFromMolde,
} from "@/components/explore-norwegian-ports";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import { moldeTourCards, moldeTourListItems } from "@/lib/molde-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildFaqSchema, buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title:
    "Molde Shore Excursions | Atlantic Ocean Road Tours & Cruise Port Guides for Passengers",
  description:
    "Plan your Molde cruise port day with Atlantic Ocean Road drives, Bud fishing village, Mount Varden viewpoints, port guides, and return-to-ship friendly shore excursion advice.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const trustBadges = [
  { label: "Return to ship on time", accent: true },
  { label: "Atlantic Ocean Road scenery", accent: false },
  { label: "Cruise passenger friendly", accent: false },
] as const;

const popularTours = moldeTourListItems;

const homeFaqs = [
  {
    question: "What is the best shore excursion in Molde for cruise passengers?",
    answer:
      "The Molde to Bud Scenic Drive and Atlantic Ocean Road tour is the headline choice for first-time visitors with four or more hours ashore. For shorter port calls, the City of Roses and Mount Varden Viewpoint tour fits comfortably within return-to-ship timings.",
  },
  {
    question: "How far is the Molde cruise port from the Atlantic Ocean Road?",
    answer:
      "The Atlantic Ocean Road lies east of Molde along the Romsdal coast — typically 45–60 minutes by coach each way. Confirm meeting points and return times on your voucher the night before.",
  },
  {
    question: "Can I see Mount Varden and the Atlantic Ocean Road on the same Molde port day?",
    answer:
      "Yes when your ship stays at least six to eight hours. Many guests choose either the coastal drive or the Mount Varden tour unless they have a very long call. Use the Cruise Smart Planner to check your margin.",
  },
  {
    question: "Should I book Molde shore excursions independently?",
    answer:
      "Independent bookings often cost less than ship tours, but you manage your own return-to-ship timing. Use our Cruise Smart Planner, confirm all-aboard on your cruise app, and build buffer before the gangway closes.",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(popularTours),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main className="min-h-screen bg-white text-slate-900">
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          centered
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
            Molde Shore Excursions
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 sm:mb-8 sm:text-xl md:text-2xl">
            Explore the Atlantic Ocean Road, Bud fishing village, coastal
            viewpoints and Molde&apos;s panoramic mountain scenery with
            cruise-friendly shore excursions designed around your time in port.
          </p>

          <a href="#tours" className="btn-primary px-8 py-4 text-base sm:text-lg">
            View Excursions
          </a>

          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className={`rounded-full px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm ${
                  badge.accent
                    ? "badge-accent-red"
                    : "border border-white/25 bg-white/10"
                }`}
              >
                {badge.label}
              </li>
            ))}
          </ul>
        </PageHero>

        <section id="tours" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
              Popular Molde Tours
            </h2>
            <p className="mb-4 max-w-2xl text-slate-600">
              Cruise-friendly excursions that depart near central Molde and fit
              typical port-day schedules along the Atlantic coast.
            </p>
            <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-red)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
              Every excursion featured is selected to fit comfortably within a
              typical Molde cruise port call.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {moldeTourCards.map((tour) => (
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
            <p className="mt-8">
              <Link
                href="/excursions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
              >
                View all Molde excursions
              </Link>
            </p>
          </div>
        </section>

        <section id="why-molde" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Molde is ideal for cruise shore excursions
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Molde combines Norway&apos;s famous Atlantic Ocean Road, historic
              Bud fishing village, and the City of Roses harbour into one
              elegant coastal cruise port. Mount Varden delivers a sweeping
              Romsdal Alps panorama minutes from town, while longer port days
              unlock one of the country&apos;s most photogenic coastal drives.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>Headline access to the Atlantic Ocean Road and Bud from Molde</li>
              <li>Mount Varden viewpoint with panoramic Romsdal Alps scenery</li>
              <li>Compact harbour and City of Roses town centre near cruise berths</li>
              <li>Coastal culture, fishing village history, and rugged shoreline photography</li>
              <li>Match excursions to your actual hours ashore with our Cruise Smart Planner</li>
            </ul>
          </div>
        </section>

        <section id="planner" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <CruisePortDayPlanner />
          </div>
        </section>

        <ExploreNorwegianPorts
          config={explorePortsFromMolde}
          variant="compact"
        />

        <section id="faqs" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Molde cruise passenger FAQs
            </h2>
            <dl className="space-y-6">
              {homeFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-blue)] bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Plan your Molde port day with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Browse shore excursions, read the port guide, and use the Cruise
              Smart Planner — everything built for cruise passengers who need
              to return on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={siteConfig.shoreExcursionsPath} className="btn-primary sm:text-base">
                Book a Tour
              </Link>
              <Link href="/molde-port-guide" className="btn-secondary sm:text-base">
                Molde Port Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
