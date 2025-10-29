import type { FC } from "react";
import { Section } from "@shared/ui/Section";
import { Title } from "@shared/ui/Title";
import { Stack } from "@bedrock-layout/primitives";
import { Img } from "@shared/ui/Img";
import imgAbstract7 from "@shared/assets/images/abstract/abstract-7.jpg";
import imgSport5Desktop from "@shared/assets/images/sport/sport-5-desktop.jpg";
import imgSport5Tablet from "@shared/assets/images/sport/sport-5-tablet.jpg";
import imgSport5Mobile from "@shared/assets/images/sport/sport-5-mobile.jpg";
import { COMMON_MEDIA_BREAKPOINTS } from "@app/styles";

/**
 * Компонент ComponentPage.
 * Представляет собой страницу, отображающую различные компоненты.
 * @returns Компонент.
 */
export const ComponentPage: FC = () => {
  return (
    <>
      <Section>
        <Title>Components</Title>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>Images</Title>}
      >
        <Stack gap={"size8"}>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Img</Title>
            <Img
              src={imgAbstract7}
              width={1920}
              height={400}
            />
          </Stack>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Picture</Title>
            <Img
              src={imgSport5Desktop}
              width={1920}
              height={500}
              sources={[
                {
                  srcSet: imgSport5Mobile,
                  media: COMMON_MEDIA_BREAKPOINTS.mobile,
                  type: "image/jpeg",
                },
                {
                  srcSet: imgSport5Tablet,
                  media: COMMON_MEDIA_BREAKPOINTS.tablet,
                  type: "image/jpeg",
                },
              ]}
              css={`
                height: auto;
                aspect-ratio: 1.9;
              `}
            />
          </Stack>
        </Stack>
      </Section>
    </>
  );
};
