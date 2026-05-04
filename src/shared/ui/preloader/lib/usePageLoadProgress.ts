import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { PRELOADER_COOKIE_CFG } from "@shared/ui/preloader/config";
import { isPreloaderShown } from "./isPreloaderShown.ts";

/**
 * Tracks page loading progress and returns the current value.
 * @returns Current progress value.
 */
export const usePageLoadProgress = () => {
  const [ progress, setProgress ] = useState(0);
  const [ isInterval, setIsInterval ] = useState(false);

  /**
   * Starts incrementing the progress value based on the current loading state.
   */
  const startProgress = () => {
    if (isInterval) {
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          const step = Math.max(1, Math.round((90 - prev) / 10));
          return Math.min(prev + step, 90);
        }

        if (prev >= 100) {
          clearInterval(interval);
        }

        return prev;
      });
    }, 300);

    setIsInterval(true);
  };

  /**
   * Handles `document.readyState` changes and finalizes the loading progress.
   */
  const handleReadyStateChange = () => {
    if (document.readyState === "complete") {
      setProgress(100);
      setIsInterval(false);
      Cookies.set(PRELOADER_COOKIE_CFG.name, PRELOADER_COOKIE_CFG.value, { expires: PRELOADER_COOKIE_CFG.expires });
    } else {
      startProgress();
    }
  };

  useEffect(() => {
    if (isPreloaderShown()) {
      return;
    }

    handleReadyStateChange();
    document.addEventListener("readystatechange", handleReadyStateChange);

    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };
  }, []);

  return progress;
};
