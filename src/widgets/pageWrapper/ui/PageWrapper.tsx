import { type FC, Suspense } from "react";
import { Outlet, type UIMatch, useLocation, useMatches, useNavigation } from "react-router";
import {
  PAGE_WRAPPER_DEFAULT_DESCRIPTION,
  PAGE_WRAPPER_SITE_NAME,
  PAGE_WRAPPER_SITE_URL,
  PAGE_WRAPPER_SOCIAL_IMAGE_URL,
  type IPageWrapperProps,
} from "../config";
import type { IRouteHandle } from "@shared/types";
import * as S from "./styles";
import { Container } from "@shared/ui/container";
import { Loader } from "@shared/ui/loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useAppStore } from "@app/store/useAppStore";

/**
 * Provides the shared page layout with optional header, footer, and routed content.
 * @param props - Component props.
 * @param props.header - Optional page header content.
 * @param props.footer - Optional page footer content.
 * @param props.children - Page content. Falls back to <Outlet /> when omitted.
 * @returns Page wrapper component.
 */
export const PageWrapper: FC<IPageWrapperProps> = (props) => {
  const {
    header = null,
    footer = null,
    children = null,
  } = props;

  const navigation = useNavigation();
  const location = useLocation();
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const language = useAppStore(({ language }) => language);
  const { t: tCommon } = useTranslation("common");
  const { t: tMeta } = useTranslation("meta");
  const isPageLoading = navigation.state === "loading";
  const matchWithTitle = [ ...matches ].reverse().find((m) => m.handle?.titleKey);
  const pageTitle = matchWithTitle?.handle?.titleKey
    ? tMeta(matchWithTitle.handle.titleKey)
    : PAGE_WRAPPER_SITE_NAME;
  const pageDescription = matchWithTitle?.handle?.descriptionKey
    ? tMeta(matchWithTitle.handle.descriptionKey)
    : PAGE_WRAPPER_DEFAULT_DESCRIPTION;
  const canonicalUrl = `${PAGE_WRAPPER_SITE_URL}${location.pathname}`;

  return (
    <S.Layout>
      <Helmet
        defaultTitle={"Mega News"}
        htmlAttributes={{ lang: language }}
        titleTemplate={"Mega News | %s"}
      >
        <title>{pageTitle}</title>
        <meta name={"description"} content={pageDescription} />
        <link rel={"canonical"} href={canonicalUrl} />
        <meta property={"og:site_name"} content={PAGE_WRAPPER_SITE_NAME} />
        <meta property={"og:title"} content={`Mega News. ${pageTitle}`} />
        <meta property={"og:description"} content={pageDescription} />
        <meta property={"og:type"} content={"website"} />
        <meta property={"og:url"} content={canonicalUrl} />
        <meta property={"og:image"} content={PAGE_WRAPPER_SOCIAL_IMAGE_URL} />
        <meta property={"og:image:width"} content={"1024"} />
        <meta property={"og:image:height"} content={"1024"} />
        <meta name={"twitter:card"} content={"summary_large_image"} />
        <meta name={"twitter:title"} content={`Mega News. ${pageTitle}`} />
        <meta name={"twitter:description"} content={pageDescription} />
        <meta name={"twitter:image"} content={PAGE_WRAPPER_SOCIAL_IMAGE_URL} />
      </Helmet>
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
