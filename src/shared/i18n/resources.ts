import commonEn from "./locales/en/static/common";
import featuresEn from "./locales/en/static/features";
import metaEn from "./locales/en/static/meta";
import widgetsEn from "./locales/en/static/widgets";
import commonRu from "./locales/ru/static/common";
import featuresRu from "./locales/ru/static/features";
import metaRu from "./locales/ru/static/meta";
import widgetsRu from "./locales/ru/static/widgets";

export const defaultNS = "common";

export const bundledNS = [ "common", "widgets", "meta", "features" ] as const;

export const bundledResources = {
  en: {
    common: commonEn,
    features: featuresEn,
    meta: metaEn,
    widgets: widgetsEn,
  },
  ru: {
    common: commonRu,
    features: featuresRu,
    meta: metaRu,
    widgets: widgetsRu,
  },
} as const;
