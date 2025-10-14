import { type FC } from "react";
import { GlobalStyle } from "@app/styles";
import { PageWrapper } from "@widgets/PageWrapper";
import { StyleProvider } from "@app/providers/StyleProvider.tsx";

/**
 * Компонент приложения, отвечающий за рендеринг глобальных стилей и обертки страницы.
 * @returns Возвращает структуру приложения с глобальными стилями и оберткой страницы.
 */
export const App: FC = () => {
  return (
    <StyleProvider>
      <GlobalStyle />
      <PageWrapper />
    </StyleProvider>
  );
};
