import type { IBtn } from "@shared/ui/Btn/config";
import * as S from "./styles";

/**
 * Компонент кнопки.
 * @param props - Свойства компонента.
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
 * @returns Возвращает компонент.
 */
export const Btn: IBtn = (props) => {
  const {
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
    target,
    rel,
    ...rest
  } = props;

  const isLink = "href" in props;
  const component = isLink ? "a" : "button";

  return (
    <S.Btn
      as={component}
      $variant={variant}
      $size={size}
      $isHover={isHover}
      $isActive={isActive}
      $isDisabled={isDisabled}
      $isRound={isRound}
      $isSquare={isSquare}
      $isInline={isInline}
      {...(isLink ? { href, target, rel } : {})}
      {...(!isLink ? { disabled: isDisabled || disabled } : {})}
      {...rest}
    >
      {children
        ? (
            children
          )
        : (
            <>
              {icon && iconPosition === "left" && (
                <span style={{ fontSize: iconSize, display: "inline-flex" }}>
                  {icon}
                </span>
              )}
              {text}
              {icon && iconPosition === "right" && (
                <span style={{ fontSize: iconSize, display: "inline-flex" }}>
                  {icon}
                </span>
              )}
            </>
          )}
    </S.Btn>
  );
};

Btn.Btn = S.Btn;
