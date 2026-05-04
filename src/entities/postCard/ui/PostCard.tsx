import type { IPostCard } from "../config";
import * as S from "./styles";
import IconHeart from "@shared/assets/images/icons/icon-heart.svg?react";
import { useUpdatePostMutation } from "@shared/api";
import { useTranslation } from "react-i18next";

/**
 * Renders a post card with media, author metadata, and reactions.
 * @param props - Component props.
 * @param props.className - Optional CSS class for the root element.
 * @param props.mediaCardProps - Props passed to the media card section.
 * @param props.userCardProps - Props passed to the user card section.
 * @param props.id - Post identifier.
 * @param props.reactions - Post reaction counters.
 * @param props.rest - Additional props forwarded to the root element.
 * @returns Post card component.
 */
export const PostCard: IPostCard = (props) => {
  const {
    className,
    mediaCardProps = {},
    userCardProps = {},
    reactions,
    id = 0,
    ...rest
  } = props;
  const { likes = 0 } = reactions ?? {};
  const { t } = useTranslation([ "common" ]);
  const [ updatePost, { isSuccess, isLoading } ] = useUpdatePostMutation();

  /**
   * Increments the post like counter.
   */
  const handleClick = () => {
    updatePost({
      id,
      reactions: {
        ...reactions,
        likes: likes + 1,
      },
    });
  };

  return (
    <S.PostCard
      className={className}
      {...rest}
    >
      <S.MediaCard
        forwardedAs={"div"}
        titleVariantLevel={5}
        textLineClamp={2}
        {...mediaCardProps}
      />
      <S.Wrapper>
        <S.UserCard
          {...userCardProps}
        />
        <S.Btn
          variant={"blank"}
          size={"md"}
          iconSize={20}
          icon={<IconHeart />}
          iconPosition={"left"}
          isSquare={true}
          type={"button"}
          isDisabled={isLoading || isSuccess}
          disabled={isLoading || isSuccess}
          text={likes}
          title={t(($) => $.like)}
          onClick={handleClick}
        />
      </S.Wrapper>
    </S.PostCard>
  );
};

PostCard.PostCard = S.PostCard;
PostCard.MediaCard = S.MediaCard;
PostCard.Wrapper = S.Wrapper;
PostCard.UserCard = S.UserCard;
PostCard.Btn = S.Btn;
