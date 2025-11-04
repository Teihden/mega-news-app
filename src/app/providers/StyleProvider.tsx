import { ThemeProvider } from "styled-components";
import { type FC, type PropsWithChildren, useLayoutEffect, useState } from "react";
import { useAppStore } from "@app/store";
import { darkTheme, lightTheme } from "@app/styles";

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

/**
 * Компонент StyleProvider предоставляет тему оформления для своего дочернего контента.
 * Использует тему, определенную в состоянии хранилища приложения.
 * @param props Свойства, передаваемые в компонент.
 * @returns Компонент.
 */
export const StyleProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const themeMode = useAppStore(({ themeMode }) => themeMode);
  // const theme = themes[themeMode];

  const [ currentTheme, setCurrentTheme ] = useState(themes[themeMode]);
  useLayoutEffect(() => {
    setCurrentTheme(themes[themeMode]);
  }, [ themeMode ]);

  return (
    <ThemeProvider theme={currentTheme}>
      {children}
    </ThemeProvider>
  );
};
