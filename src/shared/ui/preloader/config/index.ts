import type { FC, ReactNode } from "react";
import { Preloader } from "../ui/styles";

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

export interface IPreloader extends FC<IPreloaderProps> {
  Preloader: typeof Preloader;
}
