import { palette } from "../palette";

export const scrollbar = {
  width: "1rem",
  height: "1rem",
  trackBorderRadius: ".5rem",
  thumbBorderRadius: ".5rem",
  thumbColor: palette.dark["75"],
  trackColor: palette.white,
}

export const scrollbarDark = {
  ...scrollbar,
  thumbColor: palette.darkGray["100"],
  trackColor: palette.black["100"],
}

