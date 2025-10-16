import { StyledContainer } from "./container-styles";
import { type FC } from "react";
import type { IContainerProps } from "../config";

/**
 * Компонент Container отвечает за визуальное представление контейнера.
 * @param props - Пропсы компонента.
 * @param props.children - Дочерние элементы для отображения внутри контейнера.
 * @returns Возвращает визуальный контейнер с указанным содержимым.
 */
export const Container: FC<IContainerProps> = (props) => {
  const {
    children = null,
  } = props;

  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};
