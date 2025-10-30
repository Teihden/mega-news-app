import { createStyledBreakpointsTheme } from "styled-breakpoints";

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

export const { breakpoints } = createStyledBreakpointsTheme({
  breakpoints: {
    desktop: "1920px",
    tablet: "1280px",
    tabletMedium: "1024px",
    tabletSmall: "920px",
    mobile: "767px",
  },
});
