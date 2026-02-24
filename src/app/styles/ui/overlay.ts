import { palette } from "../palette";

export const overlay = {
  zIndex: 9998,
  bg: palette.white["100"],
};

export const overlayDark = {
  ...overlay,
  bg: palette.black["100"],
};
