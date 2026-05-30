import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import {
  ExploreNorwegianPorts,
  explorePortsFromTrondheim,
} from "@/components/explore-norwegian-ports";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PlannerInterestGroups } from "@/components/planner-interest-groups";
import { TourCard } from "@/components/tour-card";
import {
  trondheimTourCards,
  trondheimTourListItems,
} from "@/lib/trondheim-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildFaqSchema, buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title:
    "Trondheim Shore Excursions | Cathedral Walks, Waterfront Tours & Cruise Port Guides",
  description:
    "Plan your Trondheim cruise port day with Nidaros Cathedral walks, Bakklandet tours, waterfront routes, nature hikes, family walks, and return-to-ship friendly shore excursion advice.",
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
  { label: "Walkable cruise city", accent: false },
  { label: "Local Trondheim guides", accent: false },
] as const;

const homeFaqs = [
  {
    question: "What is the best shore excursion in Trondheim for cruise passengers?",
    answer:
      "The Trondheim City Walk is the main walking tour for first-time visitors with two to three hours or more ashore. For scenic photo routes, the Waterfront Guided Tour is the headline choice. Active passengers with four hours should consider the Nature and City Hike.",
  },
  {
    question: "Can I walk from the Trondheim cruise port to the city centre?",
    answer:
      "Yes. Most cruise berths are within easy walking or a short shuttle ride of Nidaros Cathedral, the main square, and the Nidelva riverfront. Trondheim is one of Norway's most walkable historic cruise cities.",
  },
  {
    question: "Is Trondheim good for families on a cruise?",
    answer:
      "Trondheim suits families well. The Family Walking Tour uses child-friendly pacing through Bakklandet and cathedral stories. The compact historic centre delivers cultural shore time without long coach transfers.",
  },
  {
    question: "Should I book Trondheim shore excursions independently?",
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
          buildItemListSchema(trondheimTourListItems),
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
            Trondheim Shore Excursions
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 sm:mb-8 sm:text-xl md:text-2xl">
            Explore Nidaros Cathedral, Bakklandet, the Old Town Bridge, historic
            wharves and Trondheim&apos;s waterfront with cruise-friendly guided
            tours designed around your time in port.
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
              Popular Trondheim Tours
            </h2>
            <p className="mb-4 max-w-2xl text-slate-600">
              Cruise-friendly excursions that depart near central Trondheim and
              fit typical port-day schedules in Norway&apos;s historic capital.
            </p>
            <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-red)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
              Every excursion featured is selected to fit comfortably within a
              typical Trondheim cruise port call.
            </p>

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
            <p className="mt-8">
              <Link
                href="/excursions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
              >
                View all Trondheim excursions
              </Link>
            </p>
          </div>
        </section>

        <section id="why-trondheim" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Trondheim is ideal for cruise shore excursions
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Trondheim is Norway&apos;s historic capital and a premium city-break
              port, a walkable cruise destination where Nidaros Cathedral,
              Bakklandet wooden houses, the Old Town Bridge, and colourful
              wharves combine in one elegant port day. Unlike remote fjord
              tenders, most berths sit close to the riverfront and main square.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>Easy walking from cruise pier to cathedral, Bakklandet and wharves</li>
              <li>Headline city walk covering culture, history and riverfront</li>
              <li>Waterfront photo routes along the Nidelva and harbour</li>
              <li>Family-friendly walking tours with Viking and cathedral stories</li>
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
          config={explorePortsFromTrondheim}
          variant="compact"
        />

        <section id="faqs" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Trondheim cruise passenger FAQs
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
              Plan your Trondheim port day with confidence
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
              <Link href="/trondheim-port-guide" className="btn-secondary sm:text-base">
                Trondheim Port Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
