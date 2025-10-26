import styled from "styled-components";
import { getCommonResponsiveCss } from "@shared/utils";

export const Section = styled.section`
  &:not(:last-child) {
    ${({ theme }) => getCommonResponsiveCss({
      theme,
      values: theme.section.marginBlock,
      property: "margin-block",
    })}
  }
`;

export const Header = styled.header`
  &:not(:last-child) {
    ${({ theme }) => getCommonResponsiveCss({
      theme,
      values: theme.section.header.marginBlock,
      property: "margin-block",
    })}
  }
`;

export const Footer = styled.footer`
  display: block;
`;

export const Content = styled.div`
  &:not(:last-child) {
    ${({ theme }) => getCommonResponsiveCss({
      theme,
      values: theme.section.content.marginBlock,
      property: "margin-block",
    })}
  }
`;
