import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";
import type { TLanguage, TThemeMode } from "@shared/types";
import { getThemeMode } from "@shared/utils";
import { i18n } from "@shared/i18n";

export const useAppStore = create(
  devtools(
    combine(
      // initial state
      {
        themeMode: getThemeMode(),
        language: "en" as TLanguage,
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
         * @param isInit начальяна загрузка приложения
         */
        updateLanguage: (newLanguage: TLanguage = "en", isInit = false) => {
          !isInit && i18n.changeLanguage(newLanguage);

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
