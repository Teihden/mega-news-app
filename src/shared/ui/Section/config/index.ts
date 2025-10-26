import type { FC, PropsWithChildren, ReactNode } from "react";
import { Header, Content, Footer } from "../ui/sectionStyles";
import { Container } from "@shared/ui/Container";

export interface ISectionProps extends PropsWithChildren {
  className?: string;
  headerSlot?: ReactNode;
  headerTag?: "div" | "header";
  contentSlot?: ReactNode;
  footerSlot?: ReactNode;
  footerTag?: "div" | "footer";
}

export interface ISection extends FC<ISectionProps> {
  Container: typeof Container.Container;
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
}
