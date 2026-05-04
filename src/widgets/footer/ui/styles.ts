import styled from "styled-components";
import { WithIndicator } from "@entities/withIndicator";
import { Btn } from "@shared/ui/btn";
import { Text } from "@shared/ui/text";

export const Footer = styled.div`
  display: grid;
  grid-template-columns: minmax(60rem, 1fr) minmax(30rem, 45rem) minmax(35rem, 45rem);
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 0 6.5rem;

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
  height: 100%;

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
  grid-template-columns: minmax(auto, 50rem) auto;
  gap: 4rem 2rem;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5rem 5rem 5rem 0;
  border-radius: ${({ theme }) => `0 ${theme.default.borderRadius} ${theme.default.borderRadius} 0`};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};

  ${({ theme }) => theme.bp.down("mobile")} {
    grid-template-columns: auto;
    padding: 3rem 0 0;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0 auto 0 -100dvw;
    display: block;
    width: 100dvw;
    height: 100%;
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};

    ${({ theme }) => theme.bp.down("mobile")} {
      inset: ${({ theme }) => `0 -${theme.container.paddingInline.mobile} 0 -${theme.container.paddingInline.mobile}`};;
    }
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  grid-column: span 2;
  gap: 3rem 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 0;
  border-radius: ${({ theme }) => `0 ${theme.default.borderRadius} ${theme.default.borderRadius} 0`};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.black["25"]};

  ${({ theme }) => theme.bp.down("mobile")} {
    grid-column: auto;
    flex-flow: column nowrap;
    align-items: normal;
    justify-content: normal;
    width: 100dvw;
    margin: 0 -${({ theme }) => theme.container.paddingInline.mobile} 0 -${({ theme }) => theme.container.paddingInline.mobile};
    padding: 2rem ${({ theme }) => theme.container.paddingInline.mobile};
    border-radius: 0;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 -100dvw;
    display: block;
    width: 100dvw;
    height: 100%;
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.black["25"]};

    ${({ theme }) => theme.bp.down("mobile")} {
      content: none;
    }
  }

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

export const CommentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 2.25rem;
  justify-content: space-between;
  min-height: 45rem;
`;

export const Comment = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};

  ${Text.Text} {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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
