import { type FC } from "react";
import { Text } from "@shared/ui/Text";
import { WithIndicator } from "@entities/WithIndicator";
import { Title } from "@shared/ui/Title";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { Accordion } from "@shared/ui/Accordion";

/**
 * Компонент FooterAbout.
 * Используется для предоставления краткой информации о новостном ресурсе Mega News.
 * @returns Возвращает компонент.
 */
export const FooterAbout: FC = () => {
  const { up } = useTheme().bp;
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
              <Title level={2} variantLevel={4}>Mega News</Title>
            </WithIndicator>
          ),
        }}
        css={`
          padding: 0;
        `}
      >
        <Text variant={"md"}>
          Keep up with the latest happenings from around the world. From major events in politics and business to stories in sports and entertainment,
          we bring you news and insights you can trust. Stay informed and never miss an important update.
        </Text>
      </Accordion>
    </div>
  );
};
