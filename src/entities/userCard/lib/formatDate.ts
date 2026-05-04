import type { TLanguage } from "@shared/types";

/**
 * Formats a timestamp as a localized date string.
 * @param timestamp - Timestamp in milliseconds.
 * @param locale - Locale used for formatting.
 * @returns Formatted date string, for example "August 18, 2022".
 */
export const formatDate = (timestamp: number, locale: TLanguage = "en"): string => {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(timestamp));
};
