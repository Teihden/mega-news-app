import type { RouteObject } from "react-router";

export type TThemeMode = "light" | "dark";

export type TLanguage = "en" | "ru";

export interface IPageLink {
  href: string;
  labelKey: string;
}

export interface IRouteHandle {
  titleKey?: string;
}

export type TAppRouteObject = RouteObject & {
  handle?: IRouteHandle;
  children?: TAppRouteObject[];
};
