import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { btn } from "@app/styles";

export interface ICommonBtnProps {
  variant?: keyof typeof btn.variants;
  size?: keyof typeof btn.sizes;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: number;
  text?: string;
  children?: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
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
  $isDisabled?: boolean;
}
