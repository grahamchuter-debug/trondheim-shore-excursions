import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Kristiansand for Cruise Passengers",
  description:
    "Sample one-day Kristiansand itineraries for cruise guests: short port call, walking city day, nature-focused day, and family-friendly day with realistic timing and return-to-ship buffer.",
  path: "/one-day-in-kristiansand",
  ogImage: siteImages.oneDay,
  ogImageAlt: imageAlts.oneDay,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "One Day in Kristiansand" },
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
    question: "What can cruise passengers do in Kristiansand with only three hours ashore?",
    answer:
      "Focus on the Harbour, Fortress and Fish Market Walk or the Walking Exploration tour. Skip Baneheia and Ravnedalen, not enough margin for trail touring and return.",
  },
  {
    question: "Can I combine highlights and nature trekking on one Kristiansand day?",
    answer:
      "Yes if your ship stays at least six hours. Many guests choose one headline tour plus brief harbour time. Use the Cruise Smart Planner to verify your buffer.",
  },
  {
    question: "Should I book tickets before my cruise arrives in Kristiansand?",
    answer:
      "Pre-booking is recommended on peak summer days. Highlights and nature treks sell out when several ships share the port.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the gangway 30 to 45 minutes before the published all-aboard time. Even walkable ports have gangway queues on busy days.",
  },
] as const;

export default function OneDayInKristiansandPage() {
  return (
    <ContentPage
      title="One Day in Kristiansand"
      lead="Practical cruise-day itineraries for Kristiansand covering short port calls, walking city days, nature-focused trekking, and family-friendly beach time with realistic timing so you can return to your ship on schedule."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship&apos;s Kristiansand schedule</h2>
        <p>
          Every good Kristiansand day begins with your cruise line&apos;s
          arrival, departure, and all-aboard times. Subtract at least 45 minutes
          from your last possible departure to set a hard deadline for being
          back at the gangway. Confirm times on your ship&apos;s app the morning
          you arrive.
        </p>
      </section>

      <section>
        <h2>Short port call (under 3 hours)</h2>
        <p>
          Disembark immediately and stay within the harbour district. The{" "}
          <Link href="/excursions/harbour-fortress-fish-market">
            Harbour, Fortress and Fish Market Walk
          </Link>{" "}
          covers Fiskebrygga, Christiansholm Fortress, and the marina in under
          two and a half hours. Alternatively, the{" "}
          <Link href="/excursions/walking-exploration-kristiansand">
            Walking Exploration
          </Link>{" "}
          adds Bystranda beach if your window allows.
        </p>
        <ul>
          <li>0:00 to 0:15, disembark and walk to Fiskebrygga</li>
          <li>0:15 to 1:15, fish market, fortress, and marina loop</li>
          <li>1:15 to 1:45, optional coffee or seafood snack</li>
          <li>Final 45 minutes, return buffer before all aboard</li>
        </ul>
      </section>

      <section>
        <h2>Walking city day (3 to 4 hours)</h2>
        <p>
          With three to four hours, the{" "}
          <Link href="/excursions/kristiansand-highlights">
            Kristiansand Highlights
          </Link>{" "}
          tour delivers museum, Domkirke, fish market, fortress, and Kilden in one
          efficient outing. Independent walkers can replicate a lighter version:
          Fiskebrygga, fortress, Kvadraturen, and Kilden without a guide.
        </p>
        <ul>
          <li>Morning, highlights tour or self-guided harbour-to-centre walk</li>
          <li>Midday, lunch at Fiskebrygga or Markens Gate</li>
          <li>Afternoon, brief Kvadraturen stroll if time allows</li>
          <li>Final 45 minutes, return buffer before all aboard</li>
        </ul>
      </section>

      <section>
        <h2>Nature-focused day (4 to 6 hours)</h2>
        <p>
          Active guests with four to six hours should prioritise the{" "}
          <Link href="/excursions/baneheia-ravnedalen-nature-trek">
            Baneheia and Ravnedalen Nature Trek
          </Link>
          . Six-hour calls can add a brief harbour walk before or after the trek.
          Do not attempt trail touring on under-four-hour schedules.
        </p>
        <ul>
          <li>Morning, Baneheia and Ravnedalen guided trek</li>
          <li>Midday, lunch near harbour on return</li>
          <li>Afternoon, optional short promenade if energy and time allow</li>
          <li>Final 45 minutes, return buffer before all aboard</li>
        </ul>
      </section>

      <section>
        <h2>Family-friendly day (3 to 6 hours)</h2>
        <p>
          Families with children should consider the{" "}
          <Link href="/excursions/family-beach-day">
            Family and Beach Day
          </Link>{" "}
          tour. Bystranda beach, the Aquarama area, and the waterfront promenade
          deliver relaxed pacing without long coach transfers. Warm summer days
          maximise beach time; cooler days focus on promenade walks and
          Fiskebrygga.
        </p>
        <ul>
          <li>Morning, beach and promenade time at Bystranda</li>
          <li>Midday, lunch at harbour cafés or Fiskebrygga</li>
          <li>Afternoon, optional fortress visit or playground time</li>
          <li>Final 45 minutes, return buffer before all aboard</li>
        </ul>
      </section>

      <section>
        <h2>Return buffer</h2>
        <p>
          Be at the gangway 30 to 45 minutes before all aboard. Use the{" "}
          <Link href="/#planner">Kristiansand Cruise Smart Planner</Link> to see
          which combinations fit your exact port window.
        </p>
      </section>
    </ContentPage>
  );
}
