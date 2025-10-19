import styled from "styled-components";
import { getCommonResponsiveCss } from "@shared/utils";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;

  ${({ theme }) => getCommonResponsiveCss({
    theme,
    values: theme.container.paddingInline,
    property: "padding-inline",
  })}
`;
