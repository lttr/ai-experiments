# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nuxt 4 application demonstrating product filtering with Puleo CSS design system. Uses SSR with server API routes for data fetching.

## Development Commands

```bash
pnpm dev           # Start dev server
pnpm build         # Build for production
pnpm preview       # Preview production build
pnpm start         # Run production server
pnpm verify        # Run format, lint, typecheck, test (run before committing)
pnpm typecheck     # Type check only
pnpm lint:fix      # Auto-fix linting issues
pnpm format        # Format with Prettier
```

## Architecture

### Nuxt 4 Structure

- **`app/app.vue`** - Root component (Nuxt 4 uses `app/` directory, not root-level)
- **`app/components/`** - Auto-imported Vue components
- **`server/api/`** - API routes (e.g., `/api/products`)
- **`app/assets/css/main.css`** - Global styles

### Key Patterns

**Data Fetching:**

- Use `useFetch("/api/products")` with reactive `query` option for URL params
- Set `watch: [ref1, ref2]` to re-fetch when dependencies change
- Example in `ProductList.vue:48-54`

**Routing:**

- No `pages/` directory - using `app.vue` as single-page app
- URL params via `useRoute().query` (reactive computed refs)
- Navigation with `<NuxtLink>`

**Server API Routes:**

- Located in `server/api/` (e.g., `products.ts` � `/api/products`)
- Use `defineEventHandler`, `getQuery`, `$fetch`
- Example: `server/api/products.ts` fetches from external API and filters server-side

## Styling with Puleo CSS

**Always use Puleo custom properties** (loaded via `@lttr/nuxt-puleo` module):

- Spacing: `var(--space-1)` through `var(--space-9)`, fluid ranges like `var(--space-3-5)`
- Typography: `var(--font-size-0)`, `var(--font-weight-4)`
- Colors: `var(--text-color-1)`, `var(--surface-2)`, `var(--gray-4)`
- Shadows: `var(--shadow-2)`, `var(--shadow-4)`
- Radii: `var(--radius-2)`

**Custom font scale** in `main.css` (Utopia fluid typography from 360px to 1240px viewport).

**Inter font** loaded via `@nuxt/fonts` module.

## Modules Installed

- `@lttr/nuxt-puleo` - Puleo CSS design system
- `@nuxt/fonts` - Font optimization (Inter)
- `@vueuse/nuxt` - VueUse composables
- `@nuxt/eslint` - ESLint with Nuxt-specific rules
- `@lttr/nuxt-config-eslint` - Shared ESLint config

## Type Safety

- TypeScript strict mode enabled
- Use `defineEventHandler` for typed server routes
- Use `$fetch<Type>()` for typed external API calls
