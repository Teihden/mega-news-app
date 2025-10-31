import type { IText } from "../config";
import * as S from "./styles";

/**
 * Компонент для отображения текста с заданными параметрами.
 * @param props Параметры компонента.
 * @param props.className Дополнительный класс стилей для компонента.
 * @param props.as Тип HTML элемента для рендера.
 * @param props.variant Вариант стилей текста.
 * @param props.align Вариант горизонтального расположения текста.
 * @param props.children Дочерние элементы компонента.
 * @param props.rest Прочие свойства, передаваемые компоненту.
 * @returns Компонент.
 */
export const Text: IText = (props) => {
  const {
    className,
    as = "p",
    variant = "md",
    align = "left",
    children = null,
    ...rest
  } = props;

  return (
    <S.Text
      className={className}
      as={as}
      $variant={variant}
      $align={align}
      {...rest}
    >
      {children}
    </S.Text>
  );
};

Text.Text = S.Text;
