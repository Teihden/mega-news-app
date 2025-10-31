import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";
import { darkTheme, lightTheme, type TThemeType } from "@app/styles";
import type { TThemeMode } from "@shared/types";
import { getThemeMode } from "@shared/utils";

export const useAppStore = create(
  devtools(
    combine(
      // initial state
      {
        themeMode: getThemeMode(),
        theme: (getThemeMode() === "dark" ? darkTheme : lightTheme) as TThemeType,
      },
      // eslint-disable-next-line @stylistic/function-call-argument-newline
      // actions
      (set, _get, store) => ({
        /**
         * Обновляет текущую тему приложения.
         * @param newThemeMode Устанавливает новый режим темы ("light" или "dark"). По умолчанию используется "light".
         */
        updateTheme: (newThemeMode: TThemeMode = "light") => {
          const newTheme = (newThemeMode === "light" ? lightTheme : darkTheme) as TThemeType;
          newThemeMode && document.documentElement.setAttribute("data-theme", newThemeMode);

          set({
            themeMode: newThemeMode,
            theme: newTheme,
          });
        },

        /**
         * Сбрасывает хранилище в начальное состояние.
         */
        resetStore: () => {
          set(store.getInitialState());
        },
      }),
    ), { name: "appStore" },
  ),
);
