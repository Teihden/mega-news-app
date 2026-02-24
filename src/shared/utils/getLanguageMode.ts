import { LANGUAGE_MODES } from "@shared/config/constants";
import type { TLanguageMode } from "@shared/types";

/**
 * Проверяет, является ли переданное значение поддерживаемым языковым режимом.
 * @param value - Проверяемое строковое значение.
 * @returns `true`, если значение входит в список `LANGUAGE_MODES`.
 */
const isLanguageMode = (value: string): value is TLanguageMode => {
  return LANGUAGE_MODES.includes(value as TLanguageMode);
};

/**
 * Возвращает текущий режим переключателя языка.
 * @returns Текущий активный режим языка.
 */
export const getLanguageMode = (): TLanguageMode => {
  const savedLanguage = localStorage.getItem("lang");

  if (savedLanguage && isLanguageMode(savedLanguage)) {
    document.documentElement.lang = savedLanguage;
    return savedLanguage;
  }

  const htmlLanguage = document.documentElement.lang
    ?.slice(0, 2)
    .toLowerCase();

  if (htmlLanguage && isLanguageMode(htmlLanguage)) {
    return htmlLanguage;
  }

  return "en";
};
