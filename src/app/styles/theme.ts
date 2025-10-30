import { palette } from "./palette";
import type { CSSProp } from "styled-components";
import { breakpoints as bp } from "./media";
import { defaultStyles, defaultStylesDark } from "./defaultStyles";
import {
  body,
  btn,
  btnDark,
  container,
  footer,
  footerDark,
  header,
  headerDark,
  html,
  main,
  scrollbar,
  scrollbarDark,
  section,
  selection,
  selectionDark,
  subTitle,
  title,
  text,
  overlay,
  overlayDark,
  input,
  inputDark,
} from "./ui";

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
  mode: "default",
  palette,
  bp,
  default: defaultStyles,
  scrollbar,
  selection,
  html,
  body,
  main,
  header,
  footer,
  container,
  section,
  title,
  subTitle,
  btn,
  text,
  overlay,
  input,
};

export const lightTheme = {
  ...defaultTheme,
  mode: "light",
};

export const darkTheme = {
  ...defaultTheme,
  mode: "dark",
  default: defaultStylesDark,
  scrollbar: scrollbarDark,
  selection: selectionDark,
  header: headerDark,
  footer: footerDark,
  btn: btnDark,
  overlay: overlayDark,
  input: inputDark,
};
