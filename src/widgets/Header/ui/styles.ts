import styled from "styled-components";
import { getCommonResponsiveCss } from "@shared/utils";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => getCommonResponsiveCss({
    theme,
    values: theme.header.paddingBlock,
    property: "padding-block",
  })}
`;
