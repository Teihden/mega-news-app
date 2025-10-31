import type { FC, HTMLAttributes } from "react";
import { Title } from "../ui/styles";

export interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "div" | "span" | "p";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "title" | "subTitle";
  variantLevel?: number;
  marginBlock?: string | null;
}

export interface IStyledTitleProps {
  $variant: ITitleProps["variant"];
  $variantLevel: number;
  $marginBlock?: string | null;
}

export interface ITitle extends FC<ITitleProps> {
  Title: typeof Title;
}
