import type { IContainer } from "../config";
import * as S from './containerStyles';

/**
 * Компонент Container отвечает за визуальное представление контейнера.
 * @param props - Пропсы компонента.
 * @param props.children - Дочерние элементы для отображения внутри контейнера.
 * @returns Возвращает визуальный контейнер с указанным содержимым.
 */
export const Container: IContainer = (props) => {
  const {
    children = null,
  } = props;

  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

Container.Container = S.Container;
