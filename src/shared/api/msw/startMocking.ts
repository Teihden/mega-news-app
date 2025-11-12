import type { StartOptions } from "msw/browser";

const MSW_PARAMS: StartOptions = {
  onUnhandledRequest: "bypass",
};

/**
 * Асинхронная функция, запускающая мок-сервер в режиме разработки.
 * @returns Если режим - разработка, возвращает промис, который разрешается объектом `ServiceWorkerRegistration`.
 */
export const startMocking = async (): Promise<void | ServiceWorkerRegistration> => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./browser");
    return worker.start(MSW_PARAMS);
  }
};
