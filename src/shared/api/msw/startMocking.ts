import type { StartOptions } from "msw/browser";

const MSW_PARAMS: StartOptions = {
  onUnhandledRequest: "bypass",
};

/**
 * Асинхронная функция, запускающая мок-сервер в режиме разработки.
 * Если приложение запускается в режиме разработки (`import.meta.env.MODE === "development"`),
 * импортирует модуль браузерного воркера и запускает его с заданными параметрами `MSW_PARAMS`.
 * @returns Если режим - разработка, возвращает промис, который разрешается объектом `ServiceWorkerRegistration`.
 */
export const startMocking = async (): Promise<void | ServiceWorkerRegistration> => {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./browser");
    return worker.start(MSW_PARAMS);
  }
};
