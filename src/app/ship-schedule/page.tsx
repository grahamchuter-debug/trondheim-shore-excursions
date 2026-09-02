import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";
import {
  formatScheduleDate,
  getTrondheimMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
  trondheimScheduleIntegrity,
} from "@/lib/trondheim-schedules";

export const metadata: Metadata = buildPageMetadata({
  title: "Trondheim Cruise Ship Schedule 2026–2027",
  description:
    "Published Trondheim cruise ship calls for 2026 and 2027. Find your ship and date, then plan a realistic walking day around the cathedral and riverfront.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getTrondheimMonthSummaries();
  const firstLabel = trondheimScheduleIntegrity.firstDate
    ? formatScheduleDate(trondheimScheduleIntegrity.firstDate)
    : "";
  const lastLabel = trondheimScheduleIntegrity.lastDate
    ? formatScheduleDate(trondheimScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Trondheim cruise ship schedule"
      lead={`Published calls for Trondheim from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then choose a walking plan that fits.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Trondheim port day"
      ctaText="Once you know your hours ashore, compare city walks, waterfront routes and longer outings with a clear return buffer."
      ctaHref="/one-day-in-trondheim"
      ctaButtonLabel="Plan your Trondheim day"
      relatedLinks={[
        { label: "Trondheim excursions", href: "/excursions" },
        { label: "One day in Trondheim", href: "/one-day-in-trondheim" },
        { label: "Port guide", href: "/trondheim-port-guide" },
        { label: "Is Trondheim worth visiting?", href: "/is-trondheim-worth-visiting" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {trondheimScheduleIntegrity.total} Trondheim calls,{" "}
          {trondheimScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {trondheimScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {trondheimScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Trondheim</h2>
        <p>
          A short call usually suits the cathedral, Old Town Bridge and
          Bakklandet. A longer day can support a nature-and-city hike or a more
          leisurely private route. Always leave a clear buffer before all aboard.
        </p>
        <p>
          Continue to{" "}
          <Link href="/one-day-in-trondheim">one day in Trondheim</Link>,{" "}
          <Link href="/excursions">excursion options</Link>, or the{" "}
          <Link href="/trondheim-port-guide">port guide</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
