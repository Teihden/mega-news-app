import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";
import type { TThemeMode } from "@shared/types";
import { getThemeMode } from "@shared/utils";

export const useAppStore = create(
  devtools(
    combine(
      // initial state
      {
        themeMode: getThemeMode(),
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
         * Сбрасывает хранилище в начальное состояние.
         */
        resetStore: () => {
          set(store.getInitialState());
        },
      }),
    ), { name: "appStore" },
  ),
);
