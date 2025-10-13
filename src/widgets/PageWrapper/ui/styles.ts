import styled from "styled-components";

export const PageHeader = styled.div`
  position: sticky;
  inset: 0 0 auto;
  width: 100%;
  z-index: var(--page-header-z-index);
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
  flex-flow: column nowrap;
  flex-grow: 1;
  min-height: 100%;
  max-width: 100%;
  width: 100%;
`;
