import type { TThemeMode } from "@shared/types";

/**
 * Устанавливает слушатель изменения темы в зависимости от пользовательских предпочтений и системной темы.
 * @param updateThemeCb - Необязательная функция обратного вызова, которая вызывается при изменении системной темы.
 * Получает один аргумент `themeMode`, который может быть "dark" или "light".
 * @returns Возвращает функцию для снятия обработчика события изменения темы `MediaQueryListEvent`.
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
