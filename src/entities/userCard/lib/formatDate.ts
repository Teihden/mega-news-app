import type { TLanguage } from "@shared/types";

/**
 * Форматирует timestamp в строку даты.
 * Использует локаль из `document.documentElement.lang`.
 * Если язык не задан — используется `en`.
 * @param timestamp - Timestamp в миллисекундах.
 * @param locale - локаль
 * @returns Отформатированная дата (например: "August 18, 2022").
 */
export const formatDate = (timestamp: number, locale: TLanguage = "en"): string => {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(timestamp));
};
