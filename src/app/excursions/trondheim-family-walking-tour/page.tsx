import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { trondheimFamilyWalkingTourExcursion } from "@/lib/excursions/trondheim-family-walking-tour";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: trondheimFamilyWalkingTourExcursion.metaTitle,
  description: trondheimFamilyWalkingTourExcursion.metaDescription,
  path: trondheimFamilyWalkingTourExcursion.path,
  ogImage: trondheimFamilyWalkingTourExcursion.heroImage,
  ogImageAlt: trondheimFamilyWalkingTourExcursion.heroImageAlt,
});

export default function TrondheimFamilyWalkingTourPage() {
  return <ExcursionDetailPage excursion={trondheimFamilyWalkingTourExcursion} />;
}
