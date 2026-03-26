import { PageWrapper } from "@widgets/pageWrapper";
import { ScrollRestoration } from "react-router";
import { Preloader } from "@shared/ui/preloader";
import LogoIcon from "@shared/assets/images/logo/logo.svg?react";
import { Header, headerMock } from "@widgets/header";
import { Footer, footerMock } from "@widgets/footer";
import { AppInitError } from "@shared/ui/appInitError";
import { Toast } from "@shared/ui/toast";
import type { TAppRouteObject } from "@shared/types";

export const innerRoutes: TAppRouteObject[] = [
  {
    index: true,
    id: "MAIN",
    handle: { titleKey: "meta:routes.main" },
    // eslint-disable-next-line jsdoc/require-jsdoc
    lazy: async () => {
      const { IndexPage } = await import("@pages/IndexPage");

      return {
        Component: IndexPage,
      };
    },
  },
  {
    path: "/typography/",
    id: "TYPOGRAPHY",
    handle: { titleKey: "meta:routes.typography" },
    // eslint-disable-next-line jsdoc/require-jsdoc
    lazy: async () => {
      const { TypographyPage } = await import("@pages/TypographyPage");

      return {
        Component: TypographyPage,
      };
    },
  },
  {
    path: "/components/",
    id: "COMPONENTS",
    handle: { titleKey: "meta:routes.components" },
    // eslint-disable-next-line jsdoc/require-jsdoc
    lazy: async () => {
      const { ComponentPage } = await import("@pages/ComponentPage");

      return {
        Component: ComponentPage,
      };
    },
  },
  {
    path: "*",
    id: "404",
    handle: { titleKey: "meta:routes.notFound" },
    // eslint-disable-next-line jsdoc/require-jsdoc
    lazy: async () => {
      const { NotFoundPage } = await import("@pages/NotFoundPage");

      return {
        Component: NotFoundPage,
      };
    },
  },
];

export const routes: TAppRouteObject[] = [
  {
    path: "/",
    id: "ROOT",
    element: (
      <>
        <PageWrapper
          header={<Header {...headerMock.header} />}
          footer={<Footer {...footerMock.footer} />}
        />
        <ScrollRestoration />
        <Preloader logo={<LogoIcon />} />
        <Toast />
      </>
    ),
    errorElement: <AppInitError />,
    children: innerRoutes,
  },
];
