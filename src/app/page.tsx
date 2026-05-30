import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import {
  ExploreNorwegianPorts,
  explorePortsFromKristiansand,
} from "@/components/explore-norwegian-ports";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PlannerInterestGroups } from "@/components/planner-interest-groups";
import { TourCard } from "@/components/tour-card";
import {
  kristiansandTourCards,
  kristiansandTourListItems,
} from "@/lib/kristiansand-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildFaqSchema, buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title:
    "Kristiansand Shore Excursions | Harbour Tours, Beach Days & Cruise Port Guides",
  description:
    "Plan your Kristiansand cruise port day with harbour walks, fish market tours, fortress visits, Baneheia nature treks, family beach days, and return-to-ship friendly shore excursion advice.",
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
  { label: "Walkable cruise port", accent: false },
  { label: "Southern Norway specialists", accent: false },
] as const;

const homeFaqs = [
  {
    question: "What is the best shore excursion in Kristiansand for cruise passengers?",
    answer:
      "The Kristiansand Highlights tour is the main city-and-culture choice for first-time visitors with three to four hours or more ashore. For nature-focused days, the Baneheia and Ravnedalen Nature Trek is the headline option. Short port calls suit the Walking Exploration or Harbour, Fortress and Fish Market Walk.",
  },
  {
    question: "Can I walk from the Kristiansand cruise port to town?",
    answer:
      "Yes. Most cruise berths are within easy walking distance of Fiskebrygga fish market, Christiansholm Fortress, Bystranda beach, and the Kvadraturen town centre. Kristiansand is one of Norway's most walkable cruise ports.",
  },
  {
    question: "Is Kristiansand good for families on a cruise?",
    answer:
      "Kristiansand suits families well. Bystranda city beach, the Aquarama area, and the compact harbourfront deliver relaxed shore time without long coach transfers. The Family and Beach Day tour is designed around children's pacing.",
  },
  {
    question: "Should I book Kristiansand shore excursions independently?",
    answer:
      "Independent bookings often cost less than ship tours, but you manage your own return-to-ship timing. Use our Cruise Smart Planner, confirm all-aboard on your cruise app, and allow 45 minutes before the gangway closes.",
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
          buildItemListSchema(kristiansandTourListItems),
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
            Kristiansand Shore Excursions
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 sm:mb-8 sm:text-xl md:text-2xl">
            Explore Kristiansand&apos;s harbourfront, old fortress, fish market,
            beaches, forest trails and southern Norway scenery with
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
              Popular Kristiansand Tours
            </h2>
            <p className="mb-4 max-w-2xl text-slate-600">
              Cruise-friendly excursions that depart near central Kristiansand
              and fit typical port-day schedules along the southern Norway
              coast.
            </p>
            <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-red)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
              Every excursion featured is selected to fit comfortably within a
              typical Kristiansand cruise port call.
            </p>

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
            <p className="mt-8">
              <Link
                href="/excursions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
              >
                View all Kristiansand excursions
              </Link>
            </p>
          </div>
        </section>

        <section id="why-kristiansand" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Kristiansand is ideal for cruise shore excursions
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Kristiansand is southern Norway&apos;s relaxed coastal city break,
              a walkable cruise port where harbour life, historic fortress
              walls, sandy city beaches, and forest trails above town combine
              in one elegant port day. Unlike remote fjord tenders, most berths
              sit minutes from Fiskebrygga fish market and the waterfront
              promenade.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>Easy walking from cruise pier to fish market, fortress and beach</li>
              <li>Headline city tour covering culture, harbour and coastal villages</li>
              <li>Baneheia and Ravnedalen forest trails for active port days</li>
              <li>Family-friendly Bystranda beach and Aquarama area</li>
              <li>Match excursions to your actual hours ashore with our Cruise Smart Planner</li>
            </ul>
          </div>
        </section>

        <section id="planner" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <CruisePortDayPlanner />
            <PlannerInterestGroups />
          </div>
        </section>

        <ExploreNorwegianPorts
          config={explorePortsFromKristiansand}
          variant="compact"
        />

        <section id="faqs" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Kristiansand cruise passenger FAQs
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
              Plan your Kristiansand port day with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Browse shore excursions, read the port guide, and use the Cruise
              Smart Planner, everything built for cruise passengers who need
              to return on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={siteConfig.shoreExcursionsPath} className="btn-primary sm:text-base">
                Book a Tour
              </Link>
              <Link href="/kristiansand-port-guide" className="btn-secondary sm:text-base">
                Kristiansand Port Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
