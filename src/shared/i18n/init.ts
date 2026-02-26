import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
    .use(initReactI18next)
    .init({
      debug: isDev,
      saveMissing: isDev,
      fallbackLng: "en",
      supportedLngs: [ "en", "ru" ],
      detection,
    });
};

export {
  i18n,
  initI18n,
};
