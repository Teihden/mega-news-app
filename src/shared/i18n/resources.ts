import commonEn from "./locales/en/common";
import featuresEn from "./locales/en/features";
import pagesEn from "./locales/en/pages";
import sharedEn from "./locales/en/shared";
import widgetsEn from "./locales/en/widgets";
import commonRu from "./locales/ru/common";
import featuresRu from "./locales/ru/features";
import pagesRu from "./locales/ru/pages";
import sharedRu from "./locales/ru/shared";
import widgetsRu from "./locales/ru/widgets";

export const defaultNS = "common";

export const resources = {
  en: {
    common: commonEn,
    pages: pagesEn,
    shared: sharedEn,
    widgets: widgetsEn,
    features: featuresEn,
  },
  ru: {
    common: commonRu,
    pages: pagesRu,
    shared: sharedRu,
    widgets: widgetsRu,
    features: featuresRu,
  },
} as const;

export const namespaces = [ "common", "pages", "shared", "widgets", "features" ] as const;
