import styled from "styled-components";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IHeaderInnerMenuProps, IStyledBtn } from "../config";
import { Overlay as ComponentOverlay } from "@shared/ui/overlay";
import { Accordion as ComponentAccordion } from "@shared/ui/accordion";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.header.paddingBlock.desktop};

  ${({ theme }) => theme.bp.down("tablet")} {
    padding-block: ${({ theme }) => theme.header.paddingBlock.tablet};
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    padding-block: ${({ theme }) => theme.header.paddingBlock.mobile};
  }
`;

export const HeaderLeftInner = styled.div`
  display: flex;
  align-items: center;
  gap: 7.5rem;

  ${({ theme }) => theme.bp.down("tablet")} {
    gap: 0;
  }
`;

export const HeaderRightInner = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const HeaderMenu = styled.div`
  margin: 0;

  ${({ theme }) => theme.bp.down("tablet")} {
    margin: 0 4rem 0 0;
  }

  ${({ theme }) => theme.bp.down("mobile")} {
    margin: 0 2rem 0 0;
  }
`;

export const HeaderInnerMenu = styled.div<IHeaderInnerMenuProps>`
  display: flex;
  width: 100%;
  max-width: 55rem;
  height: 100%;
  padding: 2.5rem 3rem 3rem ${({ theme }) => theme.container.paddingInline.tablet};
  background: ${({ theme }) => theme.palette.white["100"]};
  cursor: default;
  transform: ${({ $isMenuOpen }) => $isMenuOpen ? "translate3d(0, 0, 0)" : "translate3d(-100%, 0, 0)"};
  transition: transform ${({ theme }) => theme.default.transitionDuration} ${({ $isMenuOpen }) => $isMenuOpen ? ".2s" : "0s"} ease-in-out;

  ${({ theme }) => theme.bp.down("mobile")} {
    padding: 2rem ${({ theme }) => theme.container.paddingInline.mobile} 2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const NavBtn = styled(ComponentBtn)<IStyledBtn>`
  svg {
    transform: ${({ $isTooltipOpen }) => $isTooltipOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
  }
`;

export const MenuBtn = styled(ComponentBtn)<IStyledBtn>`
  padding: 0 0 0 2rem;
`;

export const Overlay = styled(ComponentOverlay)`
  align-items: flex-start;
  justify-content: flex-start;
  backdrop-filter: blur(1rem);
  background: transparent;
  cursor: pointer;
  inset: 11rem 0 0;
  transition: opacity ${({ theme }) => theme.default.transitionDuration} ${({ isVisible }) => isVisible ? "0s" : ".2s"} ease-in-out;
`;

export const Accordion = styled(ComponentAccordion)`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.palette.gray["100"]};
`;
