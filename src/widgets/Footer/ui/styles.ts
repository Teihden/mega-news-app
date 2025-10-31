import styled from "styled-components";
import { WithIndicator } from "@entities/WithIndicator";
import { Btn } from "@shared/ui/Btn";

export const Footer = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 0 6.5rem;
  gap: 3rem;
  grid-template-columns: minmax(60rem, 1fr) minmax(30rem, 45rem) minmax(35rem, 45rem);

  ${({ theme }) => theme.bp.down("tablet")} {
    grid-template-columns: minmax(60rem, 1fr) minmax(30rem, 45rem);
  }

  ${({ theme }) => theme.bp.down("tabletSmall")} {
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  ${WithIndicator.WithIndicator} {
    &:not(:last-child) {
      margin-block: 0 2.5rem;

      ${({ theme }) => theme.bp.down("tablet")} {
        margin-block: 0 2.5rem;
      }

      ${({ theme }) => theme.bp.down("mobile")} {
        margin-block: 0 2.5rem;
      }
    }
  }
`;

export const ContrastWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5rem 5rem 5rem 0;
  border-radius: ${({ theme }) => `0 ${theme.default.borderRadius} ${theme.default.borderRadius} 0`};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};
  gap: 4rem 2rem;
  grid-template-columns: minmax(auto, 50rem) auto;

  ${({ theme }) => theme.bp.down("mobile")} {
    padding: 3rem 0 0;
    grid-template-columns: auto;
  }

  &::before {
    position: absolute;
    z-index: -1;
    display: block;
    width: 100dvw;
    height: 100%;
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};
    content: "";
    inset: 0 auto 0 -100dvw;

    ${({ theme }) => theme.bp.down("mobile")} {
      inset: ${({ theme }) => `0 -${theme.container.paddingInline.mobile} 0 -${theme.container.paddingInline.mobile}`};;
    }
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem 2rem 0;
  border-radius: ${({ theme }) => `0 ${theme.default.borderRadius} ${theme.default.borderRadius} 0`};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.black["25"]};
  gap: 3rem 2rem;
  grid-column: span 2;

  ${({ theme }) => theme.bp.down("mobile")} {
    flex-flow: column nowrap;
    align-items: normal;
    justify-content: normal;
    border-radius: 0;
    grid-column: auto;

    &::after {
      position: absolute;
      display: block;
      width: 100dvw;
      height: 100%;
      background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.black["25"]};
      content: "";
      inset: 0 -100dvw 0 auto;
    }
  }

  &::before {
    position: absolute;
    display: block;
    width: 100dvw;
    height: 100%;
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.black["25"]};
    content: "";
    inset: 0 auto 0 -100dvw;
  }

  ${Btn.Btn} {
    font-size: 1.5rem;
    line-height: 1.16;

    &:not(:last-child) {
      position: relative;

      &::after {
        position: static;
        color: inherit;
        content: "|";
      }
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};
  gap: 1rem;

  &:not(:last-child) {
    margin-block: 0 1.5rem;
  }
`;

export const InstagramBtn = styled(Btn)`
  border-width: 0;
  background: ${({ theme }) => theme.palette.gradient["2"]} 100% / 200% no-repeat;

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.palette.gradient["2"]} 0 / 100% no-repeat;
    }
  }

  &:active {
    background: ${({ theme }) => theme.palette.gradient["2"]} 0 / 100% no-repeat;
  }
`;

export const TwitterBtn = styled(Btn)`
  border-width: 0;
  background: ${({ theme }) => theme.palette.gradient["3"]} 100% / 200% no-repeat;

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.palette.gradient["3"]} 0 / 100% no-repeat;
    }
  }

  &:active {
    background: ${({ theme }) => theme.palette.gradient["3"]} 0 / 100% no-repeat;
  }
`;
