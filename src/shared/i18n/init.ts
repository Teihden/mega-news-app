import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { bundledResources, defaultNS, namespaces } from "./resources";

const isDev = import.meta.env.DEV;

const detection = {
  order: [ "localStorage", "navigator", "htmlTag" ],
  lookupLocalStorage: "i18nextLng",
  caches: [ "localStorage" ],
};

/**
 * Инициализирует библиотеку интернационализации (i18n) с использованием детектора языка и React интеграции.
 * Настраивает параметры для отладки, отсутствующих переводов, резервного языка и поддерживаемых языков.
 * @returns Асинхронная операция инициализации i18n.
 */
const initI18n = async () => {
  return await i18n
    .use(LanguageDetector)
    .use(resourcesToBackend((language: string, namespace: string) => {
      return import(`./locales/${language}/${namespace}.ts`).then((module) => module.default);
    }))
    .on("failedLoading", (lng, ns, msg) => {
      console.error(`[i18n] Failed to load namespace "${ns}" for language "${lng}": ${msg}`);
    })
    .use(initReactI18next)
    .init({
      debug: isDev,
      fallbackLng: "en",
      supportedLngs: [ "en", "ru" ],
      detection,
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
