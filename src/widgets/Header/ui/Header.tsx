import { type FC } from "react";
import type { IHeaderProps } from "../config";
import * as S from "./styles";
import { ThemeToggler } from "@features/ThemeToggler";

/**
 * Компонент `Header` страницы.
 * @returns Возвращает компонент.
 */
export const Header: FC<IHeaderProps> = () => {
  return (
    <S.Header>
      HEADER
      <ThemeToggler />
    </S.Header>
  );
};
