import { type FC } from "react";
import { GlobalStyle } from "@app/styles";
import { PageWrapper } from "@widgets/PageWrapper";

/**
 * Компонент приложения, отвечающий за рендеринг глобальных стилей и обертки страницы.
 * @returns Возвращает структуру приложения с глобальными стилями и оберткой страницы.
 */
export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <PageWrapper />
    </>
  );
};
