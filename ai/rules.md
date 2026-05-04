# Rules

## General

- Keep changes scoped to the requested task.
- Prefer existing project patterns before adding abstractions.
- Do not introduce a new tool, dependency, state layer, or folder convention without a clear reason.
- Do not document tooling as available unless it exists in `package.json` or the repo config.

## Source Boundaries

- Respect the layered structure documented in [Project structure](project-structure.md).
- Use public module exports instead of importing from another module's internals.
- Use configured aliases for cross-layer imports.
- Do not commit generated output such as `build/`, `dist/`, caches, or `node_modules/`.

## Implementation

- Preserve strict TypeScript behavior.
- Avoid `any`; use existing domain types where possible.
- Keep user-facing text in i18n resources.
- Use theme tokens before hard-coded styling values.
- Preserve accessibility behavior such as labels, focus-visible states, disabled states, and semantic controls.
- Follow ESLint, Stylelint, and EditorConfig instead of adding personal formatting preferences.

## Dependencies

- Use npm and keep `package-lock.json` as the dependency source of truth.
- Do not switch package managers unless the lockfile and scripts are intentionally migrated.
- Prefer existing libraries before adding a new dependency.

## Verification

- Run `npm run build` after TypeScript, route, API, build, or declaration changes when feasible.
- Run `npm run lint` after source or style changes when feasible.
- There is no test script in `package.json`; do not claim tests were run unless a test command has been added or explicitly executed.

## Git

- Follow Conventional Commits enforced by Commitlint.
- Allowed commit types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `ref`, `revert`, `style`, `test`.
- Commit header max length is 150.
- Commit subject must not be empty or end with a period.
