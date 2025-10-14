import { palette } from "./palette";
import type { CSSProp } from "styled-components";

export type TThemeType = typeof defaultTheme;

/* eslint-disable @typescript-eslint/naming-convention, no-unused-vars */

declare module "styled-components" {
  export interface DefaultTheme extends TThemeType {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

/* eslint-enable @typescript-eslint/naming-convention, no-unused-vars */

export const defaultTheme = {
  palette,
  default: {
    fontFamily: `system-ui, -apple-system, "Segoe UI", "Roboto", sans-serif`,
    fontSize: "8px",
    fontWeight: 400,
    lineHeight: 1.3,
    minWidth: "360px",
    transitionDuration: ".2s",
    borderRadius: ".5rem",
    marginBlock: "0 2rem",
    color: palette.dark["75"],
    bg: palette.white["100"],
  },
  page: {
    fontSize: "2rem",
  },
  scrollbar: {
    width: "1rem",
    height: "1rem",
    trackBorderRadius: ".5rem",
    thumbBorderRadius: ".5rem",
    thumbColor: palette.dark["75"],
    trackColor: palette.white,
  },
  selection: {
    bg: palette.dark["75"],
    color: palette.white,
  },
  zIndex: {
    header: 1,
  },
};

export const lightTheme = {
  ...defaultTheme,
};

// todo: dark theme
export const darkTheme = {
  ...defaultTheme,
};
