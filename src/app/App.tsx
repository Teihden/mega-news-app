import { type FC, useEffect } from "react";
import { GlobalStyle } from "@app/styles";
import { BrowserRouterProvider, StyleProvider } from "@app/providers";
import { useAppStore } from "@app/store";
import { setThemeChangeListener } from "@shared/utils";

/**
 * Компонент приложения, отвечающий за рендеринг глобальных стилей и обертки страницы.
 * @returns Возвращает структуру приложения с глобальными стилями и оберткой страницы.
 */
export const App: FC = () => {
  const updateTheme = useAppStore.use.themeMode;

  useEffect(() => {
    return setThemeChangeListener(updateTheme);
  }, []);

  return (
    <StyleProvider>
      <GlobalStyle />
      <BrowserRouterProvider />
    </StyleProvider>
  );
};
