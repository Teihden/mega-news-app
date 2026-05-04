import { type FC } from "react";
import type { IFooterCommentsProps } from "../config";
import * as S from "./styles";
import { Title } from "@shared/ui/title";
import { WithIndicator } from "@entities/withIndicator";
import { Text } from "@shared/ui/text";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useGetCommentsQuery } from "@shared/api";
import ContentLoader from "react-content-loader";
import { defaultTheme } from "@app/styles";
import { useTranslation } from "react-i18next";

/**
 * Displays recent comments in the footer.
 * @param props - Component props.
 * @param props.comments - Optional comments to render instead of fetched data.
 * @returns Footer comments component.
 */
export const FooterComments: FC<IFooterCommentsProps> = (props) => {
  const {
    comments = null,
  } = props;
  const { t } = useTranslation([ "widgets" ]);
  const theme = useTheme();
  const isTabletSmallUp = useMediaQuery(theme.bp.up("tabletSmall"));
  const { data, isLoading } = useGetCommentsQuery({ limit: 8 });

  return isTabletSmallUp
    && (
      <S.Wrapper>
        <WithIndicator variant={"primary"}>
          <Title level={2} variantLevel={4}>{t(($) => $.footer.newComments)}</Title>
        </WithIndicator>

        {isLoading && (
          <ContentLoader
            viewBox={"0 0 360 360"}
            height={360}
            width={360}
            title={"Comments"}
            backgroundColor={theme.placeholder.bg}
            foregroundColor={theme.placeholder.foregroundColor}
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
