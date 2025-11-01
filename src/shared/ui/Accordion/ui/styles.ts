import styled from "styled-components";
import { Btn as ComponentBtn } from "@shared/ui/Btn";
import type { IStyledBtn, IStyledHeader } from "../config";
import { Title } from "@shared/ui/Title";

export const Accordion = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  border-radius: ${({ theme }) => theme.default.borderRadius};
`;

export const Btn = styled(ComponentBtn)<IStyledBtn>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["100"] : theme.palette.white["100"]};
  pointer-events: ${({ $isBtnActive }) => $isBtnActive ? "unset" : "none"};

  svg {
    display: ${({ $isBtnActive }) => $isBtnActive ? "block" : "none"};
    transform: ${({ $isOpen }) => $isOpen ? "rotate(90deg)" : "rotate(0deg)"};
  }

  ${Title.Title} {
    color: inherit;
    transition: inherit;
  }
`;

export const Header = styled.div<IStyledHeader>`
  display: block;
  padding: 0;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  transition: height ${({ theme }) => theme.default.transitionDuration} linear;
`;

export const Content = styled.div`
  margin-block: 2.5rem 0;
`;
