import type { FC } from "react";
import { Section } from "@shared/ui/section";
import { Title } from "@shared/ui/title";
import { Text } from "@shared/ui/text";
import { Btn } from "@shared/ui/btn";
import IconUser from "@shared/assets/images/icons/icon-user.svg?react";
import { InlineCluster, Stack, Grid } from "@bedrock-layout/primitives";
import { WithIndicator } from "@entities/withIndicator";
import { Input } from "@shared/ui/input";
import { useAppStore } from "@app/store/useAppStore";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

/**
 * Компонент TypoPage.
 * Представляет собой страницу, отображающую различные стили типографики.
 * @returns Компонент.
 */
export const TypographyPage: FC = () => {
  const theme = useTheme();
  const themeMode = useAppStore(({ themeMode }) => themeMode);
  const { t } = useTranslation([ "pages" ]);

  return (
    <>
      <Section>
        <Title>{t(($) => $.typography.title)}</Title>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.typography.titleSection)}</Title>}
      >
        <Stack gap={"size8"}>
          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 1</Title>
            <Title level={3} variantLevel={1}>H1/Roboto/36px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 2</Title>
            <Title level={3} variantLevel={2}>H2/Roboto/31px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 3</Title>
            <Title level={3} variantLevel={3}>H3/Roboto/25px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 4</Title>
            <Title level={3} variantLevel={4}>H4/Roboto/20px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 5</Title>
            <Title level={3} variantLevel={5}>H5/Roboto/16px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 6</Title>
            <Title level={3} variantLevel={6}>H6/Roboto/13px</Title>
          </InlineCluster>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.typography.subtitleSection)}</Title>}
      >
        <Stack gap={"size8"}>
          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Subtitle 1</Title>
            <Title variant={"subTitle"} variantLevel={1}>Subtitle 1/Roboto/Regular/16px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Subtitle 2</Title>
            <Title variant={"subTitle"} variantLevel={2}>Subtitle 2/Roboto/Medium/14px</Title>
          </InlineCluster>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.typography.textSection)}</Title>}
      >
        <Stack gap={"size8"}>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Large</Title>
            <Text variant={"lg"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
              aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor
              pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam
              quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in
              egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
              aliquet.
            </Text>
          </Stack>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Medium</Title>
            <Text variant={"md"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
              aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor
              pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam
              quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in
              egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
              aliquet.
            </Text>
          </Stack>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Small</Title>
            <Text variant={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
              aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor
              pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam
              quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in
              egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
              aliquet.
            </Text>
          </Stack>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.typography.buttonsSection)}</Title>}
      >
        <Stack gap={"size8"}>
          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Sizes</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"sm"} text={"Small"} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>with left Icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<IconUser />} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<IconUser />} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<IconUser />} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>with right Icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<IconUser />} iconPosition={"right"} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<IconUser />} iconPosition={"right"} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<IconUser />} iconPosition={"right"} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Primary</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"md"} text={"Enabled"} icon={<IconUser />} />
              <Btn variant={"primary"} size={"md"} text={"Hovered"} icon={<IconUser />} isHover={true} />
              <Btn variant={"primary"} size={"md"} text={"Active"} icon={<IconUser />} isActive={true} />
              <Btn variant={"primary"} size={"md"} text={"Disabled"} icon={<IconUser />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Secondary</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"secondary"} size={"md"} text={"Enabled"} icon={<IconUser />} />
              <Btn variant={"secondary"} size={"md"} text={"Hovered"} icon={<IconUser />} isHover={true} />
              <Btn variant={"secondary"} size={"md"} text={"Active"} icon={<IconUser />} isActive={true} />
              <Btn variant={"secondary"} size={"md"} text={"Disabled"} icon={<IconUser />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Tertiary</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"tertiary"} size={"md"} text={"Enabled"} icon={<IconUser />} />
              <Btn variant={"tertiary"} size={"md"} text={"Hovered"} icon={<IconUser />} isHover={true} />
              <Btn variant={"tertiary"} size={"md"} text={"Active"} icon={<IconUser />} isActive={true} />
              <Btn variant={"tertiary"} size={"md"} text={"Disabled"} icon={<IconUser />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Outline</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"outline"} size={"md"} text={"Enabled"} icon={<IconUser />} />
              <Btn variant={"outline"} size={"md"} text={"Hovered"} icon={<IconUser />} isHover={true} />
              <Btn variant={"outline"} size={"md"} text={"Active"} icon={<IconUser />} isActive={true} />
              <Btn variant={"outline"} size={"md"} text={"Disabled"} icon={<IconUser />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Blank</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} size={"md"} text={"Enabled"} icon={<IconUser />} />
              <Btn variant={"blank"} size={"md"} text={"Hovered"} icon={<IconUser />} isHover={true} />
              <Btn variant={"blank"} size={"md"} text={"Active"} icon={<IconUser />} isActive={true} />
              <Btn variant={"blank"} size={"md"} text={"Disabled"} icon={<IconUser />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Only icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} size={"md"} icon={<IconUser />} />
              <Btn variant={"blank"} size={"md"} icon={<IconUser />} isHover={true} />
              <Btn variant={"blank"} size={"md"} icon={<IconUser />} isActive={true} />
              <Btn variant={"blank"} size={"md"} icon={<IconUser />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Link</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isInline={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isInline={true} isHover={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isInline={true} isActive={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isInline={true} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Link with icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<IconUser />} isInline={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<IconUser />} isInline={true} isHover={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<IconUser />} isInline={true} isActive={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<IconUser />} isInline={true} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.typography.withIndicatorSection)}</Title>}
      >
        <Stack gap={"size8"}>
          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Primary</Title>
            <WithIndicator>
              <Title level={4} variantLevel={4}>Title</Title>
            </WithIndicator>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Secondary</Title>
            <WithIndicator variant={"secondary"}>
              <Title level={4} variantLevel={4}>Title</Title>
            </WithIndicator>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Tertiary</Title>
            <WithIndicator variant={"tertiary"}>
              <Title level={4} variantLevel={4}>Title</Title>
            </WithIndicator>
          </InlineCluster>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>{t(($) => $.typography.inputsSection)}</Title>}
      >
        <Stack gap={"size8"}>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Sizes</Title>
            <Grid style={{ "--gap": "2rem 3rem", alignItems: "center" }} minItemWidth={"30rem"}>
              <Input variant={"primary"} componentSize={"sm"} defaultValue={"Small"} />
              <Input variant={"primary"} componentSize={"md"} defaultValue={"Medium"} />
              <Input variant={"primary"} componentSize={"lg"} defaultValue={"Large"} />
            </Grid>
          </Stack>

          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Primary with placeholder</Title>
            <Grid style={{ "--gap": "2rem 3rem" }} minItemWidth={"30rem"}>
              <Input variant={"primary"} componentSize={"md"} placeholder={"Enabled"} />
              <Input variant={"primary"} componentSize={"md"} placeholder={"Hovered"} isHover={true} />
              <Input variant={"primary"} componentSize={"md"} placeholder={"Focus"} isFocus={true} />
              <Input variant={"primary"} componentSize={"md"} placeholder={"Invalid"} isInvalid={true} />
              <Input variant={"primary"} componentSize={"md"} placeholder={"Disabled"} disabled={true} />
            </Grid>
          </Stack>

          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Primary with defaultValue</Title>
            <Grid style={{ "--gap": "2rem 3rem" }} minItemWidth={"30rem"}>
              <Input variant={"primary"} componentSize={"md"} defaultValue={"Enabled"} />
              <Input variant={"primary"} componentSize={"md"} defaultValue={"Hovered"} isHover={true} />
              <Input variant={"primary"} componentSize={"md"} defaultValue={"Focus"} isFocus={true} />
              <Input variant={"primary"} componentSize={"md"} defaultValue={"Invalid"} isInvalid={true} />
              <Input variant={"primary"} componentSize={"md"} defaultValue={"Disabled"} disabled={true} />
            </Grid>
          </Stack>

          <Stack
            gap={"size8"}
            style={{
              background: themeMode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"],
              padding: "2rem",
              borderRadius: theme.default.borderRadius,
            }}
          >
            <Title level={3} variantLevel={4} marginBlock={"0"}>Secondary with placeholder</Title>
            <Grid style={{ "--gap": "2rem 3rem" }} minItemWidth={"30rem"}>
              <Input variant={"secondary"} componentSize={"md"} placeholder={"Enabled"} />
              <Input variant={"secondary"} componentSize={"md"} placeholder={"Hovered"} isHover={true} />
              <Input variant={"secondary"} componentSize={"md"} placeholder={"Focus"} isFocus={true} />
              <Input variant={"secondary"} componentSize={"md"} placeholder={"Invalid"} isInvalid={true} />
              <Input variant={"secondary"} componentSize={"md"} placeholder={"Disabled"} disabled={true} />
            </Grid>
          </Stack>

          <Stack
            gap={"size8"}
            style={{
              background: themeMode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"],
              padding: "2rem",
              borderRadius: theme.default.borderRadius,
            }}
          >
            <Title level={3} variantLevel={4} marginBlock={"0"}>Secondary with defaultValue</Title>
            <Grid style={{ "--gap": "2rem 3rem" }} minItemWidth={"30rem"}>
              <Input variant={"secondary"} componentSize={"md"} defaultValue={"Enabled"} />
              <Input variant={"secondary"} componentSize={"md"} defaultValue={"Hovered"} isHover={true} />
              <Input variant={"secondary"} componentSize={"md"} defaultValue={"Focus"} isFocus={true} />
              <Input variant={"secondary"} componentSize={"md"} defaultValue={"Invalid"} isInvalid={true} />
              <Input variant={"secondary"} componentSize={"md"} defaultValue={"Disabled"} disabled={true} />
            </Grid>
          </Stack>
        </Stack>
      </Section>
    </>
  );
};
