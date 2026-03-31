import commonEn from "./locales/en/common";
import featuresEn from "./locales/en/features";
import metaEn from "./locales/en/meta";
import widgetsEn from "./locales/en/widgets";
import commonRu from "./locales/ru/common";
import featuresRu from "./locales/ru/features";
import metaRu from "./locales/ru/meta";
import widgetsRu from "./locales/ru/widgets";

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
