import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ErrorBoundary } from "react-error-boundary";
import "@app/styles/vendors";
import { renderToStaticMarkup } from "react-dom/server";
import { AppInitError } from "@shared/ui/AppInitError";

/**
 * Асинхронная функция инициализации приложения.
 * @returns Возвращает Promise<void>
 */
const appStart = async () => {
  const root = createRoot(document.getElementById("root")!);

  // todo: MSW

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
    return null;
  })
  .catch((error) => {
    console.error("Application initialization error:", error);
    document.body.innerHTML = renderToStaticMarkup(<AppInitError />);
  });
