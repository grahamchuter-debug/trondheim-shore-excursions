import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { privateCustomTrondheimTourExcursion } from "@/lib/excursions/private-custom-trondheim-tour";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: privateCustomTrondheimTourExcursion.metaTitle,
  description: privateCustomTrondheimTourExcursion.metaDescription,
  path: privateCustomTrondheimTourExcursion.path,
  ogImage: privateCustomTrondheimTourExcursion.heroImage,
  ogImageAlt: privateCustomTrondheimTourExcursion.heroImageAlt,
});

export default function PrivateCustomTrondheimTourPage() {
  return <ExcursionDetailPage excursion={privateCustomTrondheimTourExcursion} />;
}
