import type { RouteObject } from "react-router";
import type { resources } from "@shared/i18n/resources";

export type TThemeMode = "light" | "dark";

export type TLanguage = "en" | "ru";

export type TMetaTitleKey = (src: (typeof resources)["en"]["meta"]) => string;
export type TMetaDescriptionKey = (src: (typeof resources)["en"]["meta"]) => string;

export type TWidgetPageLabelKey = (src: (typeof resources)["en"]["widgets"]) => string;

export interface IRouteHandle {
  titleKey?: TMetaTitleKey;
  descriptionKey?: TMetaDescriptionKey;
  navLabelKey?: TWidgetPageLabelKey;
  showInMenu?: boolean;
}

export type TAppRouteObject = RouteObject & {
  handle?: IRouteHandle;
  children?: TAppRouteObject[];
};

export interface IMenuRoute {
  id: string;
  href: string;
  navLabelKey: TWidgetPageLabelKey;
}

export type TNullValue = null | undefined | void;
