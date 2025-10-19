import type { ITextProps } from "../config";
import * as S from "./textStyles";
import type { FC } from "react";

/**
 *
 */
export const Text: FC<ITextProps> = (props) => {
  const {
    className,
    variant = "regular",
    children = null,
    ...rest
  } = props;

  return (
    <S.Text
      className={className}
      $variant={variant}
      {...rest}
    >
      {children}
    </S.Text>
  );
};
