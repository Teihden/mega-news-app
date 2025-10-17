import type { TBtnProps } from "@shared/ui/Btn/config";
import type { FC } from "react";
import * as S from "./btnStyles";

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
 * @param props.isDisabled - Альтернативное свойство для отключения кнопки.
 * @param props.isActive - Указывает, активна ли кнопка.
 * @returns Возвращает компонент.
 */
export const Btn: FC<TBtnProps> = (props) => {
  const {
    variant = "primary",
    size = "sm",
    icon = null,
    iconPosition = "left",
    iconSize = 16,
    text = null,
    children = null,
    disabled = false,
    isDisabled = false,
    isActive = false,
  } = props;

  const isLink = "href" in props;
  const Component = isLink ? "a" : "button";

  return (
    <S.Btn
      as={Component}
      $variant={variant}
      $size={size}
      $isActive={isActive}
      $isDisabled={isDisabled}
      disabled={isLink ? isDisabled : (isDisabled || disabled)}
      {...props}
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
