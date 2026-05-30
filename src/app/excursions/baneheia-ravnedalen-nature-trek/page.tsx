import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { baneheiaRavnedalenNatureTrekExcursion } from "@/lib/excursions/baneheia-ravnedalen-nature-trek";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: baneheiaRavnedalenNatureTrekExcursion.metaTitle,
  description: baneheiaRavnedalenNatureTrekExcursion.metaDescription,
  path: baneheiaRavnedalenNatureTrekExcursion.path,
  ogImage: baneheiaRavnedalenNatureTrekExcursion.heroImage,
  ogImageAlt: baneheiaRavnedalenNatureTrekExcursion.heroImageAlt,
});

export default function BaneheiaRavnedalenNatureTrekPage() {
  return (
    <ExcursionDetailPage excursion={baneheiaRavnedalenNatureTrekExcursion} />
  );
}
