/**
 * Image provenance registry for Trondheim Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status: "KEEP" | "REPLACE" | "WRONG_LOCATION" | "DUPLICATE" | "PROVENANCE_UNKNOWN" | "BROKEN";
  notes: string;
};

export const trondheimImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath: "/images/trondheim-hero.png",
    status: "KEEP",
    notes: "Local aerial Trondheim / cathedral / fjord context. Provenance unknown.",
  },
  {
    key: "nidarosCathedral",
    urlOrPath: "/images/nidaros-cathedral.jpg",
    status: "KEEP",
    notes: "Local Nidaros west front. Provenance unknown.",
  },
  {
    key: "bakklandet",
    urlOrPath: "/images/bakklandet.jpg",
    status: "KEEP",
    notes: "Local Bakklandet timber houses. Provenance unknown.",
  },
  {
    key: "gamleBybro",
    urlOrPath: "/images/gamle-bybro.jpg",
    status: "KEEP",
    notes: "Local Old Town Bridge view. Provenance unknown.",
  },
  {
    key: "waterfront",
    urlOrPath: "/images/trondheim-waterfront.jpg",
    status: "KEEP",
    notes: "Local harbour/waterfront. Provenance unknown.",
  },
  {
    key: "nidelva",
    urlOrPath: "/images/nidelva.jpg",
    status: "KEEP",
    notes: "Local Nidelva riverfront. Provenance unknown.",
  },
  {
    key: "historicalWharves",
    urlOrPath: "/images/historical-wharves.jpg",
    status: "KEEP",
    notes: "Local historic wharf street. Provenance unknown.",
  },
  {
    key: "stiftsgarden",
    urlOrPath: "/images/stiftsgarden.jpg",
    status: "KEEP",
    notes: "Local Stiftsgården. Provenance unknown.",
  },
  {
    key: "stavangerHeroUnused",
    urlOrPath: "/images/stavanger-hero.png",
    status: "WRONG_LOCATION",
    notes: "Unused Stavanger asset in Trondheim repo. Do not use as Trondheim imagery.",
  },
] as const;
