import { palette } from "../palette";

export const overlay = {
  zIndex: 9999,
  bg: palette.white["100"],
};

export const overlayDark = {
  ...overlay,
  bg: palette.black["100"],
};
