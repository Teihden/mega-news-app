import styled from "styled-components";
import { COMMON_MEDIA_BREAKPOINTS } from "@app/styles";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;

  ${({ theme }) => COMMON_MEDIA_BREAKPOINTS
    .map((bp) =>
      theme.container.paddingInline[bp] && theme.media[bp](`padding-inline: ${theme.container.paddingInline[bp]}`),
    )
    .filter(Boolean)}
`;
