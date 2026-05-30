import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { moldeCityVardenViewpointExcursion } from "@/lib/excursions/molde-city-varden-viewpoint";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: moldeCityVardenViewpointExcursion.metaTitle,
  description: moldeCityVardenViewpointExcursion.metaDescription,
  path: moldeCityVardenViewpointExcursion.path,
  ogImage: moldeCityVardenViewpointExcursion.heroImage,
  ogImageAlt: moldeCityVardenViewpointExcursion.heroImageAlt,
});

export default function MoldeCityVardenViewpointPage() {
  return (
    <ExcursionDetailPage excursion={moldeCityVardenViewpointExcursion} />
  );
}
