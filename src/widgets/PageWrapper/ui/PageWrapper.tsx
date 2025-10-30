import { Outlet, type UIMatch, useMatches } from "react-router";
import { type FC, useEffect } from "react";
import type { IPageWrapperProps } from "../config";
import type { IRouteHandle } from "@shared/types";
import * as S from "./styles";
import { Container } from "@shared/ui/Container";

/**
 * Компонент-обёртка для страниц, обеспечивающий структуру страницы с возможностью отображения шапки, основного контента и подвала.
 * @param props - Объект параметров компонента.
 * @param props.header - Опциональный элемент шапки страницы. Если не передан, шапка не отображается.
 * @param props.footer - Опциональный элемент подвала страницы. Если не передан, подвал не отображается.
 * @param props.children - Основной контент страницы. Если не передан, используется компонент <Outlet>.
 * @returns Компонент.
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
    <S.Layout>
      {header && (
        <S.Header>
          <Container>
            {header}
          </Container>
        </S.Header>
      )}
      <S.Main>
        {children ?? <Outlet />}
      </S.Main>
      {footer && (
        <S.Footer>
          <Container>
            {footer}
          </Container>
        </S.Footer>
      )}
    </S.Layout>
  );
};
