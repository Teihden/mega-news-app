import { css, type RuleSet } from "styled-components";

export const COMMON_MEDIA_BREAKPOINTS = {
  desktop: "(min-width: 1281px)",
  tablet: "(max-width: 1280px)",
  mobile: "(max-width: 767px)",
} as const;

export const MEDIA_BREAKPOINTS = {
  ...COMMON_MEDIA_BREAKPOINTS,
  tabletMedium: "(max-width: 1024px)",
  tabletSmall: "(max-width: 920px)",
} as const;

export type TMediaBreakpoints = keyof typeof MEDIA_BREAKPOINTS;

/* eslint-disable jsdoc/require-jsdoc */

export const media: Record<TMediaBreakpoints, (styles: string | RuleSet<object>) => string | RuleSet<object>> = {
  desktop: (styles) => css`
    @media ${MEDIA_BREAKPOINTS.desktop}{${styles}}
  `,
  tabletMedium: (styles) => css`
    @media ${MEDIA_BREAKPOINTS.tabletMedium}{${styles}}
  `,
  tabletSmall: (styles) => css`
    @media ${MEDIA_BREAKPOINTS.tabletSmall}{${styles}}
  `,
  tablet: (styles) => css`
    @media ${MEDIA_BREAKPOINTS.tablet}{${styles}}
  `,
  mobile: (styles) => css`
    @media ${MEDIA_BREAKPOINTS.mobile}{${styles}}
  `,
};

/* eslint-enable jsdoc/require-jsdoc */
