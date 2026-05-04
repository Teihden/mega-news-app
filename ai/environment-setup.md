# Environment Setup

## Development Requirements

- Node.js `>=24` as declared in `package.json`.
- npm with `package-lock.json` as the dependency source of truth.
- A local `.env` file based on `.env.example`.

## Installation Steps

```bash
# 1. Install dependencies
npm install

# 2. Create a local environment file
cp .env.example .env

# 3. Start the development server
npm start

# 4. Build and typecheck before production changes
npm run build

# 5. Run lint autofixes when changing source files
npm run lint
```

On Windows PowerShell, use this command instead of `cp` if needed:

```powershell
Copy-Item .env.example .env
```

## Environment Variables Configuration

The app reads Vite environment variables from `.env`.

```bash
BROWSER="Firefox Developer Edition"
VITE_API_URL=https://dummyjson.com
```

- `BROWSER`: browser name used by local development tooling.
- `VITE_API_URL`: base API URL used by `src/shared/config/constants/index.ts`.

`API_URL` falls back to `https://dummyjson.com` if `VITE_API_URL` is not set.

## Development Commands

- `npm start`: Vite dev server with `.env` loaded through `dotenv-cli`.
- `npm run preview`: Vite preview with `.env`.
- `npm run build`: TypeScript no-emit check plus Vite production build.
- `npm run lint`: Stylelint autofix followed by ESLint autofix.
- `npm run stylelint`: Styled-components/CSS lint autofix for `src/`.
- `npm run eslint`: ESLint autofix for `src/`.
- `npm run i18next-cli-extract`: extract i18n resources and autofix locale files.
- `npm run eslint-config-inspect`: inspect ESLint config.
- `npm run check-deps-updates`: check dependency updates.
- `npm run update-deps`: update dependency ranges and install.
