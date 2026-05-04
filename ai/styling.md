# Styling

The styling stack is `styled-components` with a central theme in `src/app/styles`.

Use existing theme tokens before hard-coded values:

- Palette: `@app/styles/palette`.
- Breakpoints: `theme.bp` from `src/app/styles/media.ts`.
- Component tokens: `theme.btn`, `theme.input`, `theme.title`, `theme.text`, and related objects from `src/app/styles/ui/`.
- Global theme variants: `defaultTheme`, `lightTheme`, and `darkTheme` in `src/app/styles/theme.ts`.

Do not add new theme tokens until existing tokens have been checked. Add new tokens only when the value is reused or represents a real design-system decision.

Styled prop convention:

- Prefix styling-only props with `$`, for example `$variant`, `$size`, `$isActive`.
- Define styled prop interfaces in the module's `config/` folder when the module already follows that pattern.

Stylelint uses `postcss-styled-syntax` for TS/TSX styled-components. Keep CSS compatible with the configured rules:

- No named colors.
- Numeric font weights.
- Zero lengths without units.
- Max line length is 150.
- Custom properties, custom media, keyframes, and class selectors use kebab-case/BEM-like lowercase patterns.
- Property order is enforced by `stylelint-config-clean-order`; run `npm run stylelint` after meaningful style edits.

Accessibility patterns already used in the project:

- Use visually hidden labels where a compact UI control has no visible label.
- Keep focus-visible states when replacing interactive elements.
- Preserve disabled states and pointer behavior on buttons.
