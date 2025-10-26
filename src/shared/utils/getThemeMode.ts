import type { TThemeMode } from "@shared/types";

/**
 * Функция для получения текущего режима темы (светлая или темная).
 * Возвращает установленный в локальном хранилище режим темы, если он задан.
 * Если режим не задан, определяется предпочтение пользователя на основе настроек системы.
 * Применяет тему, устанавливая соответствующий атрибут "data-theme" на элементе <html>.
 * @returns Текущий режим темы ("light" или "dark").
 */
export const getThemeMode = (): TThemeMode => {
  const isPreferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedThemeMode = localStorage.getItem("theme") as (TThemeMode | null);
  const themeMode = savedThemeMode ?? (isPreferDarkTheme ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", themeMode);

  return themeMode;
};
