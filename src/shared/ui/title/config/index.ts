import type { CSSProperties, FC, HTMLAttributes } from "react";
import { Title } from "../ui/styles";

export interface ITitleProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "span" | "p";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "title" | "subTitle";
  variantLevel?: number;
  marginBlock?: CSSProperties["marginBlock"] | null;
}

export interface IStyledTitleProps {
  $variant: ITitleProps["variant"];
  $variantLevel: ITitleProps["variantLevel"];
  $marginBlock?: ITitleProps["marginBlock"];
}

export interface ITitle extends FC<ITitleProps> {
  Title: typeof Title;
}
