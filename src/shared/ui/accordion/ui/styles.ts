import styled from "styled-components";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IStyledBtn, IStyledContentWrapper, IStyledHeader } from "../config";

export const Accordion = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  border-radius: ${({ theme }) => theme.default.borderRadius};
`;

export const Btn = styled(ComponentBtn)<IStyledBtn>`
  pointer-events: ${({ $isBtnActive }) => $isBtnActive ? "unset" : "none"};
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["100"] : theme.palette.white["100"]};

  svg {
    transform: ${({ $isOpen }) => $isOpen ? "rotate(90deg)" : "rotate(0deg)"};
    display: ${({ $isBtnActive }) => $isBtnActive ? "block" : "none"};
    color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["50"] : theme.palette.white["50"]};
  }
`;

export const Header = styled.div<IStyledHeader>`
  display: block;
  padding: 0;
`;

export const ContentWrapper = styled.div<IStyledContentWrapper>`
  overflow: ${({ $isVisible }) => $isVisible ? "visible" : "hidden"};
  transition: height ${({ theme }) => theme.default.transitionDuration} linear;
`;

export const Content = styled.div`
  margin-block: 2.5rem 0;
`;
