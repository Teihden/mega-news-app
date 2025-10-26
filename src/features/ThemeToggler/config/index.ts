import type { ICommonBtnProps } from "@shared/ui/Btn";
import GearIcon from "@shared/assets/images/icons/icon-gear.svg?react";
import SunIcon from "@shared/assets/images/icons/icon-sun.svg?react";
import CrescentIcon from "@shared/assets/images/icons/icon-crescent.svg?react";

export const THEME_TOGGLER_MODES = [ "light", "dark", "system" ] as const;

export const ICONS = {
  system: GearIcon,
  light: SunIcon,
  dark: CrescentIcon,
} as const;

export interface IThemeTogglerProps {
  variant?: ICommonBtnProps["variant"];
}
