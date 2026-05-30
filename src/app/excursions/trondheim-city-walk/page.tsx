import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { trondheimCityWalkExcursion } from "@/lib/excursions/trondheim-city-walk";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: trondheimCityWalkExcursion.metaTitle,
  description: trondheimCityWalkExcursion.metaDescription,
  path: trondheimCityWalkExcursion.path,
  ogImage: trondheimCityWalkExcursion.heroImage,
  ogImageAlt: trondheimCityWalkExcursion.heroImageAlt,
});

export default function TrondheimCityWalkPage() {
  return <ExcursionDetailPage excursion={trondheimCityWalkExcursion} />;
}
