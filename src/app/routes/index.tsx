/* eslint-disable jsdoc/require-jsdoc */
import { PageWrapper } from "@widgets/pageWrapper";
import { ScrollRestoration } from "react-router";
import { Preloader } from "@shared/ui/preloader";
import LogoIcon from "@shared/assets/images/logo/logo.svg?react";
import { Header, headerMock } from "@widgets/header";
import { Footer, footerMock } from "@widgets/footer";
import { AppInitError } from "@shared/ui/appInitError";
import { Toast } from "@shared/ui/toast";
import type { IMenuRoute, TAppRouteObject } from "@shared/types";

export const innerRoutes: TAppRouteObject[] = [
  {
    index: true,
    id: "MAIN",
    handle: {
      titleKey: ($) => $.routes.main,
      navLabelKey: ($) => $.header.main,
      showInMenu: true,
    },
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
    handle: {
      titleKey: ($) => $.routes.typography,
      navLabelKey: ($) => $.header.typography,
      showInMenu: true,
    },
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
    handle: {
      titleKey: ($) => $.routes.components,
      navLabelKey: ($) => $.header.components,
      showInMenu: true,
    },
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
    handle: {
      titleKey: ($) => $.routes.notFound,
      navLabelKey: ($) => $.header.pages,
      showInMenu: false,
    },
    lazy: async () => {
      const { NotFoundPage } = await import("@pages/NotFoundPage");

      return {
        Component: NotFoundPage,
      };
    },
  },
];

const pages: IMenuRoute[] = innerRoutes.flatMap((route) => {
  if (!route.id || !route.handle?.showInMenu || !route.handle.navLabelKey) {
    return [];
  }

  return [
    {
      id: route.id,
      href: route.index ? "/" : (route.path ?? "/"),
      navLabelKey: route.handle.navLabelKey,
    },
  ];
});

export const routes: TAppRouteObject[] = [
  {
    path: "/",
    id: "ROOT",
    element: (
      <>
        <PageWrapper
          header={<Header {...headerMock.header} pages={pages} />}
          footer={<Footer {...footerMock.footer} pages={pages} />}
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
