import type { FC, PropsWithChildren, ReactNode } from "react";
import { Accordion, Header, Content, Btn, ContentWrapper } from "../ui/styles";
import type { TBtnProps } from "@shared/ui/Btn";
import type { ITitleProps } from "@shared/ui/Title";
import type { CSSProp } from "styled-components";

export interface IAccordionProps extends PropsWithChildren {
  btnProps?: TBtnProps;
  titleProps?: ITitleProps;
  title?: ReactNode;
  isControlledOpen?: boolean;
  isActive?: boolean;
  css?: CSSProp;
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
  ContentWrapper: typeof ContentWrapper;
  Content: typeof Content;
  Btn: typeof Btn;
}
