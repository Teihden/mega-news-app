import { palette } from "@app/styles/palette";
import { defaultStyles } from "../defaultStyles";

export const btn = {
  fontSize: "1.75rem",
  lineHeight: 1.43,
  paddingInline: "2rem",
  borderRadius: defaultStyles.borderRadius,
  borderWidth: "1px",
  outline: defaultStyles.outline,
  sizes: {
    sm: {
      gap: "1rem",
      height: "5rem",
    },
    md: {
      gap: "1.5rem",
      height: "6rem",
    },
    lg: {
      gap: "1.75rem",
      height: "6.5rem",
    },
  },
  variants: {
    primary: {
      color: palette.white["100"],
      iconColor: palette.white["100"],
      borderColor: palette.primary["75"],
      bg: palette.primary["75"],
      hover: {
        color: palette.white["100"],
        iconColor: palette.white["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["100"],
      },
      active: {
        color: palette.white["100"],
        iconColor: palette.white["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["100"],
      },
      disabled: {
        color: palette.dark["75"],
        iconColor: palette.dark["50"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
    },
    secondary: {
      color: palette.dark["100"],
      iconColor: palette.dark["100"],
      borderColor: palette.gray["100"],
      bg: palette.gray["100"],
      hover: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
      active: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
      disabled: {
        color: palette.dark["75"],
        iconColor: palette.dark["75"],
        borderColor: palette.gray["50"],
        bg: palette.gray["50"],
      },
    },
    outline: {
      color: palette.primary["75"],
      iconColor: palette.primary["75"],
      borderColor: palette.stroke["100"],
      bg: palette.transparent,
      hover: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["10"],
      },
      active: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["10"],
      },
      disabled: {
        color: palette.dark["75"],
        iconColor: palette.dark["50"],
        borderColor: palette.stroke["100"],
        bg: palette.transparent,
      },
    },
    blank: {
      color: palette.dark["50"],
      iconColor: palette.dark["50"],
      borderColor: palette.transparent,
      bg: palette.transparent,
      hover: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.transparent,
        bg: palette.transparent,
      },
      active: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.transparent,
        bg: palette.transparent,
      },
      disabled: {
        color: palette.dark["25"],
        iconColor: palette.dark["25"],
        borderColor: palette.transparent,
        bg: palette.transparent,
      },
    },
  },
};

export const btnDark = {
  ...btn,
  variants: {
    primary: {
      color: palette.darkGray["100"],
      iconColor: palette.darkGray["100"],
      borderColor: palette.primary["75"],
      bg: palette.primary["75"],
      hover: {
        color: palette.darkGray["100"],
        iconColor: palette.darkGray["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["100"],
      },
      active: {
        color: palette.darkGray["100"],
        iconColor: palette.darkGray["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["100"],
      },
      disabled: {
        color: palette.dark["75"],
        iconColor: palette.dark["50"],
        borderColor: palette.gray["100"],
        bg: palette.gray["100"],
      },
    },
    secondary: btn.variants.secondary,
    outline: {
      color: palette.darkGray["100"],
      iconColor: palette.darkGray["100"],
      borderColor: palette.stroke["100"],
      bg: palette.transparent,
      hover: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["10"],
      },
      active: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.primary["100"],
        bg: palette.primary["10"],
      },
      disabled: {
        color: palette.darkGray["75"],
        iconColor: palette.darkGray["50"],
        borderColor: palette.stroke["100"],
        bg: palette.transparent,
      },
    },
    blank: {
      color: palette.darkGray["100"],
      iconColor: palette.darkGray["100"],
      borderColor: palette.transparent,
      bg: palette.transparent,
      hover: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.transparent,
        bg: palette.transparent,
      },
      active: {
        color: palette.primary["100"],
        iconColor: palette.primary["100"],
        borderColor: palette.transparent,
        bg: palette.transparent,
      },
      disabled: {
        color: palette.darkGray["75"],
        iconColor: palette.darkGray["75"],
        borderColor: palette.transparent,
        bg: palette.transparent,
      },
    },
  },
};
