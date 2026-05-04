# Mocks

The project uses MSW and module-level mock payloads.

Current locations:

- MSW setup lives in `src/shared/api/msw/`.
- The generated service worker lives at `public/mockServiceWorker.js`.
- Module-level mock payloads live near their owners in `api/mock.tsx`.
- `postinstall` runs `npx msw init`.
- MSW is configured with `workerDirectory: ["public"]` in `package.json`.

Guidelines:

- Keep mock data close to the module that owns the UI or data shape.
- Use MSW handlers for API-level mocking and integration-style behavior.
- Keep mock response shapes aligned with the TypeScript request and response types used by `apiClient`.
