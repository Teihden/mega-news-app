import { type FC, useEffect } from "react";
import { GlobalStyle } from "@app/styles";
import { PageWrapper } from "@widgets/PageWrapper";
import { StyleProvider } from "@app/providers/StyleProvider.tsx";
import { useAppStore } from "@app/store";
import { setThemeChangeListener } from "@shared/utils";

/**
 * Компонент приложения, отвечающий за рендеринг глобальных стилей и обертки страницы.
 * @returns Возвращает структуру приложения с глобальными стилями и оберткой страницы.
 */
export const App: FC = () => {
  const { updateTheme } = useAppStore();

  useEffect(() => {
    return setThemeChangeListener(updateTheme);
  }, []);

  return (
    <StyleProvider>
      <GlobalStyle />
      <PageWrapper />
    </StyleProvider>
  );
};
