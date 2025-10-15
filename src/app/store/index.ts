import { create } from "zustand";
import { darkTheme, lightTheme, type TThemeType } from "@app/styles";
import type { TThemeMode } from "@shared/types";
import { getThemeMode } from "@shared/utils";

export interface IAppStore {
  theme: TThemeType;
  themeMode: TThemeMode;
  updateTheme: (newThemeMode: TThemeMode) => void;
}

export const useAppStore = create<IAppStore>((set, _get) => ({
  theme: (getThemeMode() === "dark" ? darkTheme : lightTheme) as TThemeType,
  themeMode: getThemeMode(),

  /**
   * Обновляет текущую тему приложения.
   * @param newThemeMode Устанавливает новый режим темы, может быть "light" или "dark". По умолчанию используется "light".
   */
  updateTheme: (newThemeMode: TThemeMode = "light") => {
    const newTheme = (newThemeMode === "light" ? lightTheme : darkTheme) as TThemeType;
    newThemeMode && document.documentElement.setAttribute("data-theme", newThemeMode);

    set({
      themeMode: newThemeMode,
      theme: newTheme,
    });
  },
}));
