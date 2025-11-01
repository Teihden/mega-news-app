import { type FC } from "react";
import type { IFooterCommentsProps } from "../config";
import * as S from "./styles";
import { Title } from "@shared/ui/Title";
import { WithIndicator } from "@entities/WithIndicator";
import { Text } from "@shared/ui/Text";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useGetCommentsQuery } from "@shared/api";
import ContentLoader from "react-content-loader";
import { defaultTheme } from "@app/styles";

/**
 * Компонент FooterComments отображает список комментариев.
 * @param props Объект с параметрами компонента.
 * @param props.comments Список комментариев, где каждый комментарий содержит свойства title и content.
 * @returns Возвращает компонент.
 */
export const FooterComments: FC<IFooterCommentsProps> = (props) => {
  const {
    comments = null,
  } = props;
  const theme = useTheme();
  const isTabletSmallUp = useMediaQuery(theme.bp.up("tabletSmall"));
  const { data, isLoading } = useGetCommentsQuery(4);

  return isTabletSmallUp
    && (
      <S.Wrapper>
        <WithIndicator variant={"primary"}>
          <Title level={2} variantLevel={4}>New Comments</Title>
        </WithIndicator>

        {isLoading && (
          <ContentLoader
            viewBox={"0 0 360 360"}
            height={360}
            width={360}
            title={"Comments"}
            backgroundColor={theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]}
            foregroundColor={theme.mode === "light" ? theme.palette.lightGray["100"] : theme.palette.dark["5"]}
            preserveAspectRatio={"none"}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <rect
                key={i}
                x={0}
                y={i * 94}
                rx={defaultTheme.default.borderRadius}
                ry={defaultTheme.default.borderRadius}
                width={360}
                height={78}
              />
            ))}
          </ContentLoader>
        )}

        {(comments ?? data?.comments?.slice(0, 4) ?? [])?.map(({ postId, body = "", user = {} }) => (
          <S.Comment key={postId}>
            <Title variantLevel={5} as={"p"} marginBlock={"0"}>
              {user?.username}
            </Title>
            <Text variant={"sm"}>
              {body}
            </Text>
          </S.Comment>
        ))}
      </S.Wrapper>
    );
};
