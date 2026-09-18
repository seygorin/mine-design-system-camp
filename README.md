# mine-design-system-camp

Общая дизайн-система для пет-проектов: токены, типографика Mulish, радужный Surface Gradient и базовые компоненты shadcn/ui.

Витрина — Vite + React SPA. Дистрибуция в другие репозитории — через **собственный shadcn-реестр** (не npm-пакет). См. [ADR 0003](../docs/adr/0003-shadcn-registry-distribution.md) в корне воркспейса.

## Стек

- Vite + React + TypeScript
- Tailwind CSS v4
- shadcn/ui (radix-nova)
- pnpm
- Шрифт: `@fontsource/mulish` (self-hosted)

## Mobile-first

Все пет-проекты верстаются от узкого экрана вверх. Используйте стандартные Tailwind min-width breakpoints (`sm:`, `md:` …), не вводите произвольные breakpoints без причины.

## Локальный запуск

```bash
pnpm install
pnpm dev
```

Сборка витрины:

```bash
pnpm build
pnpm preview
```

Пересборка реестра (статика в `public/r/`):

```bash
pnpm registry:build
```

## Подключение в другом пет-проекте

После деплоя витрины (любой статический хостинг: Vercel, Netlify, GitHub Pages):

```bash
# один компонент
npx shadcn@latest add https://<домен-деплоя>/r/button.json

# или namespace в components.json
# "@mine-ds": "https://<домен-деплоя>/r/{name}.json"
npx shadcn@latest add @mine-ds/button
```

Пока деплоя нет, локально можно отдать `public/r` через `pnpm preview` и подставить `http://localhost:4173/r/...`.

### Доступные Registry Item

**UI:** `typography`, `button`, `card`, `input`, `textarea`, `label`, `switch`, `badge`, `kbd`, `spinner`, `skeleton`, `separator`, `breadcrumb`, `tabs`, `avatar`, `tooltip`, `dialog`, `sheet`, `dropdown-menu`, `context-menu`, `command`, `input-group`, `scroll-area`, `resizable`, `collapsible`, `sidebar`

**Hooks:** `use-theme`, `use-mobile`

**Lib:** `shimmer`

## Токены

Два слоя в `src/index.css`:

1. **Design Token** — HSL-переменные shadcn (светлая/тёмная тема). `primary` — пастельный голубой, `secondary` — пастельный розовый. Sidebar использует свой набор `--sidebar-*`.
2. **Surface Gradient** — RGB-триплеты `--surface-gradient-*` и утилита `bg-surface-gradient` только для фонов секций.

Утилита `.animate-shimmer` + хелпер `shimmer()` из `src/lib/shimmer.ts` — бегущий блик для плейсхолдеров (альтернатива `Skeleton`).

## Витрина

`src/App.tsx` — Sidebar + шесть разделов из `src/components/showcase/`:

| Раздел | Компоненты |
|---|---|
| Foundations | Typography, Design Tokens, Surface Gradient |
| Navigation | Breadcrumb, Command (⌘K), Tabs, Dropdown Menu |
| Forms | Input, Textarea, Label, Switch, Button, Kbd |
| Overlays | Dialog, Sheet, Tooltip |
| Layout | Card, Separator, Scroll Area, Resizable |
| Feedback | Badge, Avatar, Spinner, Skeleton, Shimmer |

## Roadmap

- **Кубизм** (острые углы, геометрические фоновые фигуры, диагональные разделители) — отдельный vertical slice после обкатки базы.
- **Применение к** [web-dev-interview-qa](https://web-dev-interview-qa.vercel.app/) — отдельная сессия, не часть текущего фундамента.
- **Деплой витрины и реестра** — когда база стабильна.
