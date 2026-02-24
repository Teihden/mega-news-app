import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";
import type { TLanguageMode, TThemeMode } from "@shared/types";
import { getLanguageMode, getThemeMode } from "@shared/utils";

export const useAppStore = create(
  devtools(
    combine(
      // initial state
      {
        themeMode: getThemeMode(),
        languageMode: getLanguageMode(),
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
         * @param newLanguageMode Устанавливает новый язык ("en" или "ru"). По умолчанию используется "en".
         */
        updateLanguage: (newLanguageMode: TLanguageMode = "en") => {
          newLanguageMode && document.documentElement.setAttribute("lang", newLanguageMode);
          localStorage.setItem("lang", newLanguageMode);

          set({
            languageMode: newLanguageMode,
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
