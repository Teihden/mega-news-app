import { palette } from "../palette";

export const scrollbar = {
  width: "1rem",
  height: "1rem",
  trackBorderRadius: "1rem",
  thumbBorderRadius: "1rem",
  thumbColor: palette.dark["75"],
  trackColor: palette.white["100"],
};

export const scrollbarDark = {
  ...scrollbar,
  thumbColor: palette.darkGray["100"],
  trackColor: palette.black["100"],
};
