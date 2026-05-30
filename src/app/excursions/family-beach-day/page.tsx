import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { familyBeachDayExcursion } from "@/lib/excursions/family-beach-day";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: familyBeachDayExcursion.metaTitle,
  description: familyBeachDayExcursion.metaDescription,
  path: familyBeachDayExcursion.path,
  ogImage: familyBeachDayExcursion.heroImage,
  ogImageAlt: familyBeachDayExcursion.heroImageAlt,
});

export default function FamilyBeachDayPage() {
  return <ExcursionDetailPage excursion={familyBeachDayExcursion} />;
}
