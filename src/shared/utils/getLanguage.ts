import { LANGUAGES } from "@shared/config/constants";
import type { TLanguage } from "@shared/types";

/**
 * Проверяет, является ли переданное значение поддерживаемым языковым режимом.
 * @param value - Проверяемое строковое значение.
 * @returns `true`, если значение входит в список `LANGUAGES`.
 */
const isLanguage = (value: string): value is TLanguage => {
  return LANGUAGES.includes(value as TLanguage);
};

/**
 * Возвращает текущий режим переключателя языка.
 * @returns Текущий активный режим языка.
 */
export const getLanguage = (): TLanguage => {
  const savedLanguage = localStorage.getItem("lang");

  if (savedLanguage && isLanguage(savedLanguage)) {
    document.documentElement.lang = savedLanguage;
    return savedLanguage;
  }

  const htmlLanguage = document.documentElement.lang
    ?.slice(0, 2)
    .toLowerCase();

  if (htmlLanguage && isLanguage(htmlLanguage)) {
    return htmlLanguage;
  }

  return "en";
};
