import styled, { css } from "styled-components";
import type { IStyledInputProps } from "../config";

export const Input = styled.input<IStyledInputProps>`
  cursor: default;
  display: flex;
  width: 100%;
  max-width: 100%;
  height: ${({ theme, $componentSize }) => theme.input.sizes[$componentSize!].height};
  padding-inline: ${({ theme, $componentSize }) => theme.input.sizes[$componentSize!].paddingInline};
  border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].borderColor};
  border-style: solid;
  border-width: ${({ theme }) => theme.input.borderWidth};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-size: ${({ theme }) => theme.input.fontSize};
  line-height: ${({ theme }) => theme.input.lineHeight};
  color: ${({ theme, $variant }) => theme.input.variants[$variant!].color};
  appearance: none;
  background: ${({ theme, $variant }) => theme.input.variants[$variant!].bg};
  box-shadow: none;
  transition: ${({ theme }) => theme.default.transitionDuration} ease-in-out;
  -webkit-tap-highlight-color: transparent;

  @supports (-ms-ime-align: auto) {
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
    }
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.borderColor};
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.color};
      background: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.bg};
    }

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].hover.placeholderColor};
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
    pointer-events: none;
    position: absolute;
    right: 0;
    display: none !important;
    visibility: hidden;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    box-shadow: none;
    transition: background-color 0s 600000s !important;
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
    color: ${({ theme, $variant }) => theme.input.variants[$variant!].focus.color};
    background: ${({ theme, $variant }) => theme.input.variants[$variant!].focus.bg};

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].focus.placeholderColor};
    }
  }

  &:invalid {
    border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.borderColor};
    color: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.color};
    background: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.bg};

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].invalid.placeholderColor};
    }
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    border-color: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.borderColor};
    color: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.color};
    background: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.bg};

    &::placeholder {
      color: ${({ theme, $variant }) => theme.input.variants[$variant!].disabled.placeholderColor};
    }
  }

  ${({ theme, $variant, $isHover }) => {
    return $isHover && css`
      pointer-events: none;
      border-color: ${theme.input.variants[$variant!].hover.borderColor};
      color: ${theme.input.variants[$variant!].hover.color};
      background: ${theme.input.variants[$variant!].hover.bg};

      &::placeholder {
        color: ${theme.input.variants[$variant!].hover.placeholderColor};
      }
    `;
  }}

  ${({ theme, $variant, $isFocus }) => {
    return $isFocus && css`
      pointer-events: none;
      border-color: ${theme.input.variants[$variant!].focus.borderColor};
      color: ${theme.input.variants[$variant!].focus.color};
      background: ${theme.input.variants[$variant!].focus.bg};

      &::placeholder {
        color: ${theme.input.variants[$variant!].focus.placeholderColor};
      }
    `;
  }}

  ${({ theme, $variant, $isInvalid }) => {
    return $isInvalid && css`
      border-color: ${theme.input.variants[$variant!].invalid.borderColor};
      color: ${theme.input.variants[$variant!].invalid.color};
      background: ${theme.input.variants[$variant!].invalid.bg};

      &::placeholder {
        color: ${theme.input.variants[$variant!].invalid.placeholderColor};
      }
    `;
  }}
`;
