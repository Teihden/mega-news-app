import { type IThemeTogglerProps, THEME_TOGGLER_MODES, ICONS } from "../config";
import * as S from "./styles";
import { createElement, type FC, useState } from "react";
import { useAppStore } from "@app/store/useAppStore";
import { getThemeTogglerMode } from "../lib";
import { useTranslation } from "react-i18next";

/**
 * Компонент ThemeToggler предоставляет функциональность для переключения темы приложения.
 * @param props - Пропсы компонента.
 * @param props.variant Вариант отображения компонента.
 * @returns Компонент.
 */
export const ThemeToggler: FC<IThemeTogglerProps> = (props) => {
  const {
    variant = "secondary",
  } = props;

  const { t } = useTranslation([ "features" ]);
  const [ togglerThemeMode, setThemeTogglerMode ] = useState<typeof THEME_TOGGLER_MODES[number]>(() => getThemeTogglerMode());
  const updateTheme = useAppStore(({ updateTheme }) => updateTheme);
  const currentModeLabel = {
    dark: t(($) => $.themeToggler.modes.dark),
    light: t(($) => $.themeToggler.modes.light),
    system: t(($) => $.themeToggler.modes.system),
  }[togglerThemeMode];

  /**
   * Обработчик события для переключения темы.
   */
  const handleClick = () => {
    const nextIndex = (THEME_TOGGLER_MODES.indexOf(togglerThemeMode) + 1) % THEME_TOGGLER_MODES.length;
    const newTogglerThemeMode = THEME_TOGGLER_MODES[nextIndex] ?? "system";

    setThemeTogglerMode(() => newTogglerThemeMode);

    if (newTogglerThemeMode !== "system") {
      localStorage.setItem("theme", newTogglerThemeMode);
      updateTheme(newTogglerThemeMode);
    } else {
      localStorage.removeItem("theme");
      const isPreferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      updateTheme(isPreferDarkTheme ? "dark" : "light");
    }
  };

  return (
    <S.ThemeToggler
      variant={variant}
      onClick={() => handleClick()}
      size={"md"}
      iconSize={24}
      icon={createElement(ICONS[togglerThemeMode])}
      isRound={true}
      title={t(($) => $.themeToggler.title, { mode: currentModeLabel })}
      aria-label={t(($) => $.themeToggler.ariaLabel, { mode: currentModeLabel })}
    />
  );
};
