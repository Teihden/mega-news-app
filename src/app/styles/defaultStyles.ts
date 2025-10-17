import { palette } from "./palette";

export const defaultStyles = {
  minWidth: "360px",
  transitionDuration: ".2s",
  borderRadius: "1.5rem",
  marginBlock: "0 2rem",
  color: palette.dark["75"],
  bg: palette.white["100"],
};

export const defaultStylesDark = {
  ...defaultStyles,
  color: palette.darkGray["100"],
  bg: palette.black["100"],
};
