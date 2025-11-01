import type { FC, PropsWithChildren, ReactNode } from "react";
import { Accordion, Header, Content, Btn } from "../ui/styles";
import type { IBtn } from "@shared/ui/Btn";
import type { ITitle } from "@shared/ui/Title";

export interface IAccordionProps extends PropsWithChildren {
  headerProps?: IBtn;
  isDefaultOpen?: boolean;
  isActive?: boolean;
  titleProps?: ITitle;
  title?: ReactNode;
}

export interface IStyledBtn {
  $isOpen?: boolean;
  $isBtnActive?: boolean;
}

export interface IStyledHeader {
  $isOpen?: boolean;
}

export interface IAccordion extends FC<IAccordionProps> {
  Accordion: typeof Accordion;
  Header: typeof Header;
  Content: typeof Content;
  Btn: typeof Btn;
}
