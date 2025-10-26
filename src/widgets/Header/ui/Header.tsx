import { type FC } from "react";
import type { IHeaderProps } from "../config";
import * as S from "./styles";
import { Container } from "@shared/ui/Container";

/**
 * Компонент `Header` страницы.
 * @returns Возвращает компонент.
 */
export const Header: FC<IHeaderProps> = () => {
  return (
    <S.Header>
      <Container>
        HEADER
      </Container>
    </S.Header>
  );
};
