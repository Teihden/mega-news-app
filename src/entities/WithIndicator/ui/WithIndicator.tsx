import type { IWithIndicator } from "../config";
import * as S from "./styles";

/**
 * Компонент WithIndicator.
 * Отображает обёртку с индикатором. Принимает пропсы, определяющие её внешний вид и содержимое.
 * @param props Свойства компонента.
 * @param props.variant Вариант стиля индикатора.
 * @param props.children Дочерние элементы внутри компонента.
 * @returns Возвращает элемент пользовательского интерфейса с индикатором.
 */
export const WithIndicator: IWithIndicator = (props) => {
  const {
    variant = "primary",
    children = null,
  } = props;

  return (
    <S.WithIndicator
      $variant={variant}
    >
      {children}
    </S.WithIndicator>
  );
};

WithIndicator.WithIndicator = S.WithIndicator;
