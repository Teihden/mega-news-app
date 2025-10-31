import { PageWrapper } from "@widgets/PageWrapper";
import { ScrollRestoration } from "react-router";
import { Preloader } from "@shared/ui/Preloader";
import LogoIcon from "@shared/assets/images/logo/logo.svg?react";
import { ComponentPage, IndexPage, NotFoundPage, TypographyPage } from "@pages/index";
import { Header } from "@widgets/Header";
import { Footer, footerMock } from "@widgets/Footer";
import { AppInitError } from "@shared/ui/AppInitError";

export const innerRoutes = [
  {
    index: true,
    id: "INDEX",
    handle: { title: "Main" },
    element: <IndexPage />,
  },
  {
    path: "/typography/",
    id: "TYPOGRAPHY",
    handle: { title: "Typography" },
    element: <TypographyPage />,
  },
  {
    path: "/components/",
    id: "COMPONENTS",
    handle: { title: "Components" },
    element: <ComponentPage />,
  },
  {
    path: "*",
    id: "404",
    handle: { title: "404" },
    element: <NotFoundPage />,
  },
];

export const routes = [
  {
    path: "/",
    id: "ROOT",
    element: (
      <>
        <PageWrapper
          header={<Header />}
          footer={<Footer {...footerMock.footer} />}
        />
        <ScrollRestoration />
        <Preloader
          logo={<LogoIcon />}
        />
      </>
    ),
    errorElement: <AppInitError />,
    children: innerRoutes,
  },
];
