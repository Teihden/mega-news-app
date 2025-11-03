import { defaultTheme } from "@app/styles";
import type { FC, InputHTMLAttributes } from "react";
import { Input } from "../ui/styles";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: "input" | "textarea";
  componentSize?: keyof typeof defaultTheme.input.sizes;
  variant?: keyof typeof defaultTheme.input.variants;
  isHover?: boolean;
  isFocus?: boolean;
  isInvalid?: boolean;
  disabled?: boolean;
}

export interface IStyledInputProps {
  $componentSize: IInputProps["componentSize"];
  $variant: IInputProps["variant"];
  $isHover?: boolean;
  $isFocus?: boolean;
  $isInvalid?: boolean;
  disabled?: boolean;
}

export interface IInput extends FC<IInputProps> {
  Input: typeof Input;
}
