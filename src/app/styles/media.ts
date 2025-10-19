import type { RuleSet } from "styled-components";

export const COMMON_MEDIA_BREAKPOINTS = [
  "mobile",
  "tablet",
  "desktop",
] as const;

export const MEDIA_BREAKPOINTS = [
  ...COMMON_MEDIA_BREAKPOINTS,
] as const;

export type TMediaBreakpoints = typeof MEDIA_BREAKPOINTS[number];

/* eslint-disable jsdoc/require-jsdoc */

export const media: Record<TMediaBreakpoints, (styles: string | RuleSet<object>) => string> = {
  mobile: (styles) => `@media (max-width: 767px){${styles}}`,
  tablet: (styles) => `@media (max-width: 1280px){${styles}}`,
  desktop: (styles) => `@media (min-width: 1281px){${styles}}`,
};

/* eslint-enable jsdoc/require-jsdoc */
