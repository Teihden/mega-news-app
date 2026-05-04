# State Management

The project uses Redux Toolkit, RTK Query, and Zustand.

Current locations:

- Redux store setup lives in `src/app/store/reduxStore.ts`.
- Zustand app state lives in `src/app/store/useAppStore.ts`.
- Provider setup lives under `src/app/providers/`.
- RTK Query owns API cache state in `src/shared/api/apiClient.ts`.

Guidelines:

- Prefer a local component state for local UI-only behavior.
- Use Zustand for app-level UI state when it matches the existing store responsibilities.
- Use RTK Query for server data, caching, loading states, mutations, and optimistic updates.
- Do not introduce a new global state library unless the existing stores cannot support the requirement.
