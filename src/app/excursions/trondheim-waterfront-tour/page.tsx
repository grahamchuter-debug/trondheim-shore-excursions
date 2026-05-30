import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { trondheimWaterfrontTourExcursion } from "@/lib/excursions/trondheim-waterfront-tour";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: trondheimWaterfrontTourExcursion.metaTitle,
  description: trondheimWaterfrontTourExcursion.metaDescription,
  path: trondheimWaterfrontTourExcursion.path,
  ogImage: trondheimWaterfrontTourExcursion.heroImage,
  ogImageAlt: trondheimWaterfrontTourExcursion.heroImageAlt,
});

export default function TrondheimWaterfrontTourPage() {
  return <ExcursionDetailPage excursion={trondheimWaterfrontTourExcursion} />;
}
