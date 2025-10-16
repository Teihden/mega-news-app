import type { FC, ReactNode } from "react";
import { Header } from "../ui/styles";
import { Content } from "../ui/styles";
import { Footer } from "../ui/styles";

export interface ISectionProps {
  className?: string;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  children?: ReactNode;
}

export interface ISection extends FC<ISectionProps> {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
}
