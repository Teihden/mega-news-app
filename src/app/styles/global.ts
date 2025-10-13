import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-mine-shaft: #222;
    --color-pale-sky: #6f7986;
    --color-silver-chalice: #a2a2a2;
    --color-silver: #ccc;
    --color-gallery: #eee;
    --color-alabaster: #f9f9f9;
    --color-biscay: #1f3f68;
    --color-blue-ribbon: #0366ee;
    --color-cobalt: #0246a2;
    --color-danube: #5a98d0;
    --color-platonic-blue: #98c3e8;
    --color-red: #f00;
    --color-valencia: #d33c40;
    --color-beauty-bush: #f4cecf;

    --scrollbar-thumb-color: var(--color-cobalt);
    --scrollbar-track-color: var(--color-white);
    --scrollbar-width: 1rem;
    --scrollbar-height: 1rem;
    --scrollbar-track-border-radius: var(--deafult-border-radius);
    --scrollbar-thumb-border-radius: var(--deafult-border-radius);

    --default-min-width: 360px;
    --default-font-weight: 400;
    --default-font-size: 8px;
    --default-line-height: 1.3;
    --default-font-family:
      system-ui,
      -apple-system,
      "Segoe UI",
      "Roboto",
      sans-serif;
    --default-color: var(--color-mine-shaft);
    --default-bg: var(--color-white);
    --default-transition-duration: .2s;
    --deafult-border-radius: .5rem;
    --deafult-outline: .25rem dashed var(--color-cobalt);
    --default-margin-block: 0 2rem;

    --page-font-size: 2rem;

    --page-header-z-index: 1;
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
    transition: all var(--default-transition-duration) ease-in-out;

    @supports (-webkit-touch-callout: none) {
      -webkit-touch-callout: none;
    }

    @supports not selector(::-webkit-scrollbar) {
      scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
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
      width: var(--scrollbar-width);
      height: var(--scrollbar-height);
    }

    &::-webkit-scrollbar-track {
      border-radius: var(--scrollbar-track-border-radius);
      background-color: var(--scrollbar-track-color);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: var(--scrollbar-thumb-border-radius);
      background-color: var(--scrollbar-thumb-color);
    }
  }

  ::selection {
    background: var(--color-cobalt);
    color: var(--color-white);
  }

  html {
    width: 100%;
    height: 100%;
    max-height: 100%;
    font: var(--default-font-weight) var(--default-font-size)/var(--default-line-height) var(--default-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-gutter: stable;

    @supports (text-size-adjust: none) {
      text-size-adjust: none;
    }
  }

  body {
    display: flex;
    width: 100%;
    min-width: var(--default-min-width);
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    flex-flow: column nowrap;
    background: var(--default-bg);
    color: var(--default-color);
    font-size: var(--page-font-size);
  }
`;
