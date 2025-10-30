import type { IInputProps } from "../config";
import type { FC } from "react";
import * as S from "./styles";

/**
 * Компонент Input.
 * @param props Свойства компонента.
 * @param props.as Определяет HTML-элемент, используемый для рендеринга ввода.
 * @param props.variant Вариант стиля компонента.
 * @param props.componentSize Размер компонента.
 * @param props.isHover Указывает, находится ли элемент в состоянии наведения.
 * @param props.isFocus Указывает, находится ли элемент в состоянии фокуса.
 * @param props.isInvalid Указывает, является ли ввод недействительным.
 * @param props.disabled Отключает компонент, если установлено значение true.
 * @param props.rest Дополнительные свойства, передаваемые в компонент.
 * @returns Компонент.
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
