import { type IPostCardContainer, LIMIT, MAX_LIMIT } from "../config";
import * as S from "./styles";
import { PostCard } from "@entities/postCard";
import { useGetCommentsQuery, useGetPostsQuery } from "@shared/api";
import { useStableRandomFromList } from "@shared/utils";
import { randomInteger } from "remeda";
import ContentLoader from "react-content-loader";
import { useTheme } from "styled-components";
import { Title } from "@shared/ui/title";
import { useEffect, useRef, useState } from "react";
import { Btn } from "@shared/ui/btn";
import { Stack } from "@bedrock-layout/primitives";
import { useAppStore } from "@app/store/useAppStore";
import { useTranslation } from "react-i18next";

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

const timestamps = Array.from({ length: MAX_LIMIT }, () => {
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
  const { pick } = useStableRandomFromList();
  const theme = useTheme();
  const { t } = useTranslation([ "common" ]);
  const language = useAppStore(({ language }) => language);
  const [ skip, setSkip ] = useState(0);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const {
    refetch: postsRefetch,
    data: postsData,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
    isError: isPostsError,
  } = useGetPostsQuery({ limit: LIMIT, skip });

  const {
    refetch: commentsRefetch,
    data: commentsData,
    isLoading: isCommentsLoading,
    isFetching: isCommentsFetching,
    isError: isCommentsError,
  } = useGetCommentsQuery({ limit: LIMIT, skip });

  const isLoading = isPostsLoading || isCommentsLoading;
  const isFetching = isPostsFetching || isCommentsFetching;
  const isError = isPostsError || isCommentsError;
  const isCanLoadMore = (postsData?.posts ?? [])?.length < MAX_LIMIT;

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (!first?.isIntersecting) {
          return;
        }

        if (isError) {
          return;
        }

        if (!isCanLoadMore) {
          return;
        }

        if (isLoading || isFetching) {
          return;
        }

        setSkip((prev) => prev + LIMIT);
      }, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ isCanLoadMore, isLoading, isFetching ]);

  return (
    <S.PostCardContainer
      className={className}
      {...rest}
    >
      {(!(isLoading) && !(isError)) && (
        (postsData?.posts ?? []).map(({ id, title, body, reactions }) => {
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
                language,
              }}
            />
          );
        }))}

      {(isError) && (
        <Stack
          gap={"size1"}
        >
          <Title
            level={3}
            variantLevel={5}
            css={`
            color: ${theme.palette.secondary["100"]};
          `}
          >
            {t(($) => $.componentLoadingError)}
          </Title>
          <Btn
            variant={"primary"}
            size={"sm"}
            text={t(($) => $.refetch)}
            onClick={() => {
              commentsRefetch();
              postsRefetch();
            }}
          />
        </Stack>
      )}

      {((isLoading || isFetching) && !(isError)) && (
        Array.from({ length: LIMIT }, (_, i) => (
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
              rx={theme.default.borderRadius}
              ry={theme.default.borderRadius}
              width={360}
              height={389}
            />
          </ContentLoader>
        ))
      )}

      <S.Sentinel ref={sentinelRef} />
    </S.PostCardContainer>
  );
};

PostCardContainer.PostCardContainer = S.PostCardContainer;
PostCardContainer.Sentinel = S.Sentinel;
