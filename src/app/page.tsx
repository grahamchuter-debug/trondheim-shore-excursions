import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";
import {
  formatScheduleDate,
  trondheimScheduleIntegrity,
} from "@/lib/trondheim-schedules";
import { trondheimTourCards, trondheimTourListItems } from "@/lib/trondheim-tours";

const pageMeta = {
  title: "Trondheim Shore Excursions | Cruise Port Day Planning",
  description:
    "Your cruise ship is calling at Trondheim. Plan a realistic day around Nidaros Cathedral, Bakklandet and the riverfront, and check published ship schedules.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Trondheim?",
    answer:
      "Yes. This is an independent Trondheim cruise-port planning site. It helps you understand a walkable cathedral-city day, check published ship calls and explore excursion ideas. Confirm final timings with your cruise line.",
  },
  {
    question: "What can I do in Trondheim with a short call?",
    answer:
      "A city walk or waterfront walk usually fits shorter calls best. Focus on Nidaros Cathedral, the Old Town Bridge and Bakklandet, and keep a clear return buffer.",
  },
  {
    question: "Is Trondheim a fjord-excursion port like Geiranger or Flåm?",
    answer:
      "No. On this site the Trondheim day is about the historic centre, riverfront and nearby hills. It is a city-break port day rather than a deep-fjord sightseeing stop.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const firstLabel = trondheimScheduleIntegrity.firstDate
    ? formatScheduleDate(trondheimScheduleIntegrity.firstDate)
    : "";
  const lastLabel = trondheimScheduleIntegrity.lastDate
    ? formatScheduleDate(trondheimScheduleIntegrity.lastDate)
    : "";
  const featured = trondheimTourCards.slice(0, 3);
  const remaining = trondheimTourCards.slice(3);

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
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="font-display mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your cruise ship is calling at Trondheim. What can you do with the
            day?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            A walkable cathedral city on the Nidelva: Nidaros, Bakklandet, Old
            Town Bridge and published ship schedules through 2027.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Trondheim excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Your day in Trondheim</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Match the day to your hours ashore
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Trondheim on this site is a historic walking city, not a
              deep-fjord excursion fork. Start with time, then choose an easy
              centre walk, a longer nature-and-city outing, or a private plan.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Short call
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  City walk or waterfront highlights: cathedral, bridge and
                  Bakklandet without stretching the clock.
                </p>
                <Link
                  href="/excursions/trondheim-city-walk"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  City walk
                </Link>
              </div>
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Longer day
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nature and city hike, or combine centre landmarks with river
                  and hillside views when your call allows.
                </p>
                <Link
                  href="/excursions/trondheim-nature-city-hike"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Nature and city hike
                </Link>
              </div>
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Family or private
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A family walking tour for a gentler pace, or a private custom
                  outing when you want more control over the route.
                </p>
                <Link
                  href="/one-day-in-trondheim"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  One day guidance
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Trondheim
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {trondheimScheduleIntegrity.total} published Trondheim calls from{" "}
              {firstLabel} to {lastLabel}. Arrival and departure times shape what
              is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Trondheim ship schedule
              </Link>
              <Link
                href="/one-day-in-trondheim"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                Then plan your hours
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Trondheim walking ideas for a cruise day
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Genuine options already on this site. Durations are approximate.
              Keep a return buffer.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            {remaining.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {remaining.map((tour) => (
                  <TourCard key={tour.href} {...tour} />
                ))}
              </div>
            ) : null}
            <p className="mt-8">
              <Link
                href="/excursions"
                className="text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                Compare all Trondheim excursions
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Trondheim</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/trondheim-port-guide",
                  title: "Cruise port guide",
                  text: "Orientation for a walkable city day from the cruise area.",
                },
                {
                  href: "/one-day-in-trondheim",
                  title: "One day in Trondheim",
                  text: "Sample shapes for short, classic and longer port calls.",
                },
                {
                  href: "/is-trondheim-worth-visiting",
                  title: "Is Trondheim worth visiting?",
                  text: "Honest context for passengers deciding how to spend hours ashore.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, pace and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start, then leave margin before
              all aboard. This planner helps you think through the day. It does
              not invent a guaranteed excursion fit.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Return to ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Plan the walk back before you leave the gangway
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Your cruise line sets all aboard. Build your own buffer after any
              walk ends. Café queues and cathedral visits can stretch longer than
              expected.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Trondheim</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Trondheim cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Trondheim planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Trondheim port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, one-day guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
