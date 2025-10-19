import type { ITextProps } from "../config";
import * as S from "./textStyles";
import type { FC } from "react";

/**
 * Компонент для отображения текста с заданными параметрами.
 * @param props Параметры компонента.
 * @param props.className Дополнительный класс стилей для компонента.
 * @param props.as Тип HTML элемента для рендера.
 * @param props.variant Вариант стилей текста.
 * @param props.children Дочерние элементы компонента.
 * @param props.rest Прочие свойства, передаваемые компоненту.
 * @returns Компонент.
 */
export const Text: FC<ITextProps> = (props) => {
  const {
    className,
    as = "p",
    variant = "regular",
    children = null,
    ...rest
  } = props;

  return (
    <S.Text
      className={className}
      as={as}
      $variant={variant}
      {...rest}
    >
      {children}
    </S.Text>
  );
};
