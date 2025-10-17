import styled, { css } from "styled-components";
import type { IStyledBtnProps } from "../config";

export const Btn = styled.button<IStyledBtnProps>`
  display: ${({ as }) => as ? "inline-flex" : "flex"};
  align-items: center;
  justify-content: center;
  gap: ${({ theme, $size }) => theme.btn.sizes[$size!].gap};
  height: ${({ theme, $size }) => theme.btn.sizes[$size!].height};
  width: fit-content;
  max-width: 100%;
  appearance: none;
  box-shadow: none;
  border-radius: ${({ theme }) => theme.btn.borderRadius};
  color: ${({ theme, $variant }) => theme.btn.variants[$variant!].color};
  font-size: ${({ theme }) => theme.btn.fontSize};
  line-height: ${({ theme }) => theme.btn.lineHeight};
  padding-inline: ${({ theme }) => theme.btn.paddingInline};
  border-color: ${({ theme, $variant }) => theme.btn.variants[$variant!].borderColor};
  border-width: ${({ theme }) => theme.btn.borderWidth};
  border-style: solid;
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
      border-color: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.borderColor};
      background: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.bg};

      .svg {
        color: ${({ theme, $variant }) => theme.btn.variants[$variant!].hover.iconColor};
      }
    }
  }

  &:active {
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.color};
    border-color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.borderColor};
    background: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.bg};

    .svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].active.iconColor};
    }
  }

  &:disabled,
  [disabled] {
    color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.color};
    border-color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.borderColor};
    background: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.bg};
    cursor: not-allowed;

    .svg {
      color: ${({ theme, $variant }) => theme.btn.variants[$variant!].disabled.iconColor};
    }
  }

  ${({ theme, $variant, $isActive }) => {
    return $isActive && css`
      color: ${theme.btn.variants[$variant!].active.color};
      border-color: ${theme.btn.variants[$variant!].active.borderColor};
      background: ${theme.btn.variants[$variant!].active.bg};
      pointer-events: none;

      .svg {
        color: ${theme.btn.variants[$variant!].active.iconColor};
      }
    `;
  }}

  ${({ theme, $variant, $isDisabled }) => {
    return $isDisabled && css`
      color: ${theme.btn.variants[$variant!].disabled.color};
      border-color: ${theme.btn.variants[$variant!].disabled.borderColor};
      background: ${theme.btn.variants[$variant!].disabled.bg};
      pointer-events: none;

      .svg {
        color: ${theme.btn.variants[$variant!].disabled.iconColor};
      }
    `;
  }}
`;
