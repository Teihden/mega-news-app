import type { IPostCardContainer } from "../config";
import * as S from "./styles";
import { PostCard } from "@entities/postCard";
import { useGetCommentsQuery, useGetPostsQuery } from "@shared/api";
import { useStableRandomFromList } from "@shared/utils";
import { randomInteger } from "remeda";
import { defaultTheme } from "@app/styles";
import ContentLoader from "react-content-loader";
import { useTheme } from "styled-components";
import { Title } from "@shared/ui/title";

const mediaImgs = Object.values(import.meta.glob<string>("@shared/assets/images/{technology,music,cars,food}/*.jpg", {
  query: "?url",
  import: "default",
  eager: true,
}));

const avatarImgs = Object.values(import.meta.glob<string>("@shared/assets/images/avatar/*.jpg", {
  query: "?url",
  import: "default",
  eager: true,
}));

const timestamps = Array.from({ length: 30 }, () => {
  const now = Date.now();
  const days90 = 90 * 24 * 60 * 60 * 1000;
  const min = now - days90;
  return randomInteger(min, now);
});

/**
 * Компонент контейнера для отображения списка карточек постов.
 * Управляет состоянием загрузки данных, отображает ошибки или список карточек постов, если данные успешно загружены.
 * @param props - Свойства компонента.
 * @param props.className Дополнительный класс для стилизации компонента.
 * @param props.rest Прочие пропсы, которые распространяются на корневой элемент компонента.
 * @returns Компонент.
 */
export const PostCardContainer: IPostCardContainer = (props) => {
  const {
    className,
    ...rest
  } = props;
  const { data: postsData, isLoading: isPostsLoading, isError: isPostsError } = useGetPostsQuery({ limit: 8 });
  const { data: commentsData, isLoading: isCommentsLoading, isError: isCommentsError } = useGetCommentsQuery({ limit: 8 });
  const { pick } = useStableRandomFromList();
  const theme = useTheme();

  return (
    <S.PostCardContainer
      className={className}
      {...rest}
    >
      {(isPostsError || isCommentsError) && (
        <Title
          level={3}
          variantLevel={5}
          css={`
            color: ${theme.palette.secondary["100"]};
          `}
        >
          Component loading error
        </Title>
      )}

      {(!(isPostsLoading && isCommentsLoading) && !(isPostsError || isCommentsError)) && (
        postsData?.posts ?? []).map(({ id, title, body, reactions }) => {
        const avatarSrc = pick(avatarImgs, `avatar:${id}`);
        const mediaSrc = pick(mediaImgs, `media:${id}`);
        const userName = pick((commentsData?.comments ?? [])?.map(({ user }) => user?.fullName ?? "Amanda"), `user:${id}`);
        const timestamp = pick(timestamps, `timestamp:${id}`);

        return (
          <PostCard
            key={id}
            id={id}
            reactions={reactions}
            mediaCardProps={{
              imgProps: {
                src: mediaSrc,
                width: 340,
                height: 190,
              },
              title,
              text: body,
            }}
            userCardProps={{
              imgProps: {
                src: avatarSrc,
                width: 44,
                height: 44,
                alt: userName,
              },
              name: userName,
              timestamp: Number(timestamp),
            }}
          />
        );
      })}

      {((isPostsLoading && isCommentsLoading) && !(isPostsError || isCommentsError)) && (
        Array.from({ length: 8 }, (_, i) => (
          <ContentLoader
            key={i}
            viewBox={"0 0 360 389"}
            height={389}
            width={360}
            title={"PostCard"}
            backgroundColor={theme.placeholder.bg}
            foregroundColor={theme.placeholder.foregroundColor}
            preserveAspectRatio={"none"}
          >
            <rect
              x={0}
              y={0}
              rx={defaultTheme.default.borderRadius}
              ry={defaultTheme.default.borderRadius}
              width={360}
              height={389}
            />
          </ContentLoader>
        ))
      )}
    </S.PostCardContainer>
  );
};

PostCardContainer.PostCardContainer = S.PostCardContainer;
