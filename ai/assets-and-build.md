# Assets and Build

## Vite Layout

Vite is configured in `vite.config.ts`.

- App root: `src/app`.
- Public directory: `public`.
- Build output: `build`.
- Development server: port `5173` with `strictPort: true`.
- Preview server: port `4173` with `strictPort: true`.
- Path aliases are configured in both `vite.config.ts` and `tsconfig.json`.

## Assets

- Import reusable app assets from `src/shared/assets/`.
- Keep files that must be served directly in `public/`.
- Favicons and PWA icons live under `public/favicons/`.
- The MSW service worker lives at `public/mockServiceWorker.js`.
- Fonts are served from `public/fonts/`.

SVG handling:

- Import SVGs as React components with `?react` when rendering them in JSX.
- Plain SVG/static usage should stay compatible with Vite asset handling.
- `vite-plugin-svgr` is configured for `**/*.svg?react`.

Image handling:

- `vite-plugin-image-optimizer` optimizes public and imported image assets.
- Do not bypass the existing asset folders with ad hoc absolute filesystem paths.
- Keep image/video imports aligned with nearby components.

## Build Plugins

The Vite build uses:

- React plugin with React Compiler and styled-components Babel plugins.
- Lightning CSS for CSS transformation and minification.
- PWA plugin with auto-update registration.
- SVGR for React SVG components.
- Image optimizer.
- Bundle analyzer, disabled on Render through the `RENDER` environment variable.
- Compression with `zstd` and `br`.
- Vite checker for TypeScript.

For verification after build-related changes, follow [Rules](rules.md).
