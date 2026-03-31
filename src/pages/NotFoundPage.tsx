import type { FC } from "react";
import { Section } from "@shared/ui/section";
import { Title } from "@shared/ui/title";
import { Text } from "@shared/ui/text";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledSection = styled(Section)`
  padding-block: 20rem;

  ${({ theme }) => theme.bp.down("tablet")} {
    padding-block: 7rem 4rem;
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    padding-block: 16rem;
  }

  ${Section.Header} {
    &:not(:last-child) {
      margin-block: 0 4rem;

      ${({ theme }) => theme.bp.down("tablet")} {
        margin-block: 0 3rem;
      }

      ${({ theme }) => theme.bp.down("mobile")} {
        margin-block: 0 4rem;
      }
    }
  }
`;

const StyledTitle = styled(Title)`
  font-size: 24rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.palette.secondary["100"]};
  text-align: center;
  text-shadow: ${({ theme }) => theme.palette.shadow["1"]};

  ${({ theme }) => theme.bp.down("mobile")} {
    font-size: 20.25rem;
  }
`;

/**
 * Компонент NotFoundPage.
 * Отображает страницу, показывающую, что запрашиваемая страница не найдена.
 * @returns Компонент.
 */
export const NotFoundPage: FC = () => {
  const { t } = useTranslation([ "pages" ]);

  return (
    <StyledSection
      headerSlot={<StyledTitle level={1}>{t(($) => $.notFound.title)}</StyledTitle>}
    >
      <Text variant={"lg"} align={"center"}>
        {t(($) => $.notFound.description)}
      </Text>
    </StyledSection>
  );
};
