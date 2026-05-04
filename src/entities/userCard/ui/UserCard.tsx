import type { IUserCard } from "../config";
import * as S from "./styles";
import { isEmpty, isPlainObject } from "remeda";
import { formatDate } from "../lib";

/**
 * Displays compact user information with optional avatar and timestamp.
 * @param props - Component props.
 * @param props.className - Optional CSS class for the root element.
 * @param props.imgProps - Image props for the user avatar.
 * @param props.name - User display name.
 * @param props.timestamp - Timestamp in milliseconds used to render the date.
 * @param props.language - Language used to format the date.
 * @param props.rest - Additional props passed to the root element.
 * @returns User card component.
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
