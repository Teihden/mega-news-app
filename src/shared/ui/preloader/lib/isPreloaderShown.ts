import Cookies from "js-cookie";
import { PRELOADER_COOKIE_CFG } from "../config";

/**
 * Переменная isPreloaderShown указывает, отображается ли в данный момент прелоадер.
 * Значение определяется на основе данных из cookies, сравнивая название и значение,
 * заданные в конфигурации PRELOADER_COOKIE_CFG.
 * @returns Булево состояние
 */
export const isPreloaderShown = () => {
  return Cookies.get(PRELOADER_COOKIE_CFG.name) === PRELOADER_COOKIE_CFG.value;
};
