# TypeScript

TypeScript is strict. Preserve the current `tsconfig.json` posture:

- `strict`
- `noImplicitAny`
- `strictNullChecks`
- `noUnusedLocals`
- `noUnusedParameters`
- `exactOptionalPropertyTypes`
- `noUncheckedIndexedAccess`

Naming rules enforced by ESLint:

- Type aliases use PascalCase and start with `T`.
- Interfaces use PascalCase and start with `I`.
- Enums use PascalCase and may start with `E`.
- Enum members use PascalCase.
- React boolean prop names should start with `is`.

Type usage:

- Prefer existing domain types from the owning module's `config/` folder.
- Avoid `any`; use narrower types, generics, unions, or existing domain contracts.
- Keep request and response types owned by the feature, entity, or widget that owns the data shape.
- Use `import type` for type-only imports.

For component structure and React patterns, follow [Development guidelines](development.md).
