import type { IBtn } from "@shared/ui/btn/config";
import * as S from "./styles";
import type { Ref } from "react";

/**
 * Renders the shared button component.
 * @param props - Component props.
 * @param props.as - Optional element override used for rendering.
 * @param props.variant - Button visual variant.
 * @param props.size - Button size variant.
 * @param props.icon - Optional icon rendered inside the button.
 * @param props.iconPosition - Icon position relative to the text.
 * @param props.iconSize - Icon size in pixels.
 * @param props.text - Text content rendered inside the button.
 * @param props.children - Custom button content.
 * @param props.disabled - Native disabled state for button elements.
 * @param props.isActive - Whether the active visual state is applied.
 * @param props.isHover - Whether the hover visual state is applied.
 * @param props.isDisabled - Whether the disabled visual state is applied.
 * @param props.isRound - Whether the button should be rendered as round.
 * @param props.isSquare - Whether the button should be rendered as square.
 * @param props.isInline - Whether the button should look like inline text.
 * @param props.href - Link target used when rendering as an anchor.
 * @param props.target - Anchor target attribute.
 * @param props.rel - Anchor rel attribute.
 * @param props.ref - Forwarded ref for the rendered element.
 * @param props.style - Inline styles passed to the root element.
 * @returns Button component.
 */
export const Btn: IBtn = (props) => {
  const {
    as = null,
    variant = "primary",
    size = "sm",
    icon = null,
    iconPosition = "left",
    iconSize = 20,
    text = null,
    children = null,
    disabled = false,
    isActive = false,
    isHover = false,
    isDisabled = false,
    isRound = false,
    isSquare = false,
    isInline = false,
    href,
    to,
    target,
    rel,
    ref,
    style,
    ...rest
  } = props;
  const isLink = "href" in props || "to" in props;
  const component = isLink ? "a" : "button";

  return (
    <S.Btn
      ref={ref as unknown as Ref<HTMLButtonElement & HTMLAnchorElement>}
      as={as ?? component}
      $variant={variant}
      $size={size}
      $isHover={isHover}
      $isActive={isActive}
      $isDisabled={isDisabled}
      $isRound={isRound}
      $isSquare={isSquare}
      $isInline={isInline}
      {...(isLink ? { href, to, target, rel } : {})}
      {...(!isLink ? { disabled: isDisabled || disabled } : {})}
      {...(style ? { style } : {})}
      {...rest}
    >
      {children
        ? (
            children
          )
        : (
            <>
              {icon && iconPosition === "left" && (
                <S.Icon
                  $fontSize={iconSize}
                >
                  {icon}
                </S.Icon>
              )}
              {text}
              {icon && iconPosition === "right" && (
                <S.Icon
                  $fontSize={iconSize}
                >
                  {icon}
                </S.Icon>
              )}
            </>
          )}
    </S.Btn>
  );
};

Btn.Btn = S.Btn;
Btn.Icon = S.Icon;
