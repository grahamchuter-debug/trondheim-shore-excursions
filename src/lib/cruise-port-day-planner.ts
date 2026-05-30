export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
  conversionNote?: string;
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  supportingCopy: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const trondheimPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Trondheim",
  heading: "Trondheim Cruise Smart Planner™",
  subtitle: "Plan your shore excursions around your actual time in port.",
  supportingCopy:
    "Built specifically for cruise passengers visiting Trondheim's walkable historic centre and riverfront.",
  returnBufferNote:
    "Always confirm your cruise line's official all-aboard time, as this may be earlier than the published departure time.",
  tiers: [
    {
      minHours: 0,
      maxHours: 3,
      label: "Under 3 hours",
      confidenceScore: 45,
      confidenceLabel: "Tight Port Call",
      confidenceMessage:
        "Best suited to compact city walks. Focus on Nidaros Cathedral exterior, main square, and a brief waterfront stroll.",
      excursions: [
        {
          label: "Trondheim City Walk",
          href: "/excursions/trondheim-city-walk",
        },
        {
          label: "Trondheim Waterfront Guided Tour",
          href: "/excursions/trondheim-waterfront-tour",
        },
      ],
      dayPlan: [
        "Disembark promptly and stay within walking distance of the cruise pier",
        "Walk to Nidaros Cathedral and the main square if time allows",
        "Add a short Nidelva waterfront section only if return times are confirmed",
        "Be back at the gangway by your recommended return time",
      ],
    },
    {
      minHours: 3,
      maxHours: 4,
      label: "3 to 4 hours",
      confidenceScore: 70,
      confidenceLabel: "Good Short Port Call",
      confidenceMessage:
        "Enough time for the full city walk, a waterfront photo route, or a private custom tour with flexible pacing.",
      excursions: [
        {
          label: "Trondheim City Walk",
          href: "/excursions/trondheim-city-walk",
        },
        {
          label: "Trondheim Waterfront Guided Tour",
          href: "/excursions/trondheim-waterfront-tour",
        },
        {
          label: "Private Custom Trondheim Tour",
          href: "/excursions/private-custom-trondheim-tour",
        },
      ],
      dayPlan: [
        "Arrive in Trondheim and head to your excursion meeting point or start a city walk",
        "Morning: City Walk covering cathedral, Bakklandet and Old Town Bridge",
        "Alternative: Waterfront tour along the Nidelva and harbour",
        "Allow 45 minutes before all aboard to reach the cruise port",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4 to 6 hours",
      confidenceScore: 90,
      confidenceLabel: "Strong Port Call",
      confidenceMessage:
        "Ideal for the Nature and City Hike, a private custom tour, or combining city walk with waterfront time.",
      excursions: [
        {
          label: "Trondheim Nature and City Hike",
          href: "/excursions/trondheim-nature-city-hike",
        },
        {
          label: "Private Custom Trondheim Tour",
          href: "/excursions/private-custom-trondheim-tour",
        },
        { label: "City Walk plus waterfront time" },
      ],
      dayPlan: [
        "Arrive in Trondheim and confirm your first excursion departure",
        "Morning: Nature and City Hike or Private Custom Trondheim Tour",
        "Midday: Lunch near Solsiden or the main square if time allows",
        "Return to port by recommended return time",
      ],
    },
    {
      minHours: 6,
      maxHours: null,
      label: "6+ hours",
      confidenceScore: 95,
      confidenceLabel: "Excellent Full Day",
      confidenceMessage:
        "Combine private custom touring with relaxed historic centre exploration for an unhurried Trondheim city break.",
      conversionNote:
        "Most cruise passengers with 6+ hours in Trondheim choose a Private Custom Trondheim Tour or the Nature and City Hike, then finish with relaxed city exploration around Bakklandet and the wharves.",
      excursions: [
        {
          label: "Private Custom Trondheim Tour",
          href: "/excursions/private-custom-trondheim-tour",
        },
        {
          label: "Trondheim Nature and City Hike",
          href: "/excursions/trondheim-nature-city-hike",
        },
        { label: "Relaxed city exploration" },
      ],
      dayPlan: [
        "Arrive early and confirm your first excursion departure",
        "Morning: Private Custom Trondheim Tour or Nature and City Hike",
        "Midday: Lunch near the waterfront or main square",
        "Afternoon: Unhurried Bakklandet, cathedral, or museum time",
        "Keep the final hour free near the cruise pier for a calm return to ship",
      ],
    },
  ],
};

export const plannerInterestGroups = [
  {
    title: "Easy walking",
    items: [
      {
        label: "Trondheim City Walk",
        href: "/excursions/trondheim-city-walk",
      },
      {
        label: "Trondheim Waterfront Guided Tour",
        href: "/excursions/trondheim-waterfront-tour",
      },
    ],
  },
  {
    title: "Active",
    items: [
      {
        label: "Trondheim Nature and City Hike",
        href: "/excursions/trondheim-nature-city-hike",
      },
    ],
  },
  {
    title: "Family",
    items: [
      {
        label: "Trondheim Family Walking Tour",
        href: "/excursions/trondheim-family-walking-tour",
      },
    ],
  },
  {
    title: "Private",
    items: [
      {
        label: "Private Custom Trondheim Tour",
        href: "/excursions/private-custom-trondheim-tour",
      },
    ],
  },
] as const;

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 90) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 65) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
