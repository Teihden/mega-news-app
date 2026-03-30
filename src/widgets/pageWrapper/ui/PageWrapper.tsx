import { type FC, Suspense, useEffect } from "react";
import { Outlet, type UIMatch, useMatches, useNavigation } from "react-router";
import type { IPageWrapperProps } from "../config";
import type { IRouteHandle } from "@shared/types";
import * as S from "./styles";
import { Container } from "@shared/ui/container";
import { Loader } from "@shared/ui/loader";
import { useTranslation } from "react-i18next";

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

  const navigation = useNavigation();
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const { t: tCommon } = useTranslation("common");
  const { t: tMeta } = useTranslation("meta");
  const isPageLoading = navigation.state === "loading";

  useEffect(() => {
    const matchWithTitle = [ ...matches ].reverse().find((m) => m.handle?.titleKey);

    if (matchWithTitle) {
      document.title = `Mega News.${matchWithTitle.handle?.titleKey ? ` ${tMeta(matchWithTitle.handle.titleKey)}` : ""}`;
    }
  }, [ matches, tMeta ]);

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
        {isPageLoading
          ? (<Loader message={tCommon(($) => $.loading)} />)
          : (
              <Suspense fallback={<Loader message={tCommon(($) => $.loading)} />}>
                {children ?? <Outlet />}
              </Suspense>
            )}
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
