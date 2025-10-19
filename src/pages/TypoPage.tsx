import type { FC } from "react";
import { Section } from "@shared/ui/Section";
import { Title } from "@shared/ui/Title";
import { Text } from "@shared/ui/Text";
import { Btn } from "@shared/ui/Btn";
import UserIcon from "@shared/assets/images/icons/icon-user.svg?react";
import { InlineCluster, Stack } from "@bedrock-layout/primitives";

/**
 * Компонент TypoPage.
 * Представляет собой страницу, отображающую различные стили типографики.
 * @returns Компонент.
 */
export const TypoPage: FC = () => {
  return (
    <>
      <Section>
        <Title>Typography</Title>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>Title</Title>}
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
        headerSlot={<Title level={2} variantLevel={2}>Subtitle</Title>}
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
        headerSlot={<Title level={2} variantLevel={2}>Text</Title>}
      >
        <Stack gap={"size8"}>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Regular</Title>
            <Text variant={"regular"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</Text>
          </Stack>
          <Stack gap={"size8"}>
            <Title level={3} variantLevel={4} marginBlock={"0"}>Large</Title>
            <Text variant={"large"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</Text>
          </Stack>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>Buttons</Title>}
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
              <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<UserIcon />} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<UserIcon />} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<UserIcon />} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>with right Icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<UserIcon />} iconPosition={"right"} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<UserIcon />} iconPosition={"right"} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<UserIcon />} iconPosition={"right"} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Primary</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"primary"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"primary"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"primary"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Secondary</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"secondary"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"secondary"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"secondary"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"secondary"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Outline</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"outline"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"outline"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"outline"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"outline"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Blank</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"blank"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"blank"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"blank"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Only icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} />
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Link</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isHover={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isActive={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={3} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Link with icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>
        </Stack>
      </Section>
    </>
  );
};
