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
    minWidth: "360px",
    transitionDuration: ".2s",
    borderRadius: "1.5rem",
    marginBlock: "0 2rem",
    color: palette.dark["75"],
    bg: palette.white["100"],
  },
  html: {
    fontFamily: `Roboto, sans-serif`,
    fontSize: "8px",
  },
  body: {
    1: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    2: {
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: 1.43,
    },
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

export const darkTheme = {
  ...defaultTheme,
  default: {
    ...defaultTheme.default,
    color: palette.darkGray["100"],
    bg: palette.black["100"],
  },
  selection: {
    bg: palette.darkGray["100"],
    color: palette.black["100"],
  },
};
