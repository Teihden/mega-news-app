import commonEn from "./locales/en/common";
import widgetsEn from "./locales/en/widgets";
import commonRu from "./locales/ru/common";
import widgetsRu from "./locales/ru/widgets";

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
