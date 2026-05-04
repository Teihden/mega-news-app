# Development Guidelines

## Component Development Standards

1. **Choose the layer first:** follow [Project structure](project-structure.md) before creating files.
2. **Use the local module split:** keep component code, types, helpers, mocks, and exports in the conventional module folders.
3. **Type props before implementation:** use an `I...Props` interface and an `I...` component type when the component exposes static-styled parts.
4. **Use function components:** follow the existing `export const ComponentName: FC<Props>` or typed component constant pattern.
5. **Keep styles colocated:** create `ui/styles.ts`, import it as `* as S from "./styles"`, and use theme tokens from `@app/styles`.
6. **Use aliases for cross-layer imports:** prefer `@shared/ui/btn` over long relative paths.
7. **Export through module boundaries:** add or update the module `index.ts` so other layers do not import from internal files.
8. **Document exported components with JSDoc:** add a short component-level JSDoc block and document non-obvious props.
9. **Use the automatic JSX runtime:** do not import React only for JSX.

## Recommended Component Shape

For a reusable component, prefer this file layout:

```text
src/shared/ui/example/
  config/
    index.ts
  ui/
    Example.tsx
    styles.ts
  index.ts
```

For a feature, entity, or widget, use the same shape under the relevant layer:

```text
src/features/exampleFeature/
  config/
    index.ts
  lib/
    index.ts
  ui/
    ExampleFeature.tsx
    styles.ts
  index.ts
```

Use `lib/` only for helpers, hooks, formatters, guards, schema builders, or other logic that is not JSX and is not component styling. If a component does not need extracted logic, do not create an empty `lib/` folder.

When `lib/` exists, export its public utilities through `lib/index.ts`. Re-export them from the module-level `index.ts` only when other modules are expected to use them.

Shared components may attach styled subcomponents as static properties when the existing component API does that, for example `Btn.Btn` and `Btn.Icon`.

## Component Example

```ts
// config/index.ts
import type { FC, ReactNode } from "react";
import { Example, Icon } from "../ui/styles";

export interface IExampleProps {
  title: ReactNode;
  icon?: ReactNode;
  isActive?: boolean;
}

export interface IExample extends FC<IExampleProps> {
  Example: typeof Example;
  Icon: typeof Icon;
}
```

```tsx
// ui/Example.tsx
import type { IExample } from "../config";
import * as S from "./styles";

/**
 * Renders a reusable example block with optional icon and active state.
 * @param props - Component props.
 * @param props.title - Main content rendered inside the component.
 * @param props.icon - Optional icon rendered before the title.
 * @param props.isActive - Whether the component should use the active visual state.
 * @returns Example component.
 */
export const Example: IExample = (props) => {
  const {
    title,
    icon = null,
    isActive = false,
  } = props;

  return (
    <S.Example $isActive={isActive}>
      {icon && (
        <S.Icon>
          {icon}
        </S.Icon>
      )}
      {title}
    </S.Example>
  );
};

Example.Example = S.Example;
Example.Icon = S.Icon;
```

```ts
// ui/styles.ts
import styled, { css } from "styled-components";

export const Example = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.btn.sizes.sm.gap};
  align-items: center;
  color: ${({ theme }) => theme.text.color};

  ${({ theme, $isActive }) => {
    return $isActive && css`
      color: ${theme.btn.variants.primary.color};
    `;
  }}
`;

export const Icon = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
`;
```

```ts
// index.ts
export * from "./config";
export * from "./ui/Example";
```

## Adding User-Facing Text

When a component renders user-facing text, follow [Internationalization](i18n.md). Do not hard-code text that belongs in locale resources.

## Adding a Page or Route

When adding a page or changing navigation, follow [Routing](routing.md). Keep route metadata and navigation generation in `src/app/routes/index.tsx`.

## Adding Assets

When adding images, videos, favicons, fonts, or SVGs, follow [Assets and build](assets-and-build.md).

## Final Checks

Follow the verification rules in [Rules](rules.md).
