import type { IUserCard } from "../config";
import * as S from "./styles";
import { isEmpty, isPlainObject } from "remeda";
import { formatDate } from "../lib";

/**
 * Карточка пользователя.
 * @param props - Свойства компонента.
 * @param props.className - Дополнительный CSS-класс, передаваемый компоненту.
 * @param props.imgProps - Свойства для настройки изображения, передаваемого в карточку.
 * @param props.name - Имя пользователя.
 * @param props.timestamp - Timestamp в миллисекундах для отображения даты.
 * @param props.language - язык
 * @param props.rest - Дополнительные свойства, передаваемые в корневой элемент компонента.
 * @returns Компонент.
 */
export const UserCard: IUserCard = (props) => {
  const {
    className,
    imgProps = {},
    name = "",
    timestamp = null,
    language = "en",
    ...rest
  } = props;

  return (
    <S.UserCard
      className={className}
      {...rest}
    >
      {imgProps && isPlainObject(imgProps) && !isEmpty(imgProps) && (
        <S.Img {...imgProps} />
      )}
      {name && (
        <S.Name
          variant={"md"}
          marginBlock={"0"}
          forwardedAs={"span"}
        >
          {name}
        </S.Name>
      )}
      {typeof timestamp === "number" && (
        <S.Timestamp
          variant={"md"}
          marginBlock={"0"}
          forwardedAs={"span"}
        >
          {formatDate(timestamp, language)}
        </S.Timestamp>
      )}
    </S.UserCard>
  );
};

UserCard.UserCard = S.UserCard;
UserCard.Img = S.Img;
UserCard.Name = S.Name;
UserCard.Timestamp = S.Timestamp;
