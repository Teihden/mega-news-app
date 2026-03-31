import type { ReactNode } from "react";
import type { IMenuRoute } from "@shared/types";

export interface IHeaderProps {
  logo?: ReactNode;
  pages?: readonly IMenuRoute[];
}

export interface IStyledBtn {
  $isTooltipOpen?: boolean;
}

export interface IHeaderNavProps {
  pages?: IHeaderProps["pages"];
}

export interface IHeaderMenuProps {
  pages?: IHeaderProps["pages"];
}

export interface IHeaderInnerMenuProps {
  $isMenuOpen?: boolean;
}
