import type { ReactNode } from "react";
import { defaultTheme } from "@app/styles";

export interface ITextProps {
  className?: string;
  variant?: keyof typeof defaultTheme.text;
  children?: ReactNode;
}

export interface IStyledTextProps {
  $variant?: keyof typeof defaultTheme.text;
}
