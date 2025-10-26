import type { TThemeMode } from "@shared/types";
import { THEME_TOGGLER_MODES } from "@features/ThemeToggler/config";

/**
 * Возвращает текущий режим темы, сохраненный в локальном хранилище, или режим по умолчанию, если сохраненный режим отсутствует.
 * Если в локальном хранилище не найдено сохраненного значения, возвращает значение "system".
 * @returns Режим темы (например, "light", "dark" или "system").
 */
export const getThemeTogglerMode = (): typeof THEME_TOGGLER_MODES[number] => {
  const savedThemeMode = localStorage.getItem("theme") as (TThemeMode | null);

  if (!savedThemeMode || !THEME_TOGGLER_MODES.includes(savedThemeMode)) {
    return "system";
  }

  return savedThemeMode;
};
