import type { IBtn } from "@shared/ui/btn/config";
import * as S from "./styles";
import type { Ref } from "react";

/**
 * Компонент кнопки.
 * @param props - Свойства компонента.
 * @param props.as Определяет HTML-элемент, используемый для рендеринга. По умолчанию null.
 * @param props.variant - Тип кнопки, определяющий стиль оформления (например, "primary", "secondary").
 * @param props.size - Размер кнопки (например, "sm", "md", "lg").
 * @param props.icon - Иконка, которая отображается внутри кнопки.
 * @param props.iconPosition - Положение иконки относительно текста ("left" или "right").
 * @param props.iconSize - Размер иконки.
 * @param props.text - Текст, отображаемый внутри кнопки.
 * @param props.children - Дополнительный контент внутри кнопки.
 * @param props.disabled - Указывает, должна ли кнопка быть отключенной.
 * @param props.isActive - Указывает, активна ли кнопка.
 * @param props.isHover - Указывает, наведен ли курсор на кнопку.
 * @param props.isDisabled - Альтернативное свойство для отключения кнопки.
 * @param props.isRound - Флаг для круглой кнопки.
 * @param props.isSquare - Флаг для квадратной кнопки.
 * @param props.isInline - Флаг для компонента с внешним видом текста.
 * @param props.href - Если передан, кнопка рендерится как `<a>` с указанным href.
 * @param props.target - Атрибут target для ссылки (`_blank`, `_self` и т.д.).
 * @param props.rel - Атрибут rel для ссылки (например, `noopener noreferrer` для `_blank`).
 * @param props.ref - Реф.
 * @param props.style - Стили.
 * @returns Компонент.
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
