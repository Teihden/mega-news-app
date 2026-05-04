import type { IWithIndicator } from "../config";
import * as S from "./styles";

/**
 * Wraps content with a visual indicator style.
 * @param props - Component props.
 * @param props.variant - Indicator visual variant.
 * @param props.children - Nested content rendered inside the wrapper.
 * @param props.rest - Additional props passed to the root element.
 * @returns Indicator wrapper component.
 */
export const WithIndicator: IWithIndicator = (props) => {
  const {
    variant = "primary",
    children = null,
    ...rest
  } = props;

  return (
    <S.WithIndicator
      $variant={variant}
      {...rest}
    >
      {children}
    </S.WithIndicator>
  );
};

WithIndicator.WithIndicator = S.WithIndicator;
