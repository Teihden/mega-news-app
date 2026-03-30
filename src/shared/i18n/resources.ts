import commonEn from "./locales/en/static/common";
import widgetsEn from "./locales/en/static/widgets";
import commonRu from "./locales/ru/static/common";
import widgetsRu from "./locales/ru/static/widgets";

export const defaultNS = "common";

export const bundledNamespaces = [ "common", "widgets" ] as const;
export const lazyNamespaces = [ "meta", "pages", "shared", "features" ] as const;
export const namespaces = [ ...bundledNamespaces, ...lazyNamespaces ] as const;

export const bundledResources = {
  en: {
    common: commonEn,
    widgets: widgetsEn,
  },
  ru: {
    common: commonRu,
    widgets: widgetsRu,
  },
};
