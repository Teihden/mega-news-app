import styled from "styled-components";
import { getCommonResponsiveCss } from "@shared/utils";

export const Header = styled.div`
  display: block;

  ${({ theme }) => getCommonResponsiveCss({
    theme,
    values: theme.header.paddingBlock,
    property: "padding-block",
  })}
`;
