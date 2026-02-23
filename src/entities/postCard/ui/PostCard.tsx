import type { IPostCard } from "../config";
import * as S from "./styles";
import IconHeart from "@shared/assets/images/icons/icon-heart.svg?react";
import { useUpdatePostMutation } from "@shared/api";

/**
 * Компонент PostCard.
 * @param props - Свойства компонента.
 * @param props.className Дополнительный класс для стилизации компонента.
 * @param props.mediaCardProps Пропсы для передачи в компонент MediaCard, отображающего медиа-контент.
 * @param props.userCardProps Пропсы для передачи в компонент UserCard, отображающего информацию о пользователе.
 * @param props.id Идентификатор поста.
 * @param props.reactions Реакции на пост.
 * @param props.rest Прочие пропсы, которые распространяются на корневой элемент компонента.
 * @returns Компонент.
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
  const [ updatePost, { isSuccess, isLoading } ] = useUpdatePostMutation();

  /**
   * Функция обработчик события клика.
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
          title={"Like"}
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
