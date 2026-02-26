import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ErrorBoundary } from "react-error-boundary";
import "@app/styles/vendors";
import { initI18n } from "@shared/i18n/init";
import { renderToStaticMarkup } from "react-dom/server";
import { AppInitError } from "@shared/ui/appInitError";
import { startMocking } from "@shared/api";
// eslint-disable-next-line import/no-unresolved
import { registerSW } from "virtual:pwa-register";

/**
 * Асинхронная функция инициализации приложения.
 * @returns Возвращает Promise<void>
 */
const appStart = async () => {
  const root = createRoot(document.getElementById("root")!);
  await startMocking();
  await initI18n();

  return root.render(
    <StrictMode>
      <ErrorBoundary fallback={<AppInitError />}>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
};

await appStart()
  .then(() => {
    if (import.meta.env.PROD) {
      registerSW({ immediate: true });
    }
    return null;
  })
  .catch((error) => {
    console.error("Application initialization error:", error);
    document.body.innerHTML = renderToStaticMarkup(<AppInitError />);
  });
