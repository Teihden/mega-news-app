# API

API access is centralized in `src/shared/api/apiClient.ts` using RTK Query.

Current patterns:

- Endpoints are created with `createApi`.
- Base URL and endpoint paths come from `@shared/config/constants`.
- Request and response types are imported from the feature, entity, or widget that owns the data shape.
- Query and mutation hooks are exported from `apiClient.ts` and consumed through `@shared/api`.
- Infinite/load-more style queries use `serializeQueryArgs`, `merge`, and `forceRefetch`.
- Optimistic updates use `apiClient.util.updateQueryData` and undo patches on failed requests.

When adding API behavior, extend the existing `apiClient` and its exported hooks instead of creating a second client.
