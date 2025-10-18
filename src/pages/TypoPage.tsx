import type { FC } from "react";
import { Section } from "@shared/ui/Section";
import { Title } from "@shared/ui/Title";
import styled, { css } from "styled-components";
import { Btn } from "@shared/ui/Btn";
import UserIcon from "@shared/assets/icons/icon-user.svg?react";

const StyledSection = styled(Section)`
  ${Section.Header} {
    &:not(:last-child) {
      margin-block: 0;
    }
  }

  ${Section.Container} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 3rem 4rem;
    ${({ theme }) => theme.media.mobile(css`
      flex-flow: column wrap;
      align-items: flex-start;
    `)}
  }
`;

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

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Title 1</Title>}
      >
        <Title variantLevel={1}>H1/Roboto/36px</Title>
      </StyledSection>

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Title 2</Title>}
      >
        <Title variantLevel={2}>H2/Roboto/31px</Title>
      </StyledSection>

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Title 3</Title>}
      >
        <Title variantLevel={3}>H3/Roboto/25px</Title>
      </StyledSection>

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Title 4</Title>}
      >
        <Title variantLevel={4}>H4/Roboto/20px</Title>
      </StyledSection>

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Title 5</Title>}
      >
        <Title variantLevel={5}>H5/Roboto/16px</Title>
      </StyledSection>

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Title 6</Title>}
      >
        <Title variantLevel={6}>H6/Roboto/13px</Title>
      </StyledSection>

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Subtitle 1</Title>}
      >
        <Title variant={"subTitle"} variantLevel={1}>Subtitle 1/Roboto/Regular/16px</Title>
      </StyledSection>

      <StyledSection
        headerSlot={<Title level={2} variantLevel={4}>Subtitle 2</Title>}
      >
        <Title variant={"subTitle"} variantLevel={2}>Subtitle 2/Roboto/Medium/14px</Title>
      </StyledSection>

      <Section
        headerSlot={<Title level={2} variantLevel={4}>Buttons</Title>}
      >
        {/* Sizes */}
        <Btn variant={"primary"} size={"sm"} text={"Small"} />
        <Btn variant={"primary"} size={"md"} text={"Medium"} />
        <Btn variant={"primary"} size={"lg"} text={"Large"} />

        {/* with left Icon */}
        <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<UserIcon />} />
        <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<UserIcon />} />
        <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<UserIcon />} />

        {/* with right Icon */}
        <Btn variant={"primary"} size={"sm"} text={"Small"} icon={<UserIcon />} iconPosition={"right"} />
        <Btn variant={"primary"} size={"md"} text={"Medium"} icon={<UserIcon />} iconPosition={"right"} />
        <Btn variant={"primary"} size={"lg"} text={"Large"} icon={<UserIcon />} iconPosition={"right"} />

        {/* Primary */}
        <Btn variant={"primary"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
        <Btn variant={"primary"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
        <Btn variant={"primary"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
        <Btn variant={"primary"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />

        {/* Secondary */}
        <Btn variant={"secondary"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
        <Btn variant={"secondary"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
        <Btn variant={"secondary"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
        <Btn variant={"secondary"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />

        {/* Outline */}
        <Btn variant={"outline"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
        <Btn variant={"outline"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
        <Btn variant={"outline"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
        <Btn variant={"outline"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />

        {/* Blank */}
        <Btn variant={"blank"} size={"md"} text={"Enabled"} icon={<UserIcon />} />
        <Btn variant={"blank"} size={"md"} text={"Hovered"} icon={<UserIcon />} isHover={true} />
        <Btn variant={"blank"} size={"md"} text={"Active"} icon={<UserIcon />} isActive={true} />
        <Btn variant={"blank"} size={"md"} text={"Disabled"} icon={<UserIcon />} isDisabled={true} />

        {/* Only icon */}
        <Btn variant={"blank"} size={"md"} icon={<UserIcon />} />
        <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isHover={true} />
        <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isActive={true} />
        <Btn variant={"blank"} size={"md"} icon={<UserIcon />} isDisabled={true} />

        {/* Link */}
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} />
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isHover={true} />
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} isActive={true} />
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} />

        {/* Link with icon */}
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} />
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} isHover={true} />
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} isActive={true} />
        <Btn variant={"blank"} text={"Link"} href={"#"} target={"_blank"} icon={<UserIcon />} isDisabled={true} />
      </Section>
    </>
  );
};
