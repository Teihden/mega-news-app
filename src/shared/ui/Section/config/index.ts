import type { FC, ReactNode } from "react";
import { Header, Content, Footer } from "../ui/sectionStyles";
import { Container } from "@shared/ui/Container";

export interface ISectionProps {
  className?: string;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  children?: ReactNode;
}

export interface ISection extends FC<ISectionProps> {
  Container: typeof Container.Container;
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
}
