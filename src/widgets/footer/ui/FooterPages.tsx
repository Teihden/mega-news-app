import { type FC } from "react";
import * as S from "./styles";
import { Stack } from "@bedrock-layout/primitives";
import { Btn } from "@shared/ui/btn";
import { WithIndicator } from "@entities/withIndicator";
import { Title } from "@shared/ui/title";
import type { IFooterPagesProps } from "@widgets/footer/config";
import { Link, type UIMatch, useMatches } from "react-router";
import { type DefaultTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import type { IRouteHandle } from "@shared/types";

/**
 * Компонент FooterPages используется для отображения списка страниц в футере.
 * @param props Объект с параметрами компонента.
 * @param props.pages - Массив объектов, содержащий информацию о страницах.
 * @returns Возвращает компонент.
 */
export const FooterPages: FC<IFooterPagesProps> = (props) => {
  const {
    pages = [],
  } = props;
  const { t } = useTranslation([ "widgets" ]);
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const currentNavRouteId = [ ...matches ].reverse().find((match) => match.handle?.showInMenu)?.id ?? null;

  return (
    <S.Wrapper>
      <WithIndicator variant={"primary"}>
        <Title level={2} variantLevel={4}>{t(($) => $.footer.pages)}</Title>
      </WithIndicator>

      <Stack
        gap={"size7"}
        css={`
          ${({ theme }: { theme: DefaultTheme }) => theme.bp.down("mobile")} {
            flex-flow: row wrap;
          }
        `}
      >
        {pages.map(({ id, href, navLabelKey }) => (
          <Btn
            key={id}
            as={Link}
            variant={"blank"}
            text={t(navLabelKey)}
            to={href}
            isInline={true}
            isDisabled={id === currentNavRouteId}
          />
        ))}
      </Stack>
    </S.Wrapper>
  );
};
