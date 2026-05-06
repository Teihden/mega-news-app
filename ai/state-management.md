# State Management

The project uses Redux Toolkit, RTK Query, and Zustand.

## Current Locations

- Redux store setup: `src/app/store/reduxStore.ts`.
- Zustand app store: `src/app/store/useAppStore.ts`.
- Provider setup: `src/app/providers/`.
- RTK Query cache: `src/shared/api/apiClient.ts`.

## Decision Guide

When in doubt: local state first, then Zustand, then RTK Query. Do not reach for global state if the value is only needed by one component.

- **Local UI behavior** (open/close, current step, pagination offset) — use `useState` or `useReducer`. Examples: `BurgerBtn` open state, `PostCardContainer` skip offset.
- **App-level UI state shared across the tree** — use Zustand `useAppStore`. Examples: `themeMode`, `language`.
- **Server data, loading/error states, mutations** — use RTK Query. Examples: posts, comments, newsletter.
- **Derived or computed values** — compute inline in the component; do not cache in global state.

## Redux Store

Redux is used exclusively as the RTK Query host. `reduxStore` holds only `apiClient.reducerPath` — there are no custom slices. Do not add Redux slices; use Zustand for new app-level state instead.

`ReduxProvider` wraps the application in `src/app/providers/ReduxProvider.tsx`.

## Zustand — `useAppStore`

`useAppStore` holds two app-level values: `themeMode` and `language`. It uses `combine` middleware so state and actions live in one definition, and `devtools` for Redux DevTools support.

Consume a single field via a selector to avoid unnecessary re-renders:

```ts
const updateTheme = useAppStore(({ updateTheme }) => updateTheme);
const language = useAppStore(({ language }) => language);
```

Available actions:

- `updateTheme(newThemeMode)` — applies the theme to `document.documentElement` and updates the store.
- `updateLanguage(newLanguage, isInit?)` — changes the i18next language and updates the store; pass `isInit: true` during app bootstrap to skip the i18next call.
- `resetStore()` — resets the store to initial state.

`StyleProvider` subscribes to `themeMode` and passes the matching theme object to `ThemeProvider`.

## RTK Query

RTK Query owns all server data: queries, mutations, loading and error states, caching, and pagination. For full usage patterns see [API](api.md).

## Guidelines

- Prefer a local component state for local UI-only behavior.
- Use Zustand only when the app-level state needs to be shared across unrelated parts of the tree.
- Use RTK Query for server data, caching, loading states, mutations, and optimistic updates.
- Do not introduce a new global state library unless the existing stores cannot support the requirement.
