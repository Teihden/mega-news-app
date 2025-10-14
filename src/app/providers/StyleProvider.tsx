import { ThemeProvider } from "styled-components";
import type { FC, ReactNode } from "react";
import { useAppStore } from "@app/store";

interface IStyleProviderProps {
  children?: ReactNode;
}

/**
 * Компонент StyleProvider предоставляет тему оформления для своего дочернего контента.
 * Использует тему, определенную в состоянии хранилища приложения.
 * @param props Свойства, передаваемые в компонент.
 * @returns Компонент ThemeProvider, оборачивающий переданный дочерний контент.
 */
export const StyleProvider: FC<IStyleProviderProps> = (props) => {
  const { children } = props;
  const theme = useAppStore((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
