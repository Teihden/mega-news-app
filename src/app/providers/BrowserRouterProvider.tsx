import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "@app/routes";

const router = createBrowserRouter(routes);

/**
 * Provides the configured browser router to the application.
 * @returns Browser router provider component.
 */
export const BrowserRouterProvider: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
