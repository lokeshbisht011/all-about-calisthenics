import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCompetitionDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const options = { day: "numeric", month: "short", year: "numeric" };

  // Same day
  if (
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate()
  ) {
    return start.toLocaleDateString("en-US", options);
  }

  // Same month
  if (
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth()
  ) {
    return `${start.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    })}–${end.getDate()}, ${end.getFullYear()}`;
  }

  // Different months or years
  return `${start.toLocaleDateString(
    "en-US",
    options
  )} - ${end.toLocaleDateString("en-US", options)}`;
}
