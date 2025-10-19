import type { FC } from "react";
import { Section } from "@shared/ui/Section";
import { Title } from "@shared/ui/Title";
import { Btn } from "@shared/ui/Btn";
import UserIcon from "@shared/assets/icons/icon-user.svg?react";
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
            <Title variantLevel={1}>H1/Roboto/36px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 2</Title>
            <Title variantLevel={2}>H2/Roboto/31px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 3</Title>
            <Title variantLevel={3}>H3/Roboto/25px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 4</Title>
            <Title variantLevel={4}>H4/Roboto/20px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 5</Title>
            <Title variantLevel={5}>H5/Roboto/16px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Title 6</Title>
            <Title variantLevel={6}>H6/Roboto/13px</Title>
          </InlineCluster>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>Subtitle</Title>}
      >
        <Stack gap={"size8"}>
          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Subtitle 1</Title>
            <Title variant={"subTitle"} variantLevel={1}>Subtitle 1/Roboto/Regular/16px</Title>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "3rem 5rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"}>Subtitle 2</Title>
            <Title variant={"subTitle"} variantLevel={2}>Subtitle 2/Roboto/Medium/14px</Title>
          </InlineCluster>
        </Stack>
      </Section>

      <Section
        headerSlot={<Title level={2} variantLevel={2}>Buttons</Title>}
      >
        <Stack gap={"size8"}>
          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Sizes</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"sm"} text={"Small"} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>with left Icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<UserIcon />} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<UserIcon />} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<UserIcon />} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>with right Icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<UserIcon />} iconPosition={"right"} />
              <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<UserIcon />} iconPosition={"right"} />
              <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<UserIcon />} iconPosition={"right"} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Primary</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"primary"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"primary"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"primary"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"primary"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Secondary</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"secondary"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"secondary"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"secondary"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"secondary"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Outline</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"outline"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"outline"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"outline"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"outline"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Blank</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
              <Btn variant={"blank"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"blank"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"blank"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Only icon</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} />
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isHover={true} />
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isActive={true} />
              <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isDisabled={true} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Link</Title>
            <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isHover={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isActive={true} />
              <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} />
            </InlineCluster>
          </InlineCluster>

          <InlineCluster style={{ "--gap": "2rem 3rem" }} align={"center"}>
            <Title level={2} variantLevel={4} marginBlock={"0"} style={{ width: "16rem" }}>Link with icon</Title>
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
