import { PageWrapper } from "@widgets/pageWrapper";
import { ScrollRestoration } from "react-router";
import { Preloader } from "@shared/ui/preloader";
import LogoIcon from "@shared/assets/images/logo/logo.svg?react";
import { ComponentPage, IndexPage, NotFoundPage, TypographyPage } from "@pages/index";
import { Header, headerMock } from "@widgets/header";
import { Footer, footerMock } from "@widgets/footer";
import { AppInitError } from "@shared/ui/appInitError";
import { Toast } from "@shared/ui/toast";

export const innerRoutes = [
  {
    index: true,
    id: "MAIN",
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
