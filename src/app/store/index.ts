import { create } from "zustand";
import { darkTheme, lightTheme, type TThemeType } from "@app/styles";

export interface IAppStore {
  theme: TThemeType;
  updateTheme: () => void;
}

export const useAppStore = create<IAppStore>((set, get) => ({
  theme: lightTheme,

  /**
   * Обновляет тему
   */
  updateTheme: () => {
    const { theme } = get();

    set({
      theme: theme === lightTheme ? darkTheme : lightTheme,
    });
  },
}));
