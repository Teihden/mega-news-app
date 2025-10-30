import { type FC } from "react";
import type { IFooterCommentsProps } from "../config";
import * as S from "./styles";
import { Title } from "@shared/ui/Title";
import { WithIndicator } from "@entities/WithIndicator";
import { Text } from "@shared/ui/Text";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";

/**
 * Компонент FooterComments отображает список комментариев.
 * @param props Объект с параметрами компонента.
 * @param props.comments Список комментариев, где каждый комментарий содержит свойства title и content.
 * @returns Возвращает компонент.
 */
export const FooterComments: FC<IFooterCommentsProps> = (props) => {
  const {
    comments = [],
  } = props;
  const { up } = useTheme().bp;
  const isTabletSmallUp = useMediaQuery(up("tabletSmall"));

  return isTabletSmallUp
    && (
      <S.Wrapper>
        <WithIndicator variant={"primary"}>
          <Title level={2} variantLevel={4}>New Comments</Title>
        </WithIndicator>

        {comments.map(({ title, content }) => (
          <S.Comment key={title}>
            <Title variantLevel={5} as={"p"} marginBlock={"0"}>
              {title}
            </Title>
            <Text variant={"sm"}>
              {content}
            </Text>
          </S.Comment>
        ))}
      </S.Wrapper>
    );
};
