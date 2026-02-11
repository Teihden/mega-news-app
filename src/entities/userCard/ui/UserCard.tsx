import type { IUserCard } from "../config";
import * as S from "./styles";
import { isEmpty, isPlainObject } from "remeda";

/**
 * Карточка пользователя.
 * @param props - Свойства компонента.
 * @param props.className - Дополнительный CSS-класс, передаваемый компоненту.
 * @param props.imgProps - Свойства для настройки изображения, передаваемого в карточку.
 * @param props.name - Имя пользователя.
 * @param props.timestamp - Timestamp в миллисекундах для отображения даты.
 * @param props.rest - Дополнительные свойства, передаваемые в корневой элемент компонента.
 * @returns Компонент.
 */
const UserCard: IUserCard = (props) => {
  const {
    className,
    imgProps = {},
    name = "",
    timestamp = null,
    ...rest
  } = props;

  /**
   * Форматирует timestamp в строку даты.
   * Использует локаль из `document.documentElement.lang`.
   * Если язык не задан — используется `en`.
   * @param timestamp - Timestamp в миллисекундах.
   * @returns Отформатированная дата (например: "August 18, 2022").
   */
  const formatDate = (timestamp: number): string => {
    const locale = document.documentElement.lang ?? "en";

    return new Intl.DateTimeFormat(locale, {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(timestamp));
  };

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
          {formatDate(timestamp)}
        </S.Timestamp>
      )}
    </S.UserCard>
  );
};
export default UserCard;

UserCard.UserCard = S.UserCard;
UserCard.Img = S.Img;
UserCard.Name = S.Name;
UserCard.Timestamp = S.Timestamp;
