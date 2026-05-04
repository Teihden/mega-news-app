import type { FC } from "react";
import { Section } from "@shared/ui/section";
import { Title } from "@shared/ui/title";
import { Stack } from "@bedrock-layout/primitives";
import { Img } from "@shared/ui/img";
import video from "@shared/assets/videos/music/mixkit-guitarist-playing-an-electric-guitar-on-stage-475-full-hd.mp4";
import imgPoster from "@shared/assets/images/posters/475-thumb-1080-0.jpg";
import imgAbstract7 from "@shared/assets/images/abstract/abstract-7.jpg";
import imgSport5Desktop from "@shared/assets/images/sport/sport-5-desktop.jpg";
import imgSport5Tablet from "@shared/assets/images/sport/sport-5-tablet.jpg";
import imgSport5Mobile from "@shared/assets/images/sport/sport-5-mobile.jpg";
import { COMMON_MEDIA_BREAKPOINTS } from "@app/styles";
import { Accordion } from "@shared/ui/accordion";
import { BurgerBtn } from "@features/burgerBtn";
import { MediaCard, mediaCardMock } from "@entities/mediaCard";
import { Video } from "@shared/ui/video";
import { UserCard, userCardMock } from "@entities/userCard";
import { PostCard, postCardMock } from "@entities/postCard";
import { useTranslation } from "react-i18next";

/**
 * Displays the page that showcases shared UI components.
 * @returns Component showcase page.
 */
export const ComponentPage: FC = () => {
  const { t } = useTranslation([ "pages" ]);

  return (
    <>
      <Section>
        <Title>{t(($) => $.components.title)}</Title>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.components.images)}</Title>}
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
            <Title level={3} variantLevel={4} marginBlock={"0"}>{t(($) => $.components.picture)}</Title>
            <Img
              src={imgSport5Desktop}
              width={1920}
              height={400}
              sources={[
                {
                  srcset: imgSport5Mobile,
                  media: COMMON_MEDIA_BREAKPOINTS.mobile,
                  type: "image/jpeg",
                },
                {
                  srcset: imgSport5Tablet,
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
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.components.video)}</Title>}
      >
        <Video
          width={1920}
          height={400}
          poster={imgPoster}
          sources={[
            {
              src: video,
              type: "video/mp4",
            },
          ]}
          css={`
            aspect-ratio: 1.9;
          `}
        />
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.components.accordions)}</Title>}
      >
        <Stack gap={"size8"}>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>{t(($) => $.components.closed)}</Title>
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
            <Title level={3} variantLevel={4} marginBlock={"0"}>{t(($) => $.components.opened)}</Title>
            <Accordion isControlledOpen={true}>
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
            <Title level={3} variantLevel={4} marginBlock={"0"}>{t(($) => $.components.openedAndInactive)}</Title>
            <Accordion isControlledOpen={true} isActive={false}>
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

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.components.burgerBtn)}</Title>}
      >
        <BurgerBtn />
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.components.mediaCard)}</Title>}
      >
        <MediaCard
          {...mediaCardMock.main[0]}
          css={`
            width: 45rem;
            height: 56rem;
          `}
        />
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.components.userCard)}</Title>}
      >
        <UserCard
          {...userCardMock.componentPage}
          css={`
            max-width: 40rem;
          `}
        />
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.components.postCard)}</Title>}
      >
        <PostCard
          {...postCardMock.componentPage}
          css={`
            max-width: 45rem;
          `}
        />
      </Section>
    </>
  );
};
