import type { IMediaCard } from "../config";
import * as S from "./styles";
import { isEmpty, isPlainObject } from "remeda";
import { Link } from "react-router";

/**
 * Компонент MediaCard.
 * @param props - Свойства компонента.
 * @param props.className - Дополнительный CSS-класс, передаваемый компоненту.
 * @param props.imgProps - Свойства для настройки изображения, передаваемого в карточку.
 * @param props.title - Заголовок, отображаемый внутри карточки.
 * @param props.text - Текст, отображаемый внутри карточки.
 * @param props.rest - Дополнительные свойства, передаваемые в корневой элемент компонента.
 * @returns Компонент.
 */
export const MediaCard: IMediaCard = (props) => {
  const {
    className,
    imgProps = {},
    title = "",
    text = "",
    ...rest
  } = props;

  return (
    <S.MediaCard
      className={className}
      {...rest}
    >
      {imgProps && isPlainObject(imgProps) && !isEmpty(imgProps) && (
        <S.Img {...imgProps} />
      )}
      <S.Wrapper>
        {title && (
          <S.Btn
            forwardedAs={Link}
            to={"/"}
            variant={"blank"}
            title={title}
            isInline={true}
            text={(
              <S.Title
                forwardedAs={"span"}
                variantLevel={3}
                marginBlock={0}
              >
                {title}
              </S.Title>
            )}
          />
        )}
        {text && (
          <S.Text
            variant={"md"}
          >
            {text}
          </S.Text>
        )}
      </S.Wrapper>
    </S.MediaCard>
  );
};

MediaCard.MediaCard = S.MediaCard;
MediaCard.Btn = S.Btn;
MediaCard.Img = S.Img;
MediaCard.Title = S.Title;
MediaCard.Text = S.Text;
MediaCard.Wrapper = S.Wrapper;
