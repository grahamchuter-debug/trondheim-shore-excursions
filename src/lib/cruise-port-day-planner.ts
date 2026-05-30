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

export const moldePortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Molde",
  heading: "Molde Cruise Smart Planner™",
  subtitle: "Plan your shore excursions around your actual time in port.",
  supportingCopy: "Built specifically for cruise passengers visiting Molde.",
  returnBufferNote:
    "Always confirm your cruise line's official all-aboard time, as this may be earlier than the published departure time.",
  tiers: [
    {
      minHours: 0,
      maxHours: 4,
      label: "Under 4 hours",
      confidenceScore: 40,
      confidenceLabel: "Limited Port Call",
      confidenceMessage:
        "Best suited to the City of Roses and Mount Varden tour or a self-guided harbour and town walk.",
      excursions: [
        {
          label: "Molde City of Roses and Mount Varden Viewpoint",
          href: "/excursions/molde-city-varden-viewpoint",
        },
        { label: "Harbour and town walk" },
      ],
      dayPlan: [
        "Disembark promptly and stay within walking distance of Molde harbour",
        "Choose the Mount Varden viewpoint tour or a compact town-centre stroll",
        "Skip Atlantic Ocean Road drives — not enough margin for coach returns",
        "Be back at the gangway by your recommended return time",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4–6 hours",
      confidenceScore: 65,
      confidenceLabel: "Short but Usable Port Call",
      confidenceMessage:
        "Good for the Molde to Bud scenic drive or the Atlantic Coast and Fishing Village Experience.",
      excursions: [
        {
          label: "Molde to Bud Scenic Drive and the Atlantic Ocean Road",
          href: "/excursions/atlantic-ocean-road-bud",
        },
        {
          label: "Atlantic Coast and Fishing Village Experience",
          href: "/excursions/atlantic-coast-fishing-village",
        },
      ],
      dayPlan: [
        "Arrive in Molde and head to your excursion meeting point",
        "Morning or early afternoon: Atlantic Ocean Road and Bud, or coastal village touring",
        "Add a short harbour walk only if return times are confirmed",
        "Allow 45 minutes before all aboard to reach the cruise port",
      ],
    },
    {
      minHours: 6,
      maxHours: 8,
      label: "6–8 hours",
      confidenceScore: 90,
      confidenceLabel: "Strong Port Call",
      confidenceMessage:
        "Enough time for the headline Atlantic Ocean Road tour or a private Bud and coastal drive with harbour time.",
      excursions: [
        {
          label: "Molde to Bud Scenic Drive and the Atlantic Ocean Road",
          href: "/excursions/atlantic-ocean-road-bud",
        },
        {
          label: "Private Molde to Bud and Atlantic Ocean Road",
          href: "/excursions/private-atlantic-ocean-road-bud",
        },
      ],
      dayPlan: [
        "Arrive in Molde and confirm your first excursion departure",
        "Morning: Atlantic Ocean Road and Bud scenic drive",
        "Midday: Lunch in Molde harbour or a short Mount Varden visit if time allows",
        "Return to port by recommended return time",
      ],
    },
    {
      minHours: 8,
      maxHours: null,
      label: "8+ hours",
      confidenceScore: 95,
      confidenceLabel: "Excellent Full Day",
      confidenceMessage:
        "Ideal for combining a private Atlantic Ocean Road tour, coastal village experiences, and relaxed Molde town time.",
      conversionNote:
        "Most cruise passengers with 8+ hours in Molde combine the private Atlantic Ocean Road tour with the fishing village experience and unhurried harbour sightseeing.",
      excursions: [
        {
          label: "Private Molde to Bud and Atlantic Ocean Road",
          href: "/excursions/private-atlantic-ocean-road-bud",
        },
        {
          label: "Atlantic Coast and Fishing Village Experience",
          href: "/excursions/atlantic-coast-fishing-village",
        },
        { label: "Relaxed Molde town time" },
      ],
      dayPlan: [
        "Arrive early and confirm your first excursion departure",
        "Morning: Private Atlantic Ocean Road and Bud tour",
        "Midday: Lunch in Molde's City of Roses harbour area",
        "Afternoon: Fishing village experience or Mount Varden viewpoint",
        "Keep the final hour free near the cruise port for a calm return to ship",
      ],
    },
  ],
};

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
