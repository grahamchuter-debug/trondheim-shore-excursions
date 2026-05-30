import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { atlanticCoastFishingVillageExcursion } from "@/lib/excursions/atlantic-coast-fishing-village";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: atlanticCoastFishingVillageExcursion.metaTitle,
  description: atlanticCoastFishingVillageExcursion.metaDescription,
  path: atlanticCoastFishingVillageExcursion.path,
  ogImage: atlanticCoastFishingVillageExcursion.heroImage,
  ogImageAlt: atlanticCoastFishingVillageExcursion.heroImageAlt,
});

export default function AtlanticCoastFishingVillagePage() {
  return (
    <ExcursionDetailPage excursion={atlanticCoastFishingVillageExcursion} />
  );
}
