import styled from "styled-components";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IStyledBtn } from "../config";

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

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 7.5rem;

  ${({ theme }) => theme.bp.down("tablet")} {
    gap: 0;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Logo = styled.div`
  display: flex;
  width: 15rem;
  height: 6rem;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Btn = styled(ComponentBtn)<IStyledBtn>`
  svg {
    transform: ${({ $isTooltipOpen }) => $isTooltipOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
  }
`;
