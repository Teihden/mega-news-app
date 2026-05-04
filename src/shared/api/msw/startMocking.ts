import type { StartOptions } from "msw/browser";

const MSW_PARAMS: StartOptions = {
  onUnhandledRequest: "bypass",
};

/**
 * Starts the mock service worker in development mode.
 * @returns A promise resolving to `ServiceWorkerRegistration` in development mode.
 */
export const startMocking = async (): Promise<void | ServiceWorkerRegistration> => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./browser");
    return worker.start(MSW_PARAMS);
  }
};
