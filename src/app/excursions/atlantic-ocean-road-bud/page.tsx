import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { atlanticOceanRoadBudExcursion } from "@/lib/excursions/atlantic-ocean-road-bud";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: atlanticOceanRoadBudExcursion.metaTitle,
  description: atlanticOceanRoadBudExcursion.metaDescription,
  path: atlanticOceanRoadBudExcursion.path,
  ogImage: atlanticOceanRoadBudExcursion.heroImage,
  ogImageAlt: atlanticOceanRoadBudExcursion.heroImageAlt,
});

export default function AtlanticOceanRoadBudPage() {
  return <ExcursionDetailPage excursion={atlanticOceanRoadBudExcursion} />;
}
