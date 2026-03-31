import styled from "styled-components";
import { Btn } from "@shared/ui/btn";
import type { IStyledBtn } from "../config";

export const LanguageToggler = styled(Btn)<IStyledBtn>`
  display: flex;

  svg {
    transform: ${({ $isTooltipOpen }) => $isTooltipOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
  }
`;
