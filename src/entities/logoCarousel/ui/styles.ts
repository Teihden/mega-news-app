import styled, { keyframes } from "styled-components";
import { Img as ComponentImg } from "@shared/ui/img";
import { Btn as ComponentBtn } from "@shared/ui/btn";

const slideIn = keyframes`
  from {
    transform:translate3d(0,0,0);
  }

  to {
    transform:translate3d(-50%,0,0);
  }
`;

export const LogoCarousel = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.placeholder.bg};

  &::before {
    position: absolute;
    z-index: 1;
    width: 18rem;
    height: 8.5rem;
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.gradient["4"] : theme.palette.gradient["5"]};
    content: "";
    inset: 0 auto 0 0;
    pointer-events: none;
    transform: rotate(180deg);

    ${({ theme }) => theme.bp.down("mobile")} {
      width: 9rem;
    }
  }

  &::after {
    position: absolute;
    z-index: 1;
    width: 18rem;
    height: 8.5rem;
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.gradient["4"] : theme.palette.gradient["5"]};
    content: "";
    inset: 0 0 0 auto;
    pointer-events: none;

    ${({ theme }) => theme.bp.down("mobile")} {
      width: 9rem;
    }
  }
`;

export const LogoCarouselInner = styled.div`
  display: flex;
  align-items: center;
  animation: ${slideIn} 50s linear infinite;
  gap: 3rem;

  ${({ theme }) => theme.bp.down("tablet")} {
    animation: ${slideIn} 35s linear infinite;
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    animation: ${slideIn} 20s linear infinite;
  }
`;

export const Img = styled(ComponentImg)`
  width: 21.25rem;
  height: 6rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["25"] : theme.palette.washDark["100"]};
  filter: blur(.3rem);
  transition: filter ${({ theme }) => theme.default.transitionDuration} ease-in-out;

  ${({ theme }) => theme.bp.down("mobile")} {
    width: 16rem;
  }
`;

export const Btn = styled(ComponentBtn)`
  position: relative;
  width: fit-content;
  height: fit-content;
  flex-shrink: 0;
  padding: 0;
  border-width: 0;
  color: ${({ theme }) => theme.palette.white["100"]};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.white["100"]};

      ${Img} {
        filter: blur(0);
      }
    }
  }

  &:active {
    color: ${({ theme }) => theme.palette.white["100"]};
  }
`;

export const HashTag = styled.span`
  position: absolute;
  color: inherit;
  font-size: 2rem;
  font-weight: 500;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
`;
