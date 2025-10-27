import { palette } from "@app/styles/palette";
import { defaultStyles } from "../defaultStyles";

export const input = {
  fontSize: "1.5rem",
  lineHeight: 1,
  borderRadius: defaultStyles.borderRadius,
  borderWidth: "1px",
  sizes: {
    sm: {
      height: "5rem",
      paddingInline: "1.75rem",
    },
    md: {
      height: "6rem",
      paddingInline: "2rem",
    },
    lg: {
      height: "6.5rem",
      paddingInline: "2.25rem",
    },
  },
  variants: {
    primary: {
      color: palette.black["100"],
      placeholderColor: palette.black["75"],
      borderColor: palette.gray["100"],
      bg: palette.gray["100"],
      hover: {
        color: palette.black["100"],
        placeholderColor: palette.black["75"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
      focus: {
        color: palette.black["100"],
        placeholderColor: palette.black["75"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
      invalid: {
        color: palette.primary["100"],
        placeholderColor: palette.primary["75"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
      disabled: {
        color: palette.dark["75"],
        placeholderColor: palette.dark["50"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
    },
    secondary: {
      color: palette.black["100"],
      placeholderColor: palette.black["75"],
      borderColor: palette.white["100"],
      bg: palette.white["100"],
      hover: {
        color: palette.black["100"],
        placeholderColor: palette.black["75"],
        borderColor: palette.white["100"],
        bg: palette.white["100"],
      },
      focus: {
        color: palette.black["100"],
        placeholderColor: palette.black["75"],
        borderColor: palette.white["100"],
        bg: palette.white["100"],
      },
      invalid: {
        color: palette.primary["100"],
        placeholderColor: palette.primary["75"],
        borderColor: palette.white["100"],
        bg: palette.white["100"],
      },
      disabled: {
        color: palette.dark["75"],
        placeholderColor: palette.dark["50"],
        borderColor: palette.white["100"],
        bg: palette.white["100"],
      },
    },
  },
};

// todo
export const inputDark = {
  ...input,
};
