import type { ReactNode } from "react";

export interface IPreloaderProps {
  logo?: ReactNode;
}

export interface IStyledPreloaderProps {
}

export const COOKIE_CFG = {
  name: "preloader_is_shown",
  value: "1",
  expires: 7,
};
