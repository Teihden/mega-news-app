import styled from "styled-components";

export const Section = styled.section`
  &:not(:last-child) {
    margin-block: ${({ theme }) => theme.section.marginBlock.desktop};

    ${({ theme }) => theme.bp.down("tablet")} {
      margin-block: ${({ theme }) => theme.section.marginBlock.tablet};
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      margin-block: ${({ theme }) => theme.section.marginBlock.mobile};
    }
  }
`;

export const Header = styled.header`
  &:not(:last-child) {
    margin-block: ${({ theme }) => theme.section.header.marginBlock.desktop};

    ${({ theme }) => theme.bp.down("tablet")} {
      margin-block: ${({ theme }) => theme.section.header.marginBlock.tablet};
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      margin-block: ${({ theme }) => theme.section.header.marginBlock.mobile};
    }
  }
`;

export const Footer = styled.footer`
  display: block;
`;

export const Content = styled.div`
  &:not(:last-child) {
    margin-block: ${({ theme }) => theme.section.content.marginBlock.desktop};

    ${({ theme }) => theme.bp.down("tablet")} {
      margin-block: ${({ theme }) => theme.section.content.marginBlock.tablet};
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      margin-block: ${({ theme }) => theme.section.content.marginBlock.mobile};
    }
  }
`;
