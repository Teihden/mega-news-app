import { type FC } from "react";
import * as S from "./styles";
import { Stack } from "@bedrock-layout/primitives";
import { Btn } from "@shared/ui/Btn";
import { WithIndicator } from "@entities/WithIndicator";
import { Title } from "@shared/ui/Title";
import type { IFooterPagesProps } from "@widgets/Footer/config";
import { type UIMatch, useMatches } from "react-router";
import type { IRouteHandle } from "@shared/types";
import { type DefaultTheme } from "styled-components";

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

  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const currentTitle = [ ...matches ].reverse().find((m) => m.handle?.title)?.handle?.title ?? null;

  return (
    <S.Wrapper>
      <WithIndicator variant={"primary"}>
        <Title level={2} variantLevel={4}>Pages</Title>
      </WithIndicator>

      <Stack
        gap={"size7"}
        css={`
          ${({ theme }: { theme: DefaultTheme }) => theme.bp.down("mobile")} {
            flex-flow: row wrap;
          }
        `}
      >
        {pages.map(({ href = "", label = "" }) => (
          <Btn
            key={label}
            variant={"blank"}
            text={label}
            href={href}
            isInline={true}
            isDisabled={label === currentTitle}
          />
        ))}
      </Stack>
    </S.Wrapper>
  );
};
