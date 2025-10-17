import type { FC, ReactNode } from "react";
import { Header } from "../ui/section-styles";
import { Content } from "../ui/section-styles";
import { Footer } from "../ui/section-styles";
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
