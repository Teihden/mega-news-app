import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import { bundledResources, defaultNS, namespaces } from "./resources";

const isDev = import.meta.env.DEV;

const detection = {
  order: [ "localStorage", "navigator", "htmlTag" ],
  lookupLocalStorage: "i18nextLng",
  caches: [ "localStorage" ],
};

const lazyResourcesBackend = resourcesToBackend((language: string, namespace: string) => {
  return import(`./locales/${language}/lazy/${namespace}.ts`).then((module) => module.default);
});

/**
 * Инициализирует библиотеку интернационализации (i18n) с использованием детектора языка и React интеграции.
 * Настраивает параметры для отладки, отсутствующих переводов, резервного языка и поддерживаемых языков.
 * @returns Асинхронная операция инициализации i18n.
 */
const initI18n = async () => {
  return await i18n
    .use(LanguageDetector)
    .use(ChainedBackend)
    .on("failedLoading", (lng, ns, msg) => {
      console.error(`[i18n] Failed to load namespace "${ns}" for language "${lng}": ${msg}`);
    })
    .use(initReactI18next)
    .init({
      debug: isDev,
      fallbackLng: "en",
      supportedLngs: [ "en", "ru" ],
      detection,
      backend: {
        backends: [ LocalStorageBackend, lazyResourcesBackend ],
        backendOptions: [
          {
            prefix: "i18next_res_",
            defaultVersion: "v1",
            expirationTime: 60 * 60 * 1000 * 24 * 7, // 7 days
          },
          {},
        ],
      },
      resources: bundledResources,
      ns: [ ...namespaces ],
      defaultNS,
      cleanCode: true,
      partialBundledLanguages: true,
      react: {
        useSuspense: true,
      },
    });
};

export {
  i18n,
  initI18n,
};
