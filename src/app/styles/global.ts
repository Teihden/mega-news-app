import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";
import { swiperStyles } from "@app/styles/vendors";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
  }

  ${fonts}
  ${swiperStyles}

  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    outline: none;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: none;
    scroll-behavior: smooth;

    @supports (-webkit-touch-callout: none) {
      -webkit-touch-callout: none;
    }

    @supports not selector(::-webkit-scrollbar) {
      scrollbar-color: ${({ theme }) => `${theme.scrollbar.thumbColor} ${theme.scrollbar.trackColor}`};
      scrollbar-width: thin;
    }

    @media (prefers-reduced-motion: reduce) {
      &,
      &::before,
      &::after {
        animation: none !important;
        transition: none !important;
      }
    }

    &::before,
    &::after {
      box-sizing: border-box;
    }

    &::-webkit-scrollbar {
      width: ${({ theme }) => theme.scrollbar.width};
      height: ${({ theme }) => theme.scrollbar.height};
    }

    &::-webkit-scrollbar-track {
      border-radius: ${({ theme }) => theme.scrollbar.trackBorderRadius};
      background-color: ${({ theme }) => theme.scrollbar.trackColor};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: ${({ theme }) => theme.scrollbar.thumbBorderRadius};
      background-color: ${({ theme }) => theme.scrollbar.thumbColor};
    }
  }

  ::selection {
    background: ${({ theme }) => theme.selection.bg};
    color: ${({ theme }) => theme.selection.color};
  }

  html {
    overflow: hidden auto;
    width: 100%;
    height: 100%;
    max-height: 100%;
    font-family: ${({ theme }) => theme.html.fontFamily};
    font-size: ${({ theme }) => theme.html.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-gutter: auto;

    @supports (text-size-adjust: none) {
      text-size-adjust: none;
    }

    &[data-theme="light"] {
      color-scheme: light;
    }

    &[data-theme="dark"] {
      color-scheme: dark;
    }

    &.no-scroll {
      overflow: hidden;
    }
  }

  body {
    display: flex;
    width: 100%;
    min-width: ${({ theme }) => theme.default.minWidth};
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    flex-flow: column nowrap;
    background: ${({ theme }) => theme.default.bg};
    color: ${({ theme }) => theme.default.color};
    font-size: ${({ theme }) => theme.body.fontSize};
    font-weight: ${({ theme }) => theme.body.fontWeight};
    line-height: ${({ theme }) => theme.body.lineHeight};
  }

  svg {
    display: block;
    max-width: 100%;
    fill: currentcolor;
    transition: ${({ theme }) => theme.default.transitionDuration} ease-in-out;

    &:not(:last-child) {
      margin-block: ${({ theme }) => theme.default.marginBlock};
    }
  }

  .visually-hidden {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    clip-path: inset(100%);
    white-space: nowrap;
  }

  .custom-react-tooltip.react-tooltip {
    padding: ${({ theme }) => theme.tooltip.padding};
    border-width: ${({ theme }) => theme.tooltip.borderWidth};
    border-style: ${({ theme }) => theme.tooltip.borderStyle};
    border-color: ${({ theme }) => theme.tooltip.borderColor};
    border-radius: ${({ theme }) => theme.tooltip.borderRadius};
    background: ${({ theme }) => theme.tooltip.bg};
    box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
  }
`;
