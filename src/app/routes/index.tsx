import { PageWrapper } from "@widgets/PageWrapper";
import { ScrollRestoration } from "react-router";
import { Preloader } from "@shared/ui/Preloader";
import LogoIcon from "@shared/assets/images/logo/logo.svg?react";
import { ComponentPage, IndexPage, NotFoundPage, TypographyPage } from "@pages/index";

export const routes = [
  {
    path: "/",
    id: "ROOT",
    element: (
      <>
        <PageWrapper />
        <ScrollRestoration />
        <Preloader
          logo={<LogoIcon />}
        />
      </>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        id: "INDEX",
        handle: { title: "Main" },
        element: <IndexPage />,
      },
      {
        path: "/typography",
        id: "TYPOGRAPHY",
        handle: { title: "Typography" },
        element: <TypographyPage />,
      },
      {
        path: "/components",
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
    ],
  },
];
