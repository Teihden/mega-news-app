import styled from "styled-components";
import { MEDIA_BREAKPOINTS } from "@app/styles";

export const Section = styled.section`
  &:not(:last-child) {
    ${({ theme }) => MEDIA_BREAKPOINTS
      .map((bp) =>
        theme.section.marginBlock[bp] && theme.media[bp](`margin-block: ${theme.section.marginBlock[bp]};`))
      .filter(Boolean)}
  }
`;

export const Header = styled.header`
  &:not(:last-child) {
    ${({ theme }) => MEDIA_BREAKPOINTS
      .map((bp) =>
        theme.section.header.marginBlock[bp] && theme.media[bp](`margin-block: ${theme.section.header.marginBlock[bp]};`))
      .filter(Boolean)}
  }
`;

export const Footer = styled.footer``;

export const Content = styled.div`
  &:not(:last-child) {
    ${({ theme }) => MEDIA_BREAKPOINTS
      .map((bp) =>
        theme.section.content.marginBlock[bp] && theme.media[bp](`margin-block: ${theme.section.content.marginBlock[bp]};`))
      .filter(Boolean)}
  }
`;
