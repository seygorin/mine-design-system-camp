# mine-design-system-camp

Shared Design System for pet projects: Design Tokens, Jura type, Cubism, a rainbow Surface Gradient,
and base shadcn/ui components.

The showcase is a Vite + React SPA.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- shadcn/ui (radix-nova)
- pnpm
- Prettier (`printWidth` 100)
- Font: `@fontsource/jura` (self-hosted, Latin and Cyrillic)

## Mobile-first

Every pet project is laid out from a narrow viewport up. Use Tailwind’s standard min-width
breakpoints (`sm:`, `md:`, …). Do not invent custom breakpoints without a reason.

## Local run

```bash
pnpm install
pnpm dev
```

Showcase build:

```bash
pnpm build
pnpm preview
```

Rebuild the Registry (static files in `public/r/`):

```bash
pnpm registry:build
```

Format:

```bash
pnpm format
pnpm format:check
```

## Use in another pet project

After the showcase is deployed (any static host: Vercel, Netlify, GitHub Pages):

```bash
# one component
npx shadcn@latest add https://<deploy-domain>/r/button.json

# or a namespace in components.json
# "@mine-ds": "https://<deploy-domain>/r/{name}.json"
npx shadcn@latest add @mine-ds/button
```

Until there is a deploy, serve `public/r` with `pnpm preview` and use `http://localhost:4173/r/...`.

### Available Registry Items

**UI:** `typography`, `button`, `card`, `input`, `textarea`, `label`, `switch`, `badge`, `kbd`,
`spinner`, `skeleton`, `separator`, `breadcrumb`, `tabs`, `avatar`, `tooltip`, `dialog`, `sheet`,
`dropdown-menu`, `context-menu`, `command`, `input-group`, `scroll-area`, `resizable`,
`collapsible`, `sidebar`

**Hooks:** `use-theme`, `use-mobile`

**Lib:** `shimmer`

## Tokens

Layers in `src/index.css`:

1. **Design Token** — shadcn HSL variables (light/dark Theme). `primary` is pastel blue, `secondary`
   is pastel pink. Sidebar has its own `--sidebar-*` set. Every radius step is 0.
2. **Surface Gradient** — RGB triples `--surface-gradient-*` and the `bg-surface-gradient` utility,
   only for section backgrounds. The page wrapper uses it so chrome can stay transparent.
3. **Cubism** — always-on visual language (Theme is only light/dark): `--cubist-shadow-offset`,
   utilities `shadow-cubist` / `press-cubist` / `offset-cubist`. Contract: ADR 0004 / 0005.

The `.animate-shimmer` utility plus `shimmer()` from `src/lib/shimmer.ts` is a moving Surface
Gradient band. Direction is random per instance (an alternative to `Skeleton`).

## Showcase

`src/App.tsx` — Sidebar plus six sections from `src/components/showcase/`:

| Section     | Components                                    |
| ----------- | --------------------------------------------- |
| Foundations | Typography, Design Tokens, Surface Gradient   |
| Navigation  | Breadcrumb, Command (⌘K), Tabs, Dropdown Menu |
| Forms       | Input, Textarea, Label, Switch, Button, Kbd   |
| Overlays    | Dialog, Sheet, Tooltip                        |
| Layout      | Card, Separator, Scroll Area, Resizable       |
| Feedback    | Badge, Avatar, Spinner, Skeleton, Shimmer     |
