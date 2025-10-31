import { type FC, useEffect } from "react";
import { GlobalStyle } from "@app/styles";
import { BrowserRouterProvider, ReduxProvider, StyleProvider } from "@app/providers";
import { useAppStore } from "@app/store";
import { setThemeChangeListener } from "@shared/utils";

/**
 * Компонент приложения, отвечающий за рендеринг глобальных стилей и обертки страницы.
 * @returns Компонент.
 */
export const App: FC = () => {
  const updateTheme = useAppStore(({ updateTheme }) => updateTheme);

  useEffect(() => {
    return setThemeChangeListener(updateTheme);
  }, []);

  return (
    <ReduxProvider>
      <StyleProvider>
        <GlobalStyle />
        <BrowserRouterProvider />
      </StyleProvider>
    </ReduxProvider>
  );
};
