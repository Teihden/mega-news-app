# Routing

Routes are configured in `src/app/routes/index.tsx` with React Router 7 route objects.

Current structure:

- `innerRoutes` contains page routes.
- The root route renders `PageWrapper`, `ScrollRestoration`, `Preloader`, `Toast`, and route children.
- Pages are loaded lazily with dynamic imports from `@pages/*`.
- `AppInitError` is used as the root `errorElement`.
- `hydrateFallbackElement` uses the app preloader state.

Route metadata lives in `handle`:

- `titleKey`: typed i18n key callback for the page title.
- `descriptionKey`: typed i18n key callback for the page description.
- `navLabelKey`: typed i18n key callback for navigation labels.
- `showInMenu`: controls whether the route appears in generated header/footer navigation.

When adding a route:

1. Create or update the page component in `src/pages/`.
2. Add the route to `innerRoutes`.
3. Use a stable uppercase `id`.
4. Use `lazy` with an `@pages/*` import.
5. Add `handle` translation keys for title and description.
6. Add `navLabelKey` and set `showInMenu: true` only when the route should appear in navigation.
7. Update locale files for every supported language.

The header and footer menus are derived from `innerRoutes`, so do not duplicate route lists in widget code unless the navigation model changes.
