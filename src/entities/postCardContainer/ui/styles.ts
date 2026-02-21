import styled from "styled-components";

export const PostCardContainer = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(38rem, 1fr));

  ${({ theme }) => theme.bp.down("tablet")} {
    gap: 2rem;
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    gap: 1rem;
  }
`;

export const Sentinel = styled.div`
  position: absolute;
  display: block;
  grid-column: 1 / -1;
  inset: auto 0 0;
`;
