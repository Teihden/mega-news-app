import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "@app/routes";

const router = createBrowserRouter(routes);

/**
 * Компонент BrowserRouterProvider.
 * Этот компонент используется для предоставления контекста маршрутизатора (Router) в приложении.
 * Он оборачивает RouterProvider и передает ему объект маршрутов (router).
 * Предназначен для облегчения интеграции маршрутизации в приложение React.
 * @returns BrowserRouterProvider
 */
export const BrowserRouterProvider: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
