import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { privateAtlanticOceanRoadBudExcursion } from "@/lib/excursions/private-atlantic-ocean-road-bud";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: privateAtlanticOceanRoadBudExcursion.metaTitle,
  description: privateAtlanticOceanRoadBudExcursion.metaDescription,
  path: privateAtlanticOceanRoadBudExcursion.path,
  ogImage: privateAtlanticOceanRoadBudExcursion.heroImage,
  ogImageAlt: privateAtlanticOceanRoadBudExcursion.heroImageAlt,
});

export default function PrivateAtlanticOceanRoadBudPage() {
  return (
    <ExcursionDetailPage excursion={privateAtlanticOceanRoadBudExcursion} />
  );
}
