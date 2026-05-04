import type { IInput } from "../config";
import * as S from "./styles";

/**
 * Renders a styled input element.
 * @param props - Component props.
 * @param props.as - HTML element used for rendering the input.
 * @param props.variant - Input visual variant.
 * @param props.componentSize - Input size variant.
 * @param props.isHover - Whether the input should show the hover state.
 * @param props.isFocus - Whether the input should show the focus state.
 * @param props.isInvalid - Whether the input should show the invalid state.
 * @param props.disabled - Whether the input is disabled.
 * @param props.style - Inline styles passed to the root element.
 * @param props.rest - Additional props forwarded to the root element.
 * @returns Input component.
 */
export const Input: IInput = (props) => {
  const {
    as = "input",
    variant = "primary",
    componentSize = "md",
    isHover = false,
    isFocus = false,
    isInvalid = false,
    disabled = false,
    style,
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
      {...(style ? { style } : {})}
      {...rest}
    />
  );
};

Input.Input = S.Input;
