import styled from "styled-components";

export const Header = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.header.zIndex};
  inset: 0 0 auto;
  width: 100%;
  background: ${({ theme }) => theme.header.bg};

  ${({ theme }) => theme.bp.down("tablet")} {
    box-shadow: ${({ theme }) => theme.palette.shadow["2"]};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding-block: ${({ theme }) => theme.main.paddingBlock.desktop};

  ${({ theme }) => theme.bp.down("tablet")} {
    padding-block: ${({ theme }) => theme.main.paddingBlock.tablet};
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    padding-block: ${({ theme }) => theme.main.paddingBlock.mobile};
  }
`;

export const Footer = styled.div`
  margin: auto 0 0;
`;

export const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
`;
