import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ErrorBoundary } from "react-error-boundary";

/**
 * Асинхронная функция инициализации приложения.
 * @returns Возвращает Promise<void>
 */
const appStart = async () => {
  const root = createRoot(document.getElementById("root")!);

  // todo: MSW

  return root.render(
    <StrictMode>
      {/* todo: ErrorBoundary FallbackComponent */}
      <ErrorBoundary fallback={<>Ошибка при инициализации приложения</>}>
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
    console.error("Ошибка при инициализации приложения:", error);

    // todo: ErrorInfo
    document.body.innerHTML = "<h1>Ошибка при инициализации приложения</h1>";
  });
