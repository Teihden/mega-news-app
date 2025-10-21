import type { PropsWithChildren } from "react";
import { defaultTheme } from "@app/styles";

export interface ITextProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "p" | "span";
  variant?: keyof typeof defaultTheme.text;
}

export interface IStyledTextProps {
  $variant?: keyof typeof defaultTheme.text;
}
