import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";
import type { TLanguage, TThemeMode } from "@shared/types";
import { getLanguage, getThemeMode } from "@shared/utils";

export const useAppStore = create(
  devtools(
    combine(
      // initial state
      {
        themeMode: getThemeMode(),
        language: getLanguage(),
      },
      // eslint-disable-next-line @stylistic/function-call-argument-newline
      // actions
      (set, _get, store) => ({
        /**
         * Обновляет текущую тему приложения.
         * @param newThemeMode Устанавливает новый режим темы ("light" или "dark"). По умолчанию используется "light".
         */
        updateTheme: (newThemeMode: TThemeMode = "light") => {
          newThemeMode && document.documentElement.setAttribute("data-theme", newThemeMode);

          set({
            themeMode: newThemeMode,
          });
        },
        /**
         * Обновляет язык приложения.
         * @param newLanguage Устанавливает новый язык ("en" или "ru"). По умолчанию используется "en".
         */
        updateLanguage: (newLanguage: TLanguage = "en") => {
          newLanguage && document.documentElement.setAttribute("lang", newLanguage);
          localStorage.setItem("lang", newLanguage);

          set({
            language: newLanguage,
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
