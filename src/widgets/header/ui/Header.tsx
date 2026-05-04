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
 * Renders the application header with logo, navigation, and feature toggles.
 * @param props - Component props.
 * @param props.logo - Logo content rendered in the header.
 * @param props.pages - Navigation pages rendered in the header navigation.
 * @returns Header component.
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
