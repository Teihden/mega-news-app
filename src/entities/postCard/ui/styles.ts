import styled from "styled-components";
import { MediaCard as ComponentMediaCard } from "@entities/mediaCard";
import { UserCard as ComponentUserCard } from "@entities/userCard";
import { Btn as ComponentBtn } from "@shared/ui/btn";

export const PostCard = styled.article`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.palette.white["100"]};
  box-shadow: ${({ theme }) => theme.palette.shadow["2"]};
  transform: translate3d(0, 0, 0);
`;

export const MediaCard = styled(ComponentMediaCard)`
  position: static;
  overflow: visible;
  border-radius: 0;
  transform: none;

  ${ComponentMediaCard.Img} {
    border-radius: ${({ theme }) => theme.default.borderRadius};
    aspect-ratio: 340 / 190;
  }

  ${ComponentMediaCard.Wrapper} {
    position: static;
    min-height: auto;
    padding: 2rem .75rem;
    background: ${({ theme }) => theme.palette.transparent};
  }
`;

export const UserCard = styled(ComponentUserCard)`
  padding: 0;
  border-radius: 0;
  background: ${({ theme }) => theme.palette.transparent};
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 2rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.palette.gray["100"]};
`;

export const Btn = styled(ComponentBtn)`
  display: flex;
  aspect-ratio: auto;
  color: ${({ theme }) => theme.palette.dark["100"]};
  gap: .75rem;

  &:disabled,
  &[disabled] {
    color: ${({ theme }) => theme.palette.dark["100"]};

    svg {
      color: ${({ theme }) => theme.palette.primary["100"]};
    }
  }

  ${ComponentBtn.Icon} {
    color: ${({ theme }) => theme.palette.dark["50"]};
  }
`;
