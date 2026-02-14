# AI Coding Agent Instructions

This file provides guidance to AI coding agents working with code in this repository.

## Project Overview

Personal website for JuanCamiloQHz — a Next.js 15 app using the App Router, TypeScript, Tailwind CSS, shadcn/ui (Radix primitives + CVA), Contentlayer for MDX blog content, Prisma for database, and i18n via next-i18next. Package manager is Bun.

## Build / Lint / Test Commands

```bash
# Development (uses Turbopack)
bun dev

# Production build (also runs next-sitemap + RSS generation via postbuild)
bun run build

# Start production server
bun start

# Lint (ESLint with next/core-web-vitals + prettier + tailwindcss plugin)
bun lint

# Database commands (Prisma)
bun run db:generate    # Generate Prisma client
bun run db:migrate     # Run migrations
bun run db:push        # Push schema to DB
bun run db:studio      # Open Prisma Studio
bun run db:seed        # Seed database
bun run db:reset       # Reset database
```

There is **no test runner configured** (no Jest, Vitest, or Playwright). If tests are added, update this section.

## Project Structure

```text
src/
  app/              # Next.js App Router pages and layouts
    (main)/         # Route group for main site pages
    layout.tsx      # Root layout (fonts, ThemeProvider, analytics)
  components/
    ui/             # shadcn/ui primitives (Button, Dialog, Card, etc.)
    shared/         # Shared layout components (Header, Footer, Container)
    admin/          # Admin dashboard components
    Post/           # Blog post components
    Modals/         # Modal components
    Metrics/        # Metrics display components
    SEO/            # SEO component
    IndexPage/      # Homepage section components
  config/           # App configuration (site.ts, marketing.ts)
  hooks/            # Custom React hooks (use-lock-body, use-mounted)
  lib/              # Utilities (utils.ts, fetcher.ts, prisma.ts, types.ts)
  types/            # TypeScript type declarations (index.d.ts)
  styles/           # Global CSS (globals.css)
  data/             # Content data directory
  assets/           # Static assets (fonts, etc.)
  env.mjs           # Type-safe env variables via @t3-oss/env-nextjs + Zod
  mdx-components.tsx
data/               # Contentlayer MDX content (blog/, newsletter/)
public/             # Static files served at root
```

## Code Style Guidelines

### Formatting (Prettier)

- **No semicolons** (`semi: false`)
- **Double quotes** (`singleQuote: false`)
- **2-space indentation** (`tabWidth: 2`)
- **Trailing commas** in ES5-valid positions (`trailingComma: "es5"`)
- **LF line endings** (`endOfLine: "lf"`)
- Tailwind class sorting is handled by `prettier-plugin-tailwindcss`

### Import Order (enforced by @ianvs/prettier-plugin-sort-imports)

Imports are auto-sorted in this order:

1. `react` / `react/*`
1. `next` / `next/*`
1. Third-party modules
1. _(blank line)_
1. `types`
1. `@/env*`
1. `@/types/*`
1. `@/config/*`
1. `@/lib/*`
1. `@/hooks/*`
1. `@/components/ui/*`
1. `@/components/*`
1. `@/styles/*`
1. `@/app/*`
1. _(blank line)_
1. Relative imports (`./`, `../`)

Run Prettier to auto-fix import order. Do not manually reorder imports.

### Path Aliases

Use the `@/` alias for all imports from `src/`:

```ts
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

Never use relative imports to reach outside the current directory's module boundary when `@/` works.

### TypeScript

- **Strict mode** is enabled (`"strict": true`)
- Use `type` keyword for type-only exports: `export type { Foo }`
- Inline type imports: `import { type ClassValue } from "clsx"`
- Prefer `type` aliases over `interface` for object shapes (project convention)
- Global types go in `src/types/index.d.ts`
- Domain-specific types go in `src/lib/types.ts`
- Use Zod for runtime validation of environment variables (`src/env.mjs`)

### React & Components

- **Function declarations** for page components and layouts: `export default function PageName()`
- **Arrow functions with `React.forwardRef`** for UI primitives (shadcn/ui pattern)
- **`"use client"` directive** required at top of any file using hooks, browser APIs, or event handlers
- Props are typed inline: `{ children }: { children: React.ReactNode }`
- Use `import * as React from "react"` (not `import React from "react"`)
- Component files are PascalCase: `Header.tsx`, `PostPreview.tsx`
- Barrel exports via `index.ts` files where used (e.g., `components/Post/index.ts`)

### Naming Conventions

- **Files**: PascalCase for components (`Header.tsx`), kebab-case for utilities and hooks (`use-lock-body.ts`, `blur-images.ts`), kebab-case for UI primitives (`button.tsx`, `alert-dialog.tsx`)
- **Components**: PascalCase (`ThemeProvider`, `PostPreview`)
- **Hooks**: camelCase prefixed with `use` (`useMounted`, `useLockBody`)
- **Constants/Config**: camelCase (`siteConfig`, `marketingConfig`)
- **Types**: PascalCase (`SiteConfig`, `NavItem`, `FormState`)
- **Enums**: PascalCase with PascalCase members (`Form.Initial`, `Form.Loading`)

### Styling

- **Tailwind CSS** for all styling — no CSS modules or styled-components
- **`cn()` utility** (from `@/lib/utils`) to merge Tailwind classes: `cn("base-class", conditional && "conditional-class")`
- **CSS variables** for theme colors via HSL values (defined in globals.css, consumed as `hsl(var(--primary))`)
- **Dark mode** via `class` strategy (`darkMode: ["class"]`)
- **shadcn/ui** components use `class-variance-authority` (CVA) for variants
- **Tailwind class order** is enforced by ESLint (`tailwindcss/classnames-order: "error"`)
- Custom classnames are allowed (`tailwindcss/no-custom-classname: "off"`)

### Icons

Use `lucide-react` icons. Custom icons are aggregated in `src/components/icons.tsx` as an `Icons` object:

```ts
import { Icons } from "@/components/icons"

// Usage: <Icons.gitHub /> or <Icons.spinner />
```

### Error Handling

- Environment variables validated at build time via `@t3-oss/env-nextjs` + Zod (`src/env.mjs`)
- Prisma client uses singleton pattern to prevent connection exhaustion in dev (`src/lib/prisma.ts`)
- Form states modeled as an enum: `Form.Initial | Form.Loading | Form.Success | Form.Error`

### Content (Contentlayer)

- Blog posts: `data/blog/**/*.mdx` — requires `title`, `summary`, `mainImage`, `publishedAt`, `categories`, `tags`
- Newsletters: `data/newsletter/**/*.mdx` — requires `title`, `publishedAt`, `summary`, `mainImage`
- Computed fields: `readingTime`, `wordCount`, `slug`, `locale`, `mainImageBlurDataURL`
- Locale determined by file extension: `post.es.mdx` = Spanish, `post.mdx` = English
- MDX plugins: `remark-gfm`, `rehype-slug`, `rehype-pretty-code` (theme: `github-dark`), `rehype-autolink-headings`
- MDX component overrides defined in `src/mdx-components.tsx`

### Environment Variables

Define env vars in `.env` (see `.env.example`). Validate them with Zod in `src/env.mjs`:

```ts
import { env } from "@/env.mjs"
```

Required client-side variable: `NEXT_PUBLIC_APP_URL`

### Key Dependencies to Know

| Dependency                 | Purpose                                |
| -------------------------- | -------------------------------------- |
| `next@15`                  | Framework (App Router + Turbopack dev) |
| `contentlayer`             | MDX content management                 |
| `@radix-ui/*`              | Headless UI primitives (via shadcn/ui) |
| `class-variance-authority` | Component variant styling              |
| `framer-motion`            | Animations                             |
| `next-themes`              | Dark/light/system theme                |
| `next-i18next`             | Internationalization (en/es)           |
| `swr`                      | Client-side data fetching              |
| `prisma`                   | Database ORM (MySQL)                   |
| `zod`                      | Schema validation                      |
| `react-hook-form`          | Form management                        |
| `next-view-transitions`    | Page transition animations             |
