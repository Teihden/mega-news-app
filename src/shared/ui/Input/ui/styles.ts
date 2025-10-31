import styled, { css } from "styled-components";
import type { IStyledInputProps } from "../config";

export const Input = styled.input<IStyledInputProps>`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: ${({ theme, $componentSize }) => theme.input.sizes[$componentSize!].height};
  border-width: ${({ theme }) => theme.input.borderWidth};
  border-style: solid;
  border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].borderColor};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  appearance: none;
  background: ${({ theme, $variant }) => theme.input.variants[$variant!].bg};
  box-shadow: none;
  color: ${({ theme, $variant }) => theme.input.variants[$variant!].color};
  cursor: default;
  font-size: ${({ theme }) => theme.input.fontSize};
  line-height: ${({ theme }) => theme.input.lineHeight};
  padding-inline: ${({ theme, $componentSize }) => theme.input.sizes[$componentSize!].paddingInline};
  -webkit-tap-highlight-color: transparent;
  transition: ${({ theme }) => theme.default.transitionDuration} ease-in-out;

  @supports (-ms-ime-align: auto) {
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
    }
  }

  &[type="search"] {
    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      appearance: none;
    }
  }

  &:-webkit-autofill {
    box-shadow: none;
  }

  &::-webkit-auto-fill-button,
  &::-webkit-caps-lock-indicator,
  &::-webkit-credentials-auto-fill-button {
    display: none;
  }

  &::-webkit-contacts-auto-fill-button {
    position: absolute;
    right: 0;
    display: none !important;
    pointer-events: none;
    visibility: hidden;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    box-shadow: none;
    transition: background-color 0s 600000s !important;
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.borderColor};
      background: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.bg};
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.color};
    }

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.placeholderColor};
    }
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    font: inherit;
    color: ${({ theme, $variant }) => theme.input.variants[$variant!].placeholderColor};
  }

  &:focus-visible {
    border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].focus.borderColor};
    background: ${({ theme, $variant }) => theme.input.variants[$variant!].focus.bg};
    color: ${({ theme, $variant }) => theme.input.variants[$variant!].focus.color};

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].focus.placeholderColor};
    }
  }

  &:invalid {
    border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.borderColor};
    background: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.bg};
    color: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.color};

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.placeholderColor};
    }
  }

  &:disabled,
  &[disabled] {
    border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.borderColor};
    background: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.bg};
    color: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.color};
    cursor: not-allowed;

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.placeholderColor};
    }
  }

  ${({ theme, $variant, $isHover }) => {
    return $isHover && css`
      border-color: ${theme.input.variants[$variant!].hover.borderColor};
      background: ${theme.input.variants[$variant!].hover.bg};
      color: ${theme.input.variants[$variant!].hover.color};
      pointer-events: none;

      &::placeholder {
        color: ${theme.input.variants[$variant!].hover.placeholderColor};
      }
    `;
  }}

  ${({ theme, $variant, $isFocus }) => {
    return $isFocus && css`
      border-color: ${theme.input.variants[$variant!].focus.borderColor};
      background: ${theme.input.variants[$variant!].focus.bg};
      color: ${theme.input.variants[$variant!].focus.color};
      pointer-events: none;

      &::placeholder {
        color: ${theme.input.variants[$variant!].focus.placeholderColor};
      }
    `;
  }}

  ${({ theme, $variant, $isInvalid }) => {
    return $isInvalid && css`
      border-color: ${theme.input.variants[$variant!].invalid.borderColor};
      background: ${theme.input.variants[$variant!].invalid.bg};
      color: ${theme.input.variants[$variant!].invalid.color};

      &::placeholder {
        color: ${theme.input.variants[$variant!].invalid.placeholderColor};
      }
    `;
  }}
`;
