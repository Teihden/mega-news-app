export type TThemeMode = "light" | "dark";

export type TLanguage = "en" | "ru";

export interface IPageLink {
  href: string;
  labelKey: string;
}

export interface IRouteHandle {
  titleKey?: string;
}
