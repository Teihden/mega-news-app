import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
  padding-inline: ${({ theme }) => theme.container.paddingInline.desktop};

  ${({ theme }) => theme.bp.down("tablet")} {
    padding-inline: ${({ theme }) => theme.container.paddingInline.tablet};
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    padding-inline: ${({ theme }) => theme.container.paddingInline.mobile};
  }
`;
