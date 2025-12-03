import { palette } from "../palette";

export const placeholder = {
  bg: palette.gray["100"],
  foregroundColor: palette.lightGray["100"],
};

export const placeholderDark = {
  ...placeholder,
  bg: palette.washDark["100"],
  foregroundColor: palette.dark["5"],
};
