import { palette } from "../palette";

export const header = {
  zIndex: 1,
  paddingBlock: {
    desktop: "3rem 2rem",
    tablet: "2rem 3rem",
    mobile: "3rem 2rem",
  },
  bg: palette.white["100"],
};

export const headerDark = {
  ...header,
  bg: palette.washDark["100"],
};
