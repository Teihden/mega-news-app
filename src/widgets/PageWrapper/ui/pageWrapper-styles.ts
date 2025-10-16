import styled from "styled-components";

export const Header = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.header.zIndex};
  width: 100%;
  inset: 0 0 auto;
  background: ${({ theme }) => theme.header.bg};
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`;

export const Footer = styled.div`
  margin: auto 0 0;
`;

export const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  flex-flow: column nowrap;
  flex-grow: 1;
`;
