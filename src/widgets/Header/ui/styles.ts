import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.header.paddingBlock.desktop};

  ${({ theme }) => theme.bp.down("tablet")} {
    padding-block: ${({ theme }) => theme.header.paddingBlock.tablet};
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    padding-block: ${({ theme }) => theme.header.paddingBlock.mobile};
  }
`;
