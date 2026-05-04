import type { IContainer } from "../config";
import * as S from "./styles";

/**
 * Renders the shared layout container.
 * @param props - Component props.
 * @param props.children - Content rendered inside the container.
 * @returns Container component.
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
