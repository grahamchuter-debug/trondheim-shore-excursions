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

export const kristiansandPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Kristiansand",
  heading: "Kristiansand Cruise Smart Planner™",
  subtitle: "Plan your shore excursions around your actual time in port.",
  supportingCopy:
    "Built specifically for cruise passengers visiting Kristiansand's walkable harbourfront.",
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
        "Best suited to compact harbour walks. Focus on Fiskebrygga, Christiansholm Fortress, and the waterfront promenade.",
      excursions: [
        {
          label: "Walking Exploration of Kristiansand",
          href: "/excursions/walking-exploration-kristiansand",
        },
        {
          label: "Harbour, Fortress and Fish Market Walk",
          href: "/excursions/harbour-fortress-fish-market",
        },
      ],
      dayPlan: [
        "Disembark promptly and stay within walking distance of the cruise pier",
        "Walk Fiskebrygga fish market and the harbour promenade",
        "Visit Christiansholm Fortress if time allows",
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
        "Enough time for city highlights, a relaxed harbour walk, or a family beach outing near Bystranda.",
      excursions: [
        {
          label: "Kristiansand Highlights",
          href: "/excursions/kristiansand-highlights",
        },
        {
          label: "Walking Exploration of Kristiansand",
          href: "/excursions/walking-exploration-kristiansand",
        },
        {
          label: "Family and Beach Day",
          href: "/excursions/family-beach-day",
        },
      ],
      dayPlan: [
        "Arrive in Kristiansand and head to your excursion meeting point or start a harbour walk",
        "Morning: Highlights tour or walking exploration of the fish market and fortress",
        "Add Bystranda beach time only if return times are confirmed",
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
        "Ideal for the headline city tour or the Baneheia and Ravnedalen nature trek with comfortable return margins.",
      excursions: [
        {
          label: "Baneheia and Ravnedalen Nature Trek",
          href: "/excursions/baneheia-ravnedalen-nature-trek",
        },
        {
          label: "Kristiansand Highlights",
          href: "/excursions/kristiansand-highlights",
        },
      ],
      dayPlan: [
        "Arrive in Kristiansand and confirm your first excursion departure",
        "Morning: Kristiansand Highlights or Baneheia and Ravnedalen nature trek",
        "Midday: Lunch at Fiskebrygga or a short harbour stroll if time allows",
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
        "Combine headline touring with relaxed harbour, beach, or museum time for an unhurried southern Norway city break.",
      conversionNote:
        "Most cruise passengers with 6+ hours in Kristiansand combine the Highlights tour with Baneheia and Ravnedalen, then finish with relaxed harbour, beach, or museum time.",
      excursions: [
        {
          label: "Kristiansand Highlights",
          href: "/excursions/kristiansand-highlights",
        },
        {
          label: "Baneheia and Ravnedalen Nature Trek",
          href: "/excursions/baneheia-ravnedalen-nature-trek",
        },
        { label: "Relaxed harbour, beach or museum time" },
      ],
      dayPlan: [
        "Arrive early and confirm your first excursion departure",
        "Morning: Kristiansand Highlights city-and-culture tour",
        "Midday: Lunch at Fiskebrygga or Bystranda beach area",
        "Afternoon: Baneheia and Ravnedalen nature trek or unhurried harbour sightseeing",
        "Keep the final hour free near the cruise pier for a calm return to ship",
      ],
    },
  ],
};

export const plannerInterestGroups = [
  {
    title: "Active",
    items: [
      {
        label: "Baneheia and Ravnedalen Nature Trek",
        href: "/excursions/baneheia-ravnedalen-nature-trek",
      },
    ],
  },
  {
    title: "Easy walking",
    items: [
      {
        label: "Walking Exploration of Kristiansand",
        href: "/excursions/walking-exploration-kristiansand",
      },
      {
        label: "Harbour, Fortress and Fish Market Walk",
        href: "/excursions/harbour-fortress-fish-market",
      },
    ],
  },
  {
    title: "Family",
    items: [
      {
        label: "Kristiansand Family and Beach Day",
        href: "/excursions/family-beach-day",
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
