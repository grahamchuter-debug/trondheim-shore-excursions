import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { kristiansandHighlightsExcursion } from "@/lib/excursions/kristiansand-highlights";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: kristiansandHighlightsExcursion.metaTitle,
  description: kristiansandHighlightsExcursion.metaDescription,
  path: kristiansandHighlightsExcursion.path,
  ogImage: kristiansandHighlightsExcursion.heroImage,
  ogImageAlt: kristiansandHighlightsExcursion.heroImageAlt,
});

export default function KristiansandHighlightsPage() {
  return <ExcursionDetailPage excursion={kristiansandHighlightsExcursion} />;
}
