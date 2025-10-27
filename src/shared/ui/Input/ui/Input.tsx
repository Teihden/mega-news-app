import type { IInputProps } from "../config";
import type { FC } from "react";
import * as S from "./styles";

/**
 * .
 * @param props
 */
export const Input: FC<IInputProps> = (props) => {
  const {
    as = "input",
    variant = "primary",
    componentSize = "md",
    isHover = false,
    isFocus = false,
    isInvalid = false,
    disabled = false,
    ...rest
  } = props;

  return (
    <S.Input
      as={as}
      $variant={variant}
      $componentSize={componentSize}
      $isHover={isHover}
      $isFocus={isFocus}
      $isInvalid={isInvalid}
      disabled={disabled}
      {...rest}
    />
  );
};
