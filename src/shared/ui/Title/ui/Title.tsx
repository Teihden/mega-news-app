import type { FC, JSX } from "react";
import type { ITitleProps } from "../config";
import * as S from "./titleStyles";

/**
 * Компонент заголовка.
 * @param props Параметры компонента.
 * @param props.level Уровень заголовка, определяет HTML-тег (от 1 до 6). По умолчанию 1.
 * @param props.variant Вариант стиля заголовка. По умолчанию "title".
 * @param props.variantLevel Уровень стиля заголовка. По умолчанию 1.
 * @param props.children Содержимое заголовка.
 * @param props.className Дополнительный CSS-класс для заголовка.
 * @param props.rest Остальные свойства, передаваемые в компонент.
 * @returns Компонент.
 */
export const Title: FC<ITitleProps> = (props) => {
  const {
    level = 1,
    variant = "title",
    variantLevel = 1,
    children,
    className,
    ...rest
  } = props;
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <S.Title as={Tag} $variant={variant} $variantLevel={variantLevel} className={className} {...rest}>
      {children}
    </S.Title>
  );
};
