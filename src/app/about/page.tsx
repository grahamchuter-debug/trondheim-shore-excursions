import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

export const metadata: Metadata = buildPageMetadata({
  title: "About Trondheim Shore Excursions",
  description:
    "About Trondheim Shore Excursions: independent cruise-port planning for Nidaros Cathedral, Bakklandet, riverfront walks and published ship schedules.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPage
      title="About Trondheim Shore Excursions"
      lead="An independent planning site for cruise passengers calling at Trondheim. Cathedral-city context, walking ideas and published ship schedules."
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath="/about"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
      ctaTitle="Start with your Trondheim day"
      ctaText="Check the ship schedule, then explore walking options that fit your hours ashore."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check ship schedule"
      showShipReassurance={false}
      relatedLinks={[
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ]}
    >
      <section>
        <h2>What this site is</h2>
        <p>
          Trondheim Shore Excursions helps cruise passengers plan a realistic day
          in Trondheim: cathedral and riverfront walks, Bakklandet, and published
          ship-call information drawn from the Norway Shore Excursions master
          schedule.
        </p>
      </section>

      <section>
        <h2>What this site is not</h2>
        <ul>
          <li>Not a cruise line or port authority</li>
          <li>Not an official tourism board</li>
          <li>Not a live booking checkout</li>
          <li>Not a guarantee of berth, timings or tour availability</li>
        </ul>
      </section>

      <section>
        <h2>National context</h2>
        <p>
          For multi-port Norway planning, see{" "}
          <a href={siteConfig.nationalAuthorityUrl}>Norway Shore Excursions</a>.
          This site stays focused on Trondheim.
        </p>
        <p>
          <Link href="/contact">Contact</Link>
          {" · "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
        </p>
      </section>
    </ContentPage>
  );
}
