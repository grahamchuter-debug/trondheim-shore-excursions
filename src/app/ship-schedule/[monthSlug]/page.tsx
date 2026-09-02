import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";
import {
  formatMonthLabel,
  getTrondheimEntriesForMonthKey,
  getTrondheimMonthKeysWithCalls,
  getTrondheimMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/trondheim-schedules";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getTrondheimMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Trondheim Cruise Schedule: ${label}`,
    description: `Published cruise ship calls in Trondheim for ${label}. Check arrival and departure times, then plan a walking day that fits your hours ashore.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function TrondheimShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getTrondheimEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getTrondheimMonthSummaries().filter(
    (m) => m.slug !== monthSlug,
  );

  return (
    <ContentPage
      title={`Trondheim cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Trondheim plan.`}
      heroImage={siteImages.waterfront}
      heroImageAlt={imageAlts.waterfront}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Trondheim cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Trondheim port day"
      ctaText="Use your hours ashore to choose between a short centre walk and a longer outing, with a clear return buffer."
      ctaHref="/one-day-in-trondheim"
      ctaButtonLabel="Plan your Trondheim day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/excursions" },
        { label: "Port guide", href: "/trondheim-port-guide" },
        { label: "One day in Trondheim", href: "/one-day-in-trondheim" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, choose a walking pace
          that fits. These pages help without inventing exact tour-fit guarantees
          from arrival times alone.
        </p>
        <ul>
          <li>
            <Link href="/one-day-in-trondheim">One day in Trondheim</Link>
          </li>
          <li>
            <Link href="/excursions">Trondheim excursion options</Link>
          </li>
          <li>
            <Link href="/trondheim-port-guide">Trondheim cruise port guide</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Trondheim months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
