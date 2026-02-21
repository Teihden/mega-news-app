import styled from "styled-components";

export const PostCardContainer = styled.div`
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
