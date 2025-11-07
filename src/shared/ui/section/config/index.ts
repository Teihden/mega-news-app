import type { FC, PropsWithChildren, ReactNode } from "react";
import { Header, Content, Footer, Section } from "../ui/styles";
import { Container } from "@shared/ui/container";
import type { CSSProp } from "styled-components";

export interface ISectionProps extends PropsWithChildren {
  className?: string;
  as?: "section" | "div";
  headerSlot?: ReactNode;
  headerTag?: "div" | "header";
  contentSlot?: ReactNode;
  footerSlot?: ReactNode;
  footerTag?: "div" | "footer";
  withContainer?: boolean;
  css?: CSSProp;
}

export interface ISection extends FC<ISectionProps> {
  Section: typeof Section;
  Container: typeof Container.Container;
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
}
