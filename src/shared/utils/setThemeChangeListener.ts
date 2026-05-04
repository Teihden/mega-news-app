import type { TThemeMode } from "@shared/types";

/**
 * Attaches a listener that reacts to system theme changes.
 * @param updateThemeCb - Optional callback fired when the system theme changes.
 * Receives a `themeMode` argument with either `"dark"` or `"light"`.
 * @returns Cleanup function that removes the `MediaQueryListEvent` listener.
 */
export const setThemeChangeListener = (updateThemeCb?: (themeMode: TThemeMode) => void): () => void => {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  // eslint-disable-next-line jsdoc/require-jsdoc
  const mediaChangeHandler = (e: MediaQueryListEvent) => {
    const userSetThemeMode = localStorage.getItem("theme");
    if (!userSetThemeMode && typeof updateThemeCb === "function") {
      updateThemeCb(e.matches ? "dark" : "light");
    }
  };

  media.addEventListener("change", mediaChangeHandler);
  return () => media.removeEventListener("change", mediaChangeHandler);
};
