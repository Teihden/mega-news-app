import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { defaultTheme } from "@app/styles";

export interface ICommonBtnProps extends PropsWithChildren {
  variant?: keyof typeof defaultTheme.btn.variants;
  size?: keyof typeof defaultTheme.btn.sizes;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: number;
  text?: string;
  isActive?: boolean;
  isHover?: boolean;
  isDisabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export type TButtonProps = ICommonBtnProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  disabled?: boolean;
};

export type TAnchorProps = ICommonBtnProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  disabled?: never;
};

export type TBtnProps = TButtonProps | TAnchorProps;

export interface IStyledBtnProps {
  $size: ICommonBtnProps["size"];
  $variant: ICommonBtnProps["variant"];
  $isActive?: boolean;
  $isHover?: boolean;
  $isDisabled?: boolean;
}
