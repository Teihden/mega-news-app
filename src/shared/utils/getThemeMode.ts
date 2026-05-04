import type { TThemeMode } from "@shared/types";

/**
 * Resolves the current theme mode and applies it to the document element.
 * Uses the saved mode from local storage when available.
 * Falls back to the system color scheme preference otherwise.
 * Sets the matching `data-theme` attribute on the `<html>` element.
 * @returns Current theme mode, either `"light"` or `"dark"`.
 */
export const getThemeMode = (): TThemeMode => {
  const isPreferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedThemeMode = localStorage.getItem("theme") as (TThemeMode | null);
  const themeMode = savedThemeMode ?? (isPreferDarkTheme ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", themeMode);

  return themeMode;
};
