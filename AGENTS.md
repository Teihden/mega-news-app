---
name: "docs_agent"
description: "AI development guide for a React 19 + TypeScript + Vite frontend news application."
---

# Development Guide

## Project Overview

This is a React + TypeScript frontend application built with Vite, RTK Query, styled-components, i18next, and MSW.
The project follows Feature-Sliced Design (FSD) and contains an SPA with client-side routing, reusable UI modules, localized content,
mocked API support, and a scalable layered source structure.

## Tech Stack

- **Frontend Framework:** React 19 + TypeScript
- **Bundler:** Vite 7
- **Routing:** React Router 7
- **State Management:** Redux Toolkit / RTK Query / Zustand
- **Styling:** styled-components
- **Forms and Validation:** Formik / Yup
- **Internationalization:** i18next / react-i18next
- **Mocking:** MSW
- **Linting/Formatting:** ESLint / Stylelint / Husky / Commitlint

## Essential Commands

- Package manager: npm (`package-lock.json` is the source of truth).
- Runtime: Node.js `>=24`.
- Vite app root: `src/app`.
- Build output: `build/`.
- Dev server: port `5173` with `strictPort: true`.
- Preview server: port `4173` with `strictPort: true`.
- Development: `npm start`.
- Production build and typecheck: `npm run build` (`tsc --noEmit && vite build`).
- Lint autofix: `npm run lint` (`stylelint` and `eslint`, both run with `--fix`).
- Preview: `npm run preview`.
- i18n extraction: `npm run i18next-cli-extract`.

## Focused Docs

Read the relevant focused docs before changing related code:

- [Development guidelines](ai/development.md)
  - Read when changing: components, pages, routes, exports, JSDoc, `lib/`, text, or assets.
  - Covers: step-by-step development patterns and examples.
- [Project structure](ai/project-structure.md)
  - Read when changing: file placement, FSD layers, aliases, or module boundaries.
  - Covers: `app`, `pages`, `widgets`, `features`, `entities`, `shared`.
- [TypeScript](ai/typescript.md)
  - Read when changing: types, contracts, naming, or type-only imports.
  - Covers: strict TS, naming rules, domain types, request/response types.
- [Styling and UI](ai/styling.md)
  - Read when changing: styled-components, theme usage, UI states, or accessibility.
  - Covers: theme tokens, `$` props, Stylelint, focus, and disabled states.
- [Internationalization](ai/i18n.md)
  - Read when changing: user-facing text, locale resources, or route metadata.
  - Covers: locale files, typed translation callbacks, extraction.
- [Routing](ai/routing.md)
  - Read when changing: routes, pages, navigation, or route metadata.
  - Covers: React Router objects, lazy page imports, generated menus.
- [Forms](ai/forms.md)
  - Read when changing: forms, validation, submit flows, or form persistence.
  - Covers: Formik, Yup, i18n validation, sessionStorage, toasts.
- [API](ai/api.md)
  - Read when changing: API endpoints, queries, mutations, or server data.
  - Covers: RTK Query client, type ownership, pagination, optimistic updates.
- [State management](ai/state-management.md)
  - Read when changing: local state, global state, API cache, or providers.
  - Covers: Redux, RTK Query cache, Zustand, provider boundaries.
- [Mocks](ai/mocks.md)
  - Read when changing: mock data, MSW handlers, or local API behavior.
  - Covers: MSW setup, service worker, module mock payloads.
- [Assets and build](ai/assets-and-build.md)
  - Read when changing: assets, Vite config, PWA, compression, or build plugins.
  - Covers: Vite root/output, public assets, SVGR, image optimization.
- [Environment setup](ai/environment-setup.md)
  - Read when changing: local setup, `.env`, server ports, or commands.
  - Covers: Node/npm requirements, install, dev/build/lint commands.
- [Rules](ai/rules.md)
  - Read when changing: cross-cutting implementation or workflow decisions.
  - Covers: dependencies, TS, React, state, styling, i18n, quality, Git.
