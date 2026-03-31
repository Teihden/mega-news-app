import { type FC } from "react";
import type { IHeaderProps } from "../config";
import * as S from "./styles";
import { ThemeToggler } from "@features/themeToggler";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { HeaderNav } from "./HeaderNav";
import { HeaderMenu } from "./HeaderMenu";
import { Link, type UIMatch, useMatches } from "react-router";
import { Btn } from "@shared/ui/btn";
import { LanguageToggler } from "@features/languageToggler";
import { useTranslation } from "react-i18next";
import type { IRouteHandle } from "@shared/types";

/**
 * Компонент Header.
 * @param props - Свойства компонента.
 * @param props.logo - Логотип, отображаемый в заголовке.
 * @param props.pages - - Массив объектов, содержащий информацию о страницах.
 * @returns Компонент.
 */
export const Header: FC<IHeaderProps> = (props) => {
  const {
    logo = null,
    pages = [],
  } = props;
  const theme = useTheme();
  const { t } = useTranslation([ "widgets" ]);
  const isTabletUp = useMediaQuery(theme.bp.up("tablet"));
  const isTabletDown = useMediaQuery(theme.bp.down("tablet"));
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const currentNavRouteId = [ ...matches ].reverse().find((match) => match.handle?.showInMenu)?.id ?? null;

  return (
    <S.Header>
      <S.HeaderLeftInner>
        {isTabletDown && (
          <HeaderMenu pages={pages} />
        )}
        {logo && (
          <Btn
            as={Link}
            variant={"blank"}
            isInline={true}
            to={"/"}
            title={t(($) => $.header.returnToMainPage)}
            isDisabled={currentNavRouteId === "MAIN"}
          >
            <S.Logo>
              {logo}
            </S.Logo>
          </Btn>
        )}
        {isTabletUp && (
          <HeaderNav pages={pages} />
        )}
      </S.HeaderLeftInner>
      <S.HeaderRightInner>
        <LanguageToggler />
        <ThemeToggler />
      </S.HeaderRightInner>
    </S.Header>
  );
};
