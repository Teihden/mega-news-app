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
         * Updates the current application theme.
         * @param newThemeMode - New theme mode to apply, either `"light"` or `"dark"`.
         */
        updateTheme: (newThemeMode: TThemeMode = "light") => {
          newThemeMode && document.documentElement.setAttribute("data-theme", newThemeMode);

          set({
            themeMode: newThemeMode,
          });
        },
        /**
         * Updates the application language.
         * @param newLanguage - New language to apply, either `"en"` or `"ru"`.
         * @param isInit - Whether the update happens during the initial app bootstrap.
         */
        updateLanguage: (newLanguage: TLanguage = "en", isInit = false) => {
          !isInit && i18n.changeLanguage(newLanguage);

          set({
            language: newLanguage,
          });
        },

        /**
         * Resets the store to its initial state.
         */
        resetStore: () => {
          set(store.getInitialState());
        },
      }),
    ), { name: "appStore" },
  ),
);
