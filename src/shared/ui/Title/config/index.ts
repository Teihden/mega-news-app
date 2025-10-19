import type { HTMLAttributes } from "react";

export interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
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
