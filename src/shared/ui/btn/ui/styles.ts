import styled, { css } from "styled-components";
import type { IStyledBtnProps, IStyledIconProps } from "../config";
import { palette } from "@app/styles";
import { Title } from "@shared/ui/title";

export const Btn = styled.button<IStyledBtnProps>`
  cursor: pointer;
  user-select: none;
  display: ${({ $isInline }) => $isInline ? "inline-flex" : "flex"};
  gap: ${({ theme, $size }) => theme.btn.sizes[$size!].gap};
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: ${({ theme, $isInline, $size }) => $isInline ? "auto" : theme.btn.sizes[$size!].height};
  padding-inline: ${({ theme, $isInline }) => $isInline ? 0 : theme.btn.paddingInline};
  border-color: ${({ theme, $variant }) => theme.btn.variants[$variant!].borderColor};
  border-style: ${({ $isInline }) => $isInline ? "none" : "solid"};
  border-width: ${({ theme, $isInline }) => $isInline ? 0 : theme.btn.borderWidth};
  border-radius: ${({ theme, $isInline }) => $isInline ? 0 : theme.btn.borderRadius};
  font-family: inherit;
  font-size: ${({ theme }) => theme.btn.fontSize};
  font-weight: ${({ theme, $isInline }) => $isInline ? "inherit" : theme.btn.fontWeight};
  line-height: ${({ theme }) => theme.btn.lineHeight};
  color: ${({ theme, $variant }) => theme.btn.variants[$variant!].color};
  text-decoration: none;
  appearance: none;
  background: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].bg};
  box-shadow: none;
  transition: ${({ theme }) => theme.default.transitionDuration} ease-in-out;
  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].hover.borderColor};
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.color};
      background: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].hover.bg};

      svg {
        color: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.iconColor};
      }
    }
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.btn.outline};
    outline-offset: .25rem;
  }

  &:active {
    border-color: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].active.borderColor};
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.color};
    background: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].active.bg};

    svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.iconColor};
    }
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    border-color: ${({ theme, $isInline, $variant }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.borderColor};
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.color};
    background: ${({ theme, $isInline, $variant }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.bg};

    svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.iconColor};
    }
  }

  ${({ theme, $isInline, $variant, $isHover }) => {
    return $isHover && css`
      pointer-events: none;
      border-color: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].hover.borderColor};
      color: ${theme.btn.variants[$variant!].hover.color};
      background: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].hover.bg};

      svg {
        color: ${theme.btn.variants[$variant!].hover.iconColor};
      }
    `;
  }}

  ${({ theme, $isInline, $variant, $isActive }) => {
    return $isActive && css`
      pointer-events: none;
      border-color: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].active.borderColor};
      color: ${theme.btn.variants[$variant!].active.color};
      background: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].active.bg};

      svg {
        color: ${theme.btn.variants[$variant!].active.iconColor};
      }
    `;
  }}

  ${({ theme, $isInline, $variant, $isDisabled }) => {
    return $isDisabled && css`
      pointer-events: none;
      border-color: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.borderColor};
      color: ${theme.btn.variants[$variant!].disabled.color};
      background: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.bg};

      svg {
        color: ${theme.btn.variants[$variant!].disabled.iconColor};
      }
    `;
  }}

  ${({ $isRound }) => {
    return $isRound && css`
      aspect-ratio: 1;
      padding-inline: 0;
      border-radius: 50%;
    `;
  }}

  ${({ $isSquare }) => {
    return $isSquare && css`
      aspect-ratio: 1 / 1;
      padding-inline: 0;
    `;
  }}

  * {
    pointer-events: none;
  }

  ${Title.Title} {
    color: inherit;
    transition: inherit;
  }
`;

export const Icon = styled.span<IStyledIconProps>`
  display: inline-flex;
  flex: 0 0 auto;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
`;
