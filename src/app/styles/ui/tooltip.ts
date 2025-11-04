import { defaultStyles, palette } from "@app/styles";

export const tooltip = {
  bg: palette.white["100"],
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: palette.white["100"],
  borderRadius: defaultStyles.borderRadius,
  padding: "2rem",
  boxShadow: palette.shadow["2"],
};

export const tooltipDark = {
  ...tooltip,
  bg: palette.black["100"],
  borderColor: palette.gray["100"],
  boxShadow: "none",
};
