import { Outlet, type UIMatch, useMatches } from "react-router";
import { PageFooter, PageHeader, PageLayout, PageMain } from "./styles";
import { type FC, useEffect } from "react";
import type { IPageWrapperProps } from "../config";
import type { IRouteHandle } from "@shared/types";

/**
 * Компонент-обёртка для страниц, обеспечивающий структуру страницы с возможностью отображения шапки, основного контента и подвала.
 * @param props - Объект параметров компонента.
 * @param props.header - Опциональный элемент шапки страницы. Если не передан, шапка не отображается.
 * @param props.footer - Опциональный элемент подвала страницы. Если не передан, подвал не отображается.
 * @param props.children - Основной контент страницы. Если не передан, используется компонент <Outlet>.
 * @returns Возвращает компонент с заданной структурой страницы.
 */
export const PageWrapper: FC<IPageWrapperProps> = (props) => {
  const {
    header = null,
    footer = null,
    children = null,
  } = props;

  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];

  useEffect(() => {
    const matchWithTitle = [ ...matches ].reverse().find((m) => m.handle?.title);
    if (matchWithTitle) {
      document.title = `Mega News.${matchWithTitle.handle?.title ? ` ${matchWithTitle.handle?.title}` : ""}`;
    }
  }, [ matches ]);

  return (
    <PageLayout>
      {header && (
        <PageHeader>
          {header}
        </PageHeader>
      )}
      <PageMain>
        {children ?? <Outlet />}
      </PageMain>
      {footer && (
        <PageFooter>
          {footer}
        </PageFooter>
      )}
    </PageLayout>
  );
};
