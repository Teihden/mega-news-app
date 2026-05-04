import { ThemeProvider } from "styled-components";
import { type FC, type PropsWithChildren, useLayoutEffect, useState } from "react";
import { useAppStore } from "@app/store/useAppStore";
import { darkTheme, lightTheme } from "@app/styles";

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

/**
 * Provides the styled-components theme for application content.
 * @param props - Component props.
 * @returns Style provider component.
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
