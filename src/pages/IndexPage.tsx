import type { FC } from "react";
import { Title } from "@shared/ui/title";
import { Section } from "@shared/ui/section";
import { LogoCarousel, logoCarouselMock } from "@entities/logoCarousel";

/**
 * Компонент IndexPage является функциональным компонентом, который отвечает за отображение главной страницы.
 * @returns Компонент.
 */
export const IndexPage: FC = () => {
  return (
    <>
      <Section className={"visually-hidden"}>
        <Title level={1}>Mega News</Title>
      </Section>

      <Section
        withContainer={false}
      >
        <LogoCarousel {...logoCarouselMock.main} />
      </Section>
    </>
  );
};
