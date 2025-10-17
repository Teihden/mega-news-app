import { palette } from "../palette";

export const selection = {
  bg: palette.dark["75"],
  color: palette.white,
}

export const selectionDark = {
  ...selection,
  bg: palette.darkGray["100"],
  color: palette.black["100"],
}
