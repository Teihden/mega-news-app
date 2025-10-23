import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { COOKIE_CFG } from "@shared/ui/Preloader/config";

/**
 * Хук `usePageLoadProgress` отслеживает прогресс загрузки страницы и возвращает его значение.
 * @returns Число прогресса
 */
export const usePageLoadProgress = () => {
  const [ progress, setProgress ] = useState(0);
  const [ isInterval, setIsInterval ] = useState(false);

  /**
   * Функция startProgress запускает процесс обновления прогресса, повышая его значение с шагом,
   * рассчитанным на основе текущего прогресса.
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
   * Функция handleReadyStateChange обрабатывает изменения состояния document.readyState.
   */
  const handleReadyStateChange = () => {
    if (document.readyState === "complete") {
      setProgress(100);
      setIsInterval(false);
      Cookies.set(COOKIE_CFG.name, COOKIE_CFG.value, { expires: COOKIE_CFG.expires });
    } else {
      startProgress();
    }
  };

  useEffect(() => {
    if (Cookies.get(COOKIE_CFG.name) === COOKIE_CFG.value) {
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
