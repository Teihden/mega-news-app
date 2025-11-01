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
import { Accordion } from "@shared/ui/Accordion";

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

      <Section
        headerSlot={<Title level={2} variantLevel={2}>Accordions</Title>}
      >
        <Stack gap={"size8"}>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Closed</Title>
            <Accordion>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
              aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor
              pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam
              quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in
              egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
              aliquet.
            </Accordion>
          </Stack>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Opened</Title>
            <Accordion isDefaultOpen={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
              aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor
              pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam
              quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in
              egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
              aliquet.
            </Accordion>
          </Stack>

          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Opened and inactive</Title>
            <Accordion isDefaultOpen={true} isActive={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
              aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor
              pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam
              quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in
              egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
              aliquet.
            </Accordion>
          </Stack>
        </Stack>
      </Section>
    </>
  );
};
