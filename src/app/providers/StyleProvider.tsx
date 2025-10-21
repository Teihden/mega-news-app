import { ThemeProvider } from "styled-components";
import type { FC, PropsWithChildren } from "react";
import { useAppStore } from "@app/store";

/**
 * Компонент StyleProvider предоставляет тему оформления для своего дочернего контента.
 * Использует тему, определенную в состоянии хранилища приложения.
 * @param props Свойства, передаваемые в компонент.
 * @returns Компонент.
 */
export const StyleProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { theme } = useAppStore();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
