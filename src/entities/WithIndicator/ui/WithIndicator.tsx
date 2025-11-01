import type { IWithIndicator } from "../config";
import * as S from "./styles";

/**
 * Компонент WithIndicator.
 * Отображает обёртку с индикатором. Принимает пропсы, определяющие её внешний вид и содержимое.
 * @param props Свойства компонента.
 * @param props.variant Вариант стиля индикатора.
 * @param props.children Дочерние элементы внутри компонента.
 * @param props.rest Дополнительные свойства.
 * @returns Возвращает элемент пользовательского интерфейса с индикатором.
 */
export const WithIndicator: IWithIndicator = (props) => {
  const {
    variant = "primary",
    children = null,
    ...rest
  } = props;

  return (
    <S.WithIndicator
      $variant={variant}
      {...rest}
    >
      {children}
    </S.WithIndicator>
  );
};

WithIndicator.WithIndicator = S.WithIndicator;
