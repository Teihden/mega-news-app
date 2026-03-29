import commonEn from "./locales/en/common";
import featuresEn from "./locales/en/features";
import metaEn from "./locales/en/meta";
import pagesEn from "./locales/en/pages";
import sharedEn from "./locales/en/shared";
import widgetsEn from "./locales/en/widgets";
import commonRu from "./locales/ru/common";
import featuresRu from "./locales/ru/features";
import metaRu from "./locales/ru/meta";
import pagesRu from "./locales/ru/pages";
import sharedRu from "./locales/ru/shared";
import widgetsRu from "./locales/ru/widgets";

export const defaultNS = "common";

export const resources = {
  en: {
    common: commonEn,
    meta: metaEn,
    pages: pagesEn,
    shared: sharedEn,
    widgets: widgetsEn,
    features: featuresEn,
  },
  ru: {
    common: commonRu,
    meta: metaRu,
    pages: pagesRu,
    shared: sharedRu,
    widgets: widgetsRu,
    features: featuresRu,
  },
};

export const namespaces = [ "common", "meta", "pages", "shared", "widgets", "features" ] as const;
