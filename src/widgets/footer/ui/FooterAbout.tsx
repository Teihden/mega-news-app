import { type FC } from "react";
import { Text } from "@shared/ui/text";
import { WithIndicator } from "@entities/withIndicator";
import { Title } from "@shared/ui/title";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { Accordion } from "@shared/ui/accordion";
import { useTranslation } from "react-i18next";

/**
 * Компонент FooterAbout.
 * Используется для предоставления краткой информации о новостном ресурсе Mega News.
 * @returns Возвращает компонент.
 */
export const FooterAbout: FC = () => {
  const { up } = useTheme().bp;
  const { t } = useTranslation([ "widgets" ]);
  const isMobileUp = useMediaQuery(up("mobile"));

  return (
    <div>
      <Accordion
        isControlledOpen={isMobileUp}
        isActive={!isMobileUp}
        btnProps={{
          text: (
            <WithIndicator
              variant={"primary"}
            >
              <Title level={2} variantLevel={4}>{t(($) => $.footer.aboutTitle)}</Title>
            </WithIndicator>
          ),
        }}
        css={`
          padding: 0;
        `}
      >
        <Text variant={"md"}>
          {t(($) => $.footer.aboutText)}
        </Text>
      </Accordion>
    </div>
  );
};
