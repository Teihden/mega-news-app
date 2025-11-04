import { type FC } from "react";
import type { IHeaderProps } from "../config";
import * as S from "./styles";
import { ThemeToggler } from "@features/themeToggler";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { HeaderNav } from "./HeaderNav.tsx";
import { type UIMatch, useMatches } from "react-router";
import type { IRouteHandle } from "@shared/types";
import { Btn } from "@shared/ui/btn";

/**
 * Компонент Header.
 * @param props - Свойства компонента.
 * @param props.logo - Логотип, отображаемый в заголовке.
 * @param props.pages - - Массив объектов, содержащий информацию о страницах.
 * @returns Возвращает компонент.
 */
export const Header: FC<IHeaderProps> = (props) => {
  const {
    logo = null,
    pages = [],
  } = props;
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.bp.up("tablet"));
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const currentTitle = [ ...matches ].reverse().find((m) => m.handle?.title)?.handle?.title ?? null;

  return (
    <S.Header>
      <S.HeaderInner>
        {logo && (
          <Btn
            variant={"blank"}
            isInline={true}
            href={"/"}
            title={"Return to the main page"}
            isDisabled={currentTitle === "Main"}
          >
            <S.Logo>
              {logo}
            </S.Logo>
          </Btn>
        )}
        {isTabletUp && (
          <HeaderNav pages={pages} />
        )}
      </S.HeaderInner>
      <ThemeToggler />
    </S.Header>
  );
};
