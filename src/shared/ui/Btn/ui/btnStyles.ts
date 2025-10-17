import styled, { css } from "styled-components";
import type { IStyledBtnProps } from "../config";
import { palette } from "@app/styles";

export const Btn = styled.button<IStyledBtnProps>`
  display: ${({ as }) => as === "a" ? "inline-flex" : "flex"};
  align-items: center;
  justify-content: center;
  gap: ${({ theme, $size }) => theme.btn.sizes[$size!].gap};
  height: ${({ theme, as, $size }) => as === "a" ? "fit-content" : theme.btn.sizes[$size!].height};
  width: fit-content;
  max-width: 100%;
  appearance: none;
  box-shadow: none;
  border-radius: ${({ theme, as }) => as === "a" ? 0 : theme.btn.borderRadius};
  color: ${({ theme, $variant }) => theme.btn.variants[$variant!].color};
  font-size: ${({ theme }) => theme.btn.fontSize};
  line-height: ${({ theme }) => theme.btn.lineHeight};
  padding-inline: ${({ theme }) => theme.btn.paddingInline};
  border-color: ${({ theme, $variant }) => theme.btn.variants[$variant!].borderColor};
  border-width: ${({ theme, as }) => as === "a" ? 0 : theme.btn.borderWidth};
  border-style: ${({ as }) => as === "a" ? "none" : "solid"};
  background: ${({ theme, $variant, as }) => as === "a" ? palette.transparent : theme.btn.variants[$variant!].bg};
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.btn.outline};
    outline-offset: .25rem;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.color};
      border-color: ${({ theme, $variant, as }) => as === "a" ? palette.transparent : theme.btn.variants[$variant!].hover.borderColor};
      background: ${({ theme, $variant, as }) => as === "a" ? palette.transparent : theme.btn.variants[$variant!].hover.bg};

      .svg {
        color: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.iconColor};
      }
    }
  }

  &:active {
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.color};
    border-color: ${({ theme, $variant, as }) => as === "a" ? palette.transparent : theme.btn.variants[$variant!].active.borderColor};
    background: ${({ theme, $variant, as }) => as === "a" ? palette.transparent : theme.btn.variants[$variant!].active.bg};

    .svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.iconColor};
    }
  }

  &:disabled,
  [disabled] {
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.color};
    border-color: ${({ theme, as, $variant }) => as === "a" ? palette.transparent : theme.btn.variants[$variant!].disabled.borderColor};
    background: ${({ theme, as, $variant }) => as === "a" ? palette.transparent : theme.btn.variants[$variant!].disabled.bg};
    cursor: not-allowed;

    .svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.iconColor};
    }
  }

  ${({ theme, as, $variant, $isHover }) => {
    return $isHover && css`
      color: ${theme.btn.variants[$variant!].hover.color};
      border-color: ${as === "a" ? palette.transparent : theme.btn.variants[$variant!].hover.borderColor};
      background: ${as === "a" ? palette.transparent : theme.btn.variants[$variant!].hover.bg};
      pointer-events: none;

      .svg {
        color: ${theme.btn.variants[$variant!].hover.iconColor};
      }
    `;
  }}

  ${({ theme, as, $variant, $isActive }) => {
    return $isActive && css`
      color: ${theme.btn.variants[$variant!].active.color};
      border-color: ${as === "a" ? palette.transparent : theme.btn.variants[$variant!].active.borderColor};
      background: ${as === "a" ? palette.transparent : theme.btn.variants[$variant!].active.bg};
      pointer-events: none;

      .svg {
        color: ${theme.btn.variants[$variant!].active.iconColor};
      }
    `;
  }}

  ${({ theme, as, $variant, $isDisabled }) => {
    return $isDisabled && css`
      color: ${theme.btn.variants[$variant!].disabled.color};
      border-color: ${as === "a" ? palette.transparent : theme.btn.variants[$variant!].disabled.borderColor};
      background: ${as === "a" ? palette.transparent : theme.btn.variants[$variant!].disabled.bg};
      pointer-events: none;

      .svg {
        color: ${theme.btn.variants[$variant!].disabled.iconColor};
      }
    `;
  }}
`;
