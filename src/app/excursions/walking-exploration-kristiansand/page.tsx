import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { walkingExplorationKristiansandExcursion } from "@/lib/excursions/walking-exploration-kristiansand";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: walkingExplorationKristiansandExcursion.metaTitle,
  description: walkingExplorationKristiansandExcursion.metaDescription,
  path: walkingExplorationKristiansandExcursion.path,
  ogImage: walkingExplorationKristiansandExcursion.heroImage,
  ogImageAlt: walkingExplorationKristiansandExcursion.heroImageAlt,
});

export default function WalkingExplorationKristiansandPage() {
  return (
    <ExcursionDetailPage excursion={walkingExplorationKristiansandExcursion} />
  );
}
