import styled, { css } from "styled-components";
import { MEDIA_BREAKPOINTS } from "@app/styles";

export const StyledSection = styled.section`
  &:not(:last-child) {
    ${({ theme }) => css`
      ${MEDIA_BREAKPOINTS
        .map((bp) => css`
          ${theme.section.marginBlock[bp] && theme.media[bp](`margin-block: ${theme.section.marginBlock[bp]};`)}
        `)
        .filter(Boolean)}
    `}
  }
`;

export const Header = styled.header`
  &:not(:last-child) {
    ${({ theme }) => css`
      ${MEDIA_BREAKPOINTS
        .map((bp) => css`
          ${theme.section.header.marginBlock[bp] && theme.media[bp](`margin-block: ${theme.section.header.marginBlock[bp]};`)}
        `)
        .filter(Boolean)}
    `}
  }
`;

export const Footer = styled.footer``;

export const Content = styled.div`
  &:not(:last-child) {
    ${({ theme }) => css`
      ${MEDIA_BREAKPOINTS
      .map((bp) => css`
          ${theme.section.content.marginBlock[bp] && theme.media[bp](`margin-block: ${theme.section.content.marginBlock[bp]};`)}
        `)
      .filter(Boolean)}
    `}
  }
`;
