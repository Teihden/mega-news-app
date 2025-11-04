import type { ReactNode } from "react";
import type { PAGES } from "@shared/config/constants";

export interface IHeaderProps {
  logo?: ReactNode;
  pages?: typeof PAGES;
}

export interface IStyledBtn {
  $isTooltipOpen?: boolean;
}

export interface IHeaderNavProps {
  pages?: IHeaderProps["pages"];
}
