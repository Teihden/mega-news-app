import styled, { css } from "styled-components";
import { WithIndicator } from "@entities/WithIndicator";
import { Btn } from "@shared/ui/Btn";

export const Footer = styled.div`
  display: grid;
  grid-template-columns: minmax(60rem, 1fr) minmax(30rem, 45rem) minmax(35rem, 45rem);
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  padding: 0 0 6.5rem;

  ${({ theme }) => theme.media.tablet(css`
    grid-template-columns: minmax(60rem, 1fr) minmax(30rem, 45rem);
  `)}

  ${({ theme }) => theme.media.tabletSmall(css`
    grid-template-columns: 1fr;
  `)}

  ${({ theme }) => theme.media.mobile(css`
    padding: 0;
  `)}
`;

export const Wrapper = styled.div`
  ${WithIndicator.WithIndicator} {
    &:not(:last-child) {
      margin-block: 0 2.5rem;
    }

    ${({ theme }) => theme.media.tablet(css`
      &:not(:last-child) {
        margin-block: 0 2.5rem;
      }
    `)}

    ${({ theme }) => theme.media.mobile(css`
      &:not(:last-child) {
        margin-block: 0 2.5rem;
      }
    `)}
  }
`;

export const InstagramWrapper = styled(Wrapper)`
  ${({ theme }) => theme.media.tablet(css`
    display: none;
  `)}
`;

export const CommentWrapper = styled(Wrapper)`
  ${({ theme }) => theme.media.tabletSmall(css`
    display: none;
  `)}
`;

export const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 3rem 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem 2rem 0;
  grid-column: span 2;
  background: ${({ theme }) => theme.palette.dark["5"]};
  border-radius: ${({ theme }) => `0 ${theme.default.borderRadius} ${theme.default.borderRadius} 0`};

  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    width: 100dvw;
    inset: 0 auto 0 -100dvw;
    background: ${({ theme }) => theme.palette.dark["5"]};
  }

  ${({ theme }) => theme.media.mobile(css`
    flex-flow: column nowrap;
    align-items: normal;
    justify-content: normal;
    grid-column: auto;
    border-radius: 0;

    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 100%;
      width: 100dvw;
      inset: 0 -100dvw 0 auto;
      background: ${theme.palette.dark["5"]};
    }
  `)}

  ${Btn.Btn} {
    font-size: 1.5rem;
    line-height: 1.16;

    &:not(:last-child) {
      position: relative;

      &::after {
        content: "|";
        position: static;
        color: inherit;
      }
    }
  }
`;

export const ContrastWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(auto, 50rem) auto;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem 2rem;
  padding: 5rem 5rem 5rem 0;
  background: ${({ theme }) => theme.palette.gray["100"]};
  border-radius: ${({ theme }) => `0 ${theme.default.borderRadius} ${theme.default.borderRadius} 0`};

  ${({ theme }) => theme.media.mobile(css`
    grid-template-columns: auto;
    padding: 3rem 0 0;
  `)}

  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    width: 100dvw;
    inset: 0 auto 0 -100dvw;
    background: ${({ theme }) => theme.palette.gray["100"]};
    z-index: -1;

    ${({ theme }) => theme.media.mobile(css`
      inset: 0 -${theme.container.paddingInline.mobile} 0 -${theme.container.paddingInline.mobile};
    `)}
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.palette.gray["100"]};

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

export const Form = styled.form`
  position: relative;
  display: block;

  ${Btn.Btn} {
    position: absolute;
    inset: 0 0 0 auto;
  }
`;
