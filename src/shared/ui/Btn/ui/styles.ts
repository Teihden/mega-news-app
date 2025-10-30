import styled, { css } from "styled-components";
import type { IStyledBtnProps } from "../config";
import { palette } from "@app/styles";

export const Btn = styled.button<IStyledBtnProps>`
  display: ${({ $isInline }) => $isInline ? "inline-flex" : "flex"};
  width: fit-content;
  max-width: 100%;
  height: ${({ theme, $isInline, $size }) => $isInline ? "fit-content" : theme.btn.sizes[$size!].height};
  align-items: center;
  justify-content: center;
  border-width: ${({ theme, $isInline }) => $isInline ? 0 : theme.btn.borderWidth};
  border-style: ${({ $isInline }) => $isInline ? "none" : "solid"};
  border-color: ${({ theme, $variant }) => theme.btn.variants[$variant!].borderColor};
  border-radius: ${({ theme, $isInline }) => $isInline ? 0 : theme.btn.borderRadius};
  appearance: none;
  background: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].bg};
  box-shadow: none;
  color: ${({ theme, $variant }) => theme.btn.variants[$variant!].color};
  cursor: pointer;
  font-size: ${({ theme }) => theme.btn.fontSize};
  gap: ${({ theme, $size }) => theme.btn.sizes[$size!].gap};
  line-height: ${({ theme }) => theme.btn.lineHeight};
  padding-inline: ${({ theme, $isInline }) => $isInline ? 0 : theme.btn.paddingInline};
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  transition: ${({ theme }) => theme.default.transitionDuration} ease-in-out;
  user-select: none;

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].hover.borderColor};
      background: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].hover.bg};
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.color};

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
    background: ${({ theme, $variant, $isInline }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].active.bg};
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.color};

    svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.iconColor};
    }
  }

  &:disabled,
  &[disabled] {
    border-color: ${({ theme, $isInline, $variant }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.borderColor};
    background: ${({ theme, $isInline, $variant }) => $isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.bg};
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.color};
    cursor: not-allowed;

    svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.iconColor};
    }
  }

  ${({ theme, $isInline, $variant, $isHover }) => {
    return $isHover && css`
      border-color: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].hover.borderColor};
      background: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].hover.bg};
      color: ${theme.btn.variants[$variant!].hover.color};
      pointer-events: none;

      svg {
        color: ${theme.btn.variants[$variant!].hover.iconColor};
      }
    `;
  }}

  ${({ theme, $isInline, $variant, $isActive }) => {
    return $isActive && css`
      border-color: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].active.borderColor};
      background: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].active.bg};
      color: ${theme.btn.variants[$variant!].active.color};
      pointer-events: none;

      svg {
        color: ${theme.btn.variants[$variant!].active.iconColor};
      }
    `;
  }}

  ${({ theme, $isInline, $variant, $isDisabled }) => {
    return $isDisabled && css`
      border-color: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.borderColor};
      background: ${$isInline ? palette.transparent : theme.btn.variants[$variant!].disabled.bg};
      color: ${theme.btn.variants[$variant!].disabled.color};
      pointer-events: none;

      svg {
        color: ${theme.btn.variants[$variant!].disabled.iconColor};
      }
    `;
  }}

  ${({ $isRound }) => {
    return $isRound && css`
      padding-inline: 0;
      border-radius: 50%;
      aspect-ratio: 1;
    `;
  }}

  ${({ $isSquare }) => {
    return $isSquare && css`
      padding-inline: 0;
      aspect-ratio: 1;
    `;
  }}

  * {
    pointer-events: none;
  }
`;
