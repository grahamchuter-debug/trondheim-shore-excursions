import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Molde for Cruise Passengers",
  description:
    "Sample one-day Molde itinerary for cruise guests with realistic timing for Atlantic Ocean Road, Bud, Mount Varden, harbour lunch, and buffer to return to ship on time.",
  path: "/one-day-in-molde",
  ogImage: siteImages.oneDay,
  ogImageAlt: imageAlts.oneDay,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "One Day in Molde" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Molde port guide", href: "/molde-port-guide" },
  { label: "Is Molde worth visiting?", href: "/is-molde-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Molde with only four hours ashore?",
    answer:
      "Focus on the City of Roses and Mount Varden tour or a self-guided harbour and town walk. Skip Atlantic Ocean Road drives — not enough margin for coach returns.",
  },
  {
    question: "Can I combine the Atlantic Ocean Road and Mount Varden in one Molde day?",
    answer:
      "Yes if your ship stays at least six to eight hours. Many guests choose one coastal tour plus brief harbour time. Use the Cruise Smart Planner to verify your buffer.",
  },
  {
    question: "Should I book tickets before my cruise arrives in Molde?",
    answer:
      "Pre-booking is strongly recommended on peak summer days. Atlantic Ocean Road and private coastal tours sell out when several ships share the region.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the gangway 30–45 minutes before the published all-aboard time. Coach returns from coastal drives can compress that window quickly.",
  },
] as const;

export default function OneDayInMoldePage() {
  return (
    <ContentPage
      title="One Day in Molde"
      lead="A practical cruise-day plan for Molde that combines Atlantic Ocean Road scenery, Bud fishing village, Mount Varden panoramas, and harbour time with realistic timing so you can return to your ship on time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship&apos;s Molde schedule</h2>
        <p>
          Every good Molde day begins with your cruise line&apos;s arrival,
          departure, and all-aboard times. Subtract at least 45 minutes from your
          last possible departure to set a hard deadline for being back at the
          gangway. Confirm times on your ship&apos;s app the morning you arrive.
        </p>
      </section>

      <section>
        <h2>Morning: Atlantic Ocean Road or Mount Varden</h2>
        <p>
          Disembark as early as you are cleared ashore. With four or more hours,
          head to your coach for the{" "}
          <Link href="/excursions/atlantic-ocean-road-bud">
            Molde to Bud and Atlantic Ocean Road tour
          </Link>
          . On shorter port calls, choose the{" "}
          <Link href="/excursions/molde-city-varden-viewpoint">
            City of Roses and Mount Varden tour
          </Link>{" "}
          instead.
        </p>
      </section>

      <section>
        <h2>Midday: Harbour lunch in the City of Roses</h2>
        <p>
          If your coastal tour returns with time to spare, lunch along the
          harbour promenade keeps you near the ship. Cafés and bakeries cluster
          within minutes of most cruise berths.
        </p>
      </section>

      <section>
        <h2>Afternoon: Coastal village or relaxed town time</h2>
        <p>
          On six-to-eight-hour port days, the{" "}
          <Link href="/excursions/atlantic-coast-fishing-village">
            fishing village experience
          </Link>{" "}
          or a{" "}
          <Link href="/excursions/private-atlantic-ocean-road-bud">
            private Atlantic Ocean Road tour
          </Link>{" "}
          adds flexible coastal pacing. Eight-plus-hour calls can combine private
          touring with unhurried harbour sightseeing.
        </p>
      </section>

      <section>
        <h2>Return buffer</h2>
        <p>
          Be at the gangway 30–45 minutes before all aboard. Use the{" "}
          <Link href="/#planner">Molde Cruise Smart Planner</Link> to see which
          combinations fit your exact port window.
        </p>
      </section>
    </ContentPage>
  );
}
