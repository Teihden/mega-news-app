import { PageWrapper } from "@widgets/PageWrapper";
import { ScrollRestoration } from "react-router";
import { NotFoundPage } from "@pages/NotFoundPage.tsx";
import { IndexPage } from "@pages/IndexPage.tsx";
import { TypoPage } from "@pages/TypoPage.tsx";

export const routes = [
  {
    path: "/",
    id: "ROOT",
    element: (
      <>
        <PageWrapper />
        <ScrollRestoration />
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
        path: "/typo",
        id: "TYPO",
        handle: { title: "Typo" },
        element: <TypoPage />,
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
