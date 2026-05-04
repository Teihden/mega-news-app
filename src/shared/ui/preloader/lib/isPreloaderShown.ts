import Cookies from "js-cookie";
import { PRELOADER_COOKIE_CFG } from "../config";

/**
 * Checks whether the preloader has already been shown.
 * The value is derived from cookies using the configured preloader cookie name and value.
 * @returns Boolean state indicating whether the preloader was shown.
 */
export const isPreloaderShown = () => {
  return Cookies.get(PRELOADER_COOKIE_CFG.name) === PRELOADER_COOKIE_CFG.value;
};
