import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    outline: none;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: none;
    scroll-behavior: smooth;
    transition: all ${({ theme }) => theme.default.transitionDuration} ease-in-out;

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
    width: 100%;
    height: 100%;
    max-height: 100%;
    font-family: ${({ theme }) => theme.default.fontFamily};
    font-size: ${({ theme }) => theme.default.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: ${({ theme }) => theme.default.fontWeight};
    line-height: ${({ theme }) => theme.default.lineHeight};
    scrollbar-gutter: stable;

    @supports (text-size-adjust: none) {
      text-size-adjust: none;
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
    font-size: ${({ theme }) => theme.page.fontSize};
  }

  svg {
    display: block;
    fill: currentcolor;

    &:not(:last-child) {
      margin-block: ${({ theme }) => theme.default.marginBlock};
    }
  }
`;
