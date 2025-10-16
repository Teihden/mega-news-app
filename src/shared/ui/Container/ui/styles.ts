import styled, { css } from "styled-components";
import { MEDIA_BREAKPOINTS } from "@app/styles";

export const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
  width: 100%;

  ${({ theme }) => css`
    ${MEDIA_BREAKPOINTS
      .map((bp) => css`
        ${theme.container.paddingInline[bp] && theme.media[bp](`padding-inline: ${theme.container.paddingInline[bp]};`)}
      `)
      .filter(Boolean)}
  `}
`;
