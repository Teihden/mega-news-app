# Project Structure

The app follows Feature-Sliced Design (FSD) with a layered frontend structure under `src/`:

- `app/`: app bootstrap, providers, routes, store, and global styles.
- `pages/`: route-level page components.
- `widgets/`: large page regions such as header, footer, and page wrapper.
- `features/`: user-facing feature units such as theme, language, and newsletter signup.
- `entities/`: domain UI/data units such as post-cards, media cards, user cards, and comments.
- `shared/`: reusable UI primitives, API client, assets, config, i18n, types, and utilities.

Use the configured aliases instead of deep relative imports when crossing layers:

- `@app/*`
- `@pages/*`
- `@widgets/*`
- `@features/*`
- `@entities/*`
- `@shared/*`
- `@public/*`

Prefer each module's public `index.ts` export when one exists. Keep component implementation in `ui/`, local types and constants in `config/`, helpers in `lib/`, and mock data in `api/` when the surrounding module uses that split.
Do not put generated production output in source control. Existing generated or build folders include `build/`, `dist/`, `node_modules/`, `.temp/`, and `.cache/`.
