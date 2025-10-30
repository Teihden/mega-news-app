import type { FC } from "react";
import { Section } from "@shared/ui/Section";
import { Title } from "@shared/ui/Title";
import { Text } from "@shared/ui/Text";
import styled, { css } from "styled-components";

const StyledSection = styled(Section)`
  padding-block: 20rem;

  @media (width <= 1280px) {
    padding-block: 7rem 4rem;
  }

  @media (width <= 767px) {
    padding-block: 16rem;
  }

  ${Section.Header} {
    &:not(:last-child) {
      margin-block: 0 4rem;

      @media (width <= 1280px) {
        margin-block: 0 3rem;
      }

      @media (width <= 767px) {
        margin-block: 0 4rem;
      }
    }
  }
`;

const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.secondary["100"]};
  font-size: 24rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  text-shadow: ${({ theme }) => theme.palette.shadow["1"]};

  ${({ theme }) => theme.media.mobile(css`
    font-size: 20.25rem;
  `)}
`;

/**
 * Компонент NotFoundPage.
 * Отображает страницу, показывающую, что запрашиваемая страница не найдена.
 * @returns Компонент.
 */
export const NotFoundPage: FC = () => {
  return (
    <StyledSection
      headerSlot={<StyledTitle level={1}>404</StyledTitle>}
    >
      <Text variant={"lg"} align={"center"}>
        {"OOPS! Page you're looking for doesn't exist. Please use search for help."}
      </Text>
    </StyledSection>
  );
};
