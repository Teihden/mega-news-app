import { defaultStyles, defaultStylesDark, palette } from "@app/styles";

export const toast = {
  minWidth: "25rem",
  borderRadius: defaultStyles.borderRadius,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: palette.gray["100"],
  background: defaultStyles.bg,
  color: defaultStyles.color,
};

export const toastDark = {
  ...toast,
  background: defaultStylesDark.bg,
  color: defaultStylesDark.color,
};
