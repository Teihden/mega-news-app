import type { IText } from "../config";
import * as S from "./styles";

/**
 * Renders styled text content.
 * @param props - Component props.
 * @param props.className - Optional CSS class for the root element.
 * @param props.as - HTML element used for rendering.
 * @param props.variant - Text style variant.
 * @param props.align - Horizontal text alignment.
 * @param props.marginBlock - CSS margin-block value.
 * @param props.children - Nested text content.
 * @param props.rest - Additional props forwarded to the root element.
 * @returns Text component.
 */
export const Text: IText = (props) => {
  const {
    className,
    as = "p",
    variant = "md",
    align = "left",
    marginBlock = null,
    children = null,
    ...rest
  } = props;

  return (
    <S.Text
      className={className}
      as={as}
      $variant={variant}
      $align={align}
      $marginBlock={marginBlock}
      {...rest}
    >
      {children}
    </S.Text>
  );
};

Text.Text = S.Text;
