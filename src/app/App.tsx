import { type FC, useEffect } from "react";
import { GlobalStyle } from "@app/styles";
import { BrowserRouterProvider, ReduxProvider, StyleProvider } from "@app/providers";
import { useAppStore } from "@app/store/useAppStore";
import { setThemeChangeListener } from "@shared/utils";
import { i18n } from "@shared/i18n/init";
import type { TLanguage } from "@shared/types";
import { HelmetProvider } from "react-helmet-async";

/**
 * Renders the root application providers and router.
 * @returns App component.
 */
export const App: FC = () => {
  const updateTheme = useAppStore(({ updateTheme }) => updateTheme);
  const updateLanguage = useAppStore(({ updateLanguage }) => updateLanguage);
  const currentLanguage = ((i18n.resolvedLanguage ?? i18n.language) || "en") as TLanguage;

  useEffect(() => {
    updateLanguage(currentLanguage, true);
    return setThemeChangeListener(updateTheme);
  }, []);

  return (
    <ReduxProvider>
      <StyleProvider>
        <HelmetProvider>
          <GlobalStyle />
          <BrowserRouterProvider />
        </HelmetProvider>
      </StyleProvider>
    </ReduxProvider>
  );
};
