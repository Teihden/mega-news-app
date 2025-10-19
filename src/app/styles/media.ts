import type { RuleSet } from "styled-components";

export const COMMON_MEDIA_BREAKPOINTS = {
  desktop: "(min-width: 1281px)",
  tablet: "(max-width: 1280px)",
  mobile: "(max-width: 767px)",
} as const;

export const MEDIA_BREAKPOINTS = {
  ...COMMON_MEDIA_BREAKPOINTS,
} as const;

export type TMediaBreakpoints = keyof typeof MEDIA_BREAKPOINTS;

/* eslint-disable jsdoc/require-jsdoc */

export const media: Record<TMediaBreakpoints, (styles: string | RuleSet<object>) => string> = {
  desktop: (styles) => `@media ${COMMON_MEDIA_BREAKPOINTS.desktop}{${styles}}`,
  tablet: (styles) => `@media ${COMMON_MEDIA_BREAKPOINTS.tablet}{${styles}}`,
  mobile: (styles) => `@media ${COMMON_MEDIA_BREAKPOINTS.mobile}{${styles}}`,
};

/* eslint-enable jsdoc/require-jsdoc */
