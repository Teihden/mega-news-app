import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode, Ref } from "react";
import { defaultTheme } from "@app/styles";
import { Btn } from "../ui/styles";

export interface ICommonBtnProps extends PropsWithChildren {
  variant?: keyof typeof defaultTheme.btn.variants;
  size?: keyof typeof defaultTheme.btn.sizes;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: number;
  text?: ReactNode;
  isActive?: boolean;
  isHover?: boolean;
  isDisabled?: boolean;
  isRound?: boolean;
  isSquare?: boolean;
  isInline?: boolean;
}

export type TButtonProps = ICommonBtnProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  hrefLang?: never;
  download?: never;
  target?: never;
  rel?: never;
  ref?: Ref<HTMLButtonElement>;
};

export type TAnchorProps = ICommonBtnProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: never;
  type?: never;
  ref?: Ref<HTMLAnchorElement>;
};

export type TBtnProps = TButtonProps | TAnchorProps;

export interface IStyledBtnProps {
  $size: ICommonBtnProps["size"];
  $variant: ICommonBtnProps["variant"];
  $isActive?: boolean;
  $isHover?: boolean;
  $isDisabled?: boolean;
  $isRound?: boolean;
  $isSquare?: boolean;
  $isInline?: boolean;
}

export interface IBtn extends FC<TBtnProps> {
  Btn: typeof Btn;
}
