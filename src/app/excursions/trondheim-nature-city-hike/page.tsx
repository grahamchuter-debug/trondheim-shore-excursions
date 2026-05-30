import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { trondheimNatureCityHikeExcursion } from "@/lib/excursions/trondheim-nature-city-hike";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: trondheimNatureCityHikeExcursion.metaTitle,
  description: trondheimNatureCityHikeExcursion.metaDescription,
  path: trondheimNatureCityHikeExcursion.path,
  ogImage: trondheimNatureCityHikeExcursion.heroImage,
  ogImageAlt: trondheimNatureCityHikeExcursion.heroImageAlt,
});

export default function TrondheimNatureCityHikePage() {
  return <ExcursionDetailPage excursion={trondheimNatureCityHikeExcursion} />;
}
