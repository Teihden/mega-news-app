import type { TThemeMode } from "@shared/types";
import { THEME_TOGGLER_MODES } from "../config";

/**
 * Returns the current theme toggler mode from local storage.
 * Falls back to `"system"` when there is no saved value or the saved value is invalid.
 * @returns Theme mode, for example `"light"`, `"dark"`, or `"system"`.
 */
export const getThemeTogglerMode = (): typeof THEME_TOGGLER_MODES[number] => {
  const savedThemeMode = localStorage.getItem("theme") as (TThemeMode | null);

  if (!savedThemeMode || !THEME_TOGGLER_MODES.includes(savedThemeMode)) {
    return "system";
  }

  return savedThemeMode;
};
