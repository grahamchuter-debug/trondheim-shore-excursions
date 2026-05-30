import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { harbourFortressFishMarketExcursion } from "@/lib/excursions/harbour-fortress-fish-market";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: harbourFortressFishMarketExcursion.metaTitle,
  description: harbourFortressFishMarketExcursion.metaDescription,
  path: harbourFortressFishMarketExcursion.path,
  ogImage: harbourFortressFishMarketExcursion.heroImage,
  ogImageAlt: harbourFortressFishMarketExcursion.heroImageAlt,
});

export default function HarbourFortressFishMarketPage() {
  return (
    <ExcursionDetailPage excursion={harbourFortressFishMarketExcursion} />
  );
}
