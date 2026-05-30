import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Trondheim for Cruise Passengers",
  description:
    "Sample one-day Trondheim itineraries for cruise guests: short port call city walk, classic historic day, waterfront and photo day, active nature and city day, and family-friendly day with realistic timing.",
  path: "/one-day-in-trondheim",
  ogImage: siteImages.oneDay,
  ogImageAlt: imageAlts.oneDay,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "One Day in Trondheim" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Trondheim port guide", href: "/trondheim-port-guide" },
  {
    label: "Is Trondheim worth visiting?",
    href: "/is-trondheim-worth-visiting",
  },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Trondheim with only three hours ashore?",
    answer:
      "Focus on the Trondheim City Walk or Waterfront Guided Tour. Skip the Nature and City Hike, not enough margin for trail touring and return.",
  },
  {
    question: "Can I combine city walk and waterfront touring on one Trondheim day?",
    answer:
      "Yes if your ship stays at least four hours. Many guests choose one guided tour plus brief independent time along the Nidelva. Use the Cruise Smart Planner to verify your buffer.",
  },
  {
    question: "Should I book tickets before my cruise arrives in Trondheim?",
    answer:
      "Pre-booking is recommended on peak summer days. City walks and private tours sell out when several ships share the port.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the gangway 30 to 45 minutes before the published all-aboard time. Even walkable ports have gangway queues on busy days.",
  },
] as const;

export default function OneDayInTrondheimPage() {
  return (
    <ContentPage
      title="One Day in Trondheim"
      lead="Practical cruise-day itineraries for Trondheim covering short port calls, classic historic days, waterfront photo routes, active nature hikes, and family-friendly walking with realistic timing so you can return to your ship on schedule."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship&apos;s Trondheim schedule</h2>
        <p>
          Every good Trondheim day begins with your cruise line&apos;s
          arrival, departure, and all-aboard times. Subtract at least 45 minutes
          from your last possible departure to set a hard deadline for being
          back at the gangway. Confirm times on your ship&apos;s app the morning
          you arrive.
        </p>
      </section>

      <section>
        <h2>Short port call city walk (under 3 hours)</h2>
        <p>
          <strong>Best for:</strong> Tight schedules, first-time visitors who
          want cathedral and bridge highlights quickly.
        </p>
        <ul>
          <li>Disembark promptly and walk toward Nidaros Cathedral</li>
          <li>Book the{" "}
            <Link href="/excursions/trondheim-city-walk" className="content-link">
              Trondheim City Walk
            </Link>{" "}
            or follow a self-guided route via the main square</li>
          <li>Cross Gamle Bybro for a brief Bakklandet photo stop if time allows</li>
          <li>Return to port 45 minutes before departure</li>
        </ul>
      </section>

      <section>
        <h2>Classic historic Trondheim day (3 to 4 hours)</h2>
        <p>
          <strong>Best for:</strong> Passengers who want the full historic
          centre experience without rushing.
        </p>
        <ul>
          <li>Morning: Trondheim City Walk covering cathedral, Stiftsgården, Bakklandet, and wharves</li>
          <li>Midday: Coffee or lunch near the main square or Bakklandet</li>
          <li>Optional: Brief independent time at historical wharves</li>
          <li>Allow 45 minutes before all aboard for gangway return</li>
        </ul>
      </section>

      <section>
        <h2>Waterfront and photo day (3 to 4 hours)</h2>
        <p>
          <strong>Best for:</strong> Photography enthusiasts and passengers who
          prefer river scenery over intensive sightseeing.
        </p>
        <ul>
          <li>Book the{" "}
            <Link
              href="/excursions/trondheim-waterfront-tour"
              className="content-link"
            >
              Trondheim Waterfront Guided Tour
            </Link>
          </li>
          <li>Capture Nidelva reflections, bridges, and colourful wharves</li>
          <li>Add Solsiden harbour atmosphere if your schedule allows</li>
          <li>Keep return buffer for gangway queues on warm summer days</li>
        </ul>
      </section>

      <section>
        <h2>Active nature and city day (4 to 6 hours)</h2>
        <p>
          <strong>Best for:</strong> Fit passengers with longer port windows.
        </p>
        <ul>
          <li>Morning:{" "}
            <Link
              href="/excursions/trondheim-nature-city-hike"
              className="content-link"
            >
              Trondheim Nature and City Hike
            </Link>{" "}
            with trails, viewpoint, and city descent</li>
          <li>Midday: Lunch near the waterfront or main square</li>
          <li>Afternoon: Brief independent Bakklandet stroll if energy allows</li>
          <li>Return early, active days can make passengers underestimate travel time</li>
        </ul>
      </section>

      <section>
        <h2>Family-friendly day (3 to 4 hours)</h2>
        <p>
          <strong>Best for:</strong> Families with children who want engaging
          stories at a gentle pace.
        </p>
        <ul>
          <li>Book the{" "}
            <Link
              href="/excursions/trondheim-family-walking-tour"
              className="content-link"
            >
              Trondheim Family Walking Tour
            </Link>
          </li>
          <li>Enjoy Viking, saint, and king stories at child-friendly pacing</li>
          <li>Playground-style stops where suitable on the route</li>
          <li>Allow extra gangway buffer, families move slower near the ship</li>
        </ul>
      </section>

      <section>
        <h2>Full day with private touring (6+ hours)</h2>
        <p>
          Passengers with six or more hours ashore can combine a{" "}
          <Link
            href="/excursions/private-custom-trondheim-tour"
            className="content-link"
          >
            Private Custom Trondheim Tour
          </Link>{" "}
          with relaxed cathedral, museum, or café time. Use the{" "}
          <Link href="/#planner" className="content-link">
            Cruise Smart Planner
          </Link>{" "}
          to build your day around your exact timetable.
        </p>
      </section>
    </ContentPage>
  );
}
