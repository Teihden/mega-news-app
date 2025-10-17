import type { FC } from "react";
import { Section } from "@shared/ui/Section";
import { Title } from "@shared/ui/Title";
import styled from "styled-components";

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
    ${({ theme }) => theme.media.mobile(`
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
    </>
  );
};
