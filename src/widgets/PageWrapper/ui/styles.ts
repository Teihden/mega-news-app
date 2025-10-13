import styled from "styled-components";

export const PageHeader = styled.div`
  position: sticky;
  z-index: var(--page-header-z-index);
  width: 100%;
  inset: 0 0 auto;
`;

export const PageMain = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`;

export const PageFooter = styled.div`
  margin: auto 0 0;
`;

export const PageLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  flex-flow: column nowrap;
  flex-grow: 1;
`;
