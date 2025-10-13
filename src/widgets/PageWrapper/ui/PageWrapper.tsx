import { Outlet } from "react-router";
import { PageFooter, PageHeader, PageLayout, PageMain } from "./styles";
import type { FC } from "react";
import type { IPageWrapperProps } from "../config";

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
