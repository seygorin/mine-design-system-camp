import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyInlineCode,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";
import { DemoBlock } from "../demo-block";

const TOKENS = [
  { name: "background", className: "bg-background border" },
  { name: "foreground", className: "bg-foreground" },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "card", className: "bg-card border" },
  { name: "destructive", className: "bg-destructive" },
  { name: "border", className: "bg-border" },
  { name: "ring", className: "bg-ring" },
  { name: "sidebar", className: "bg-sidebar border" },
  { name: "sidebar-accent", className: "bg-sidebar-accent" },
] as const;

const GRADIENT_STOPS = [
  "start",
  "mid",
  "blue",
  "green",
  "yellow",
  "orange",
  "end",
] as const;

export function FoundationsSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DemoBlock
        title="Typography"
        description="Mulish, вес 400–700. Примитивы из typography.tsx."
        className="lg:col-span-2"
      >
        <TypographyH1>Дизайн-система</TypographyH1>
        <TypographyLead>
          Пастельная палитра, радужный фон и компоненты shadcn.
        </TypographyLead>
        <TypographyH2>Заголовок второго уровня</TypographyH2>
        <TypographyP>
          Основной текст на Mulish. Инлайн-код выглядит так:{" "}
          <TypographyInlineCode>bg-surface-gradient</TypographyInlineCode>.
        </TypographyP>
        <TypographyH3>Третий уровень</TypographyH3>
        <TypographyList>
          <li>Primary — пастельный голубой</li>
          <li>Secondary — пастельный розовый</li>
          <li>Mobile-first: сначала узкий экран</li>
        </TypographyList>
        <TypographyBlockquote>
          Кубизм — следующий срез, база должна быть спокойной.
        </TypographyBlockquote>
        <Separator className="my-4" />
        <div className="flex flex-wrap items-center gap-4">
          <TypographySmall>Small / Medium</TypographySmall>
          <TypographyMuted>Muted — вторичный текст</TypographyMuted>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Design Tokens"
        description="Семантические HSL-переменные shadcn для компонентов."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {TOKENS.map((token) => (
            <div key={token.name} className="space-y-2">
              <div
                className={`h-12 rounded-md ${token.className}`}
                aria-hidden
              />
              <span className="text-muted-foreground font-mono text-xs">
                {token.name}
              </span>
            </div>
          ))}
        </div>
      </DemoBlock>

      <DemoBlock
        title="Surface Gradient"
        description="Отдельный RGB-слой только для фонов секций, не для компонентов."
      >
        <div className="bg-surface-gradient mb-4 h-24 rounded-lg border" />
        <div className="flex flex-wrap gap-2">
          {GRADIENT_STOPS.map((stop) => (
            <code
              key={stop}
              className="bg-muted rounded px-2 py-1 font-mono text-xs"
            >
              --surface-gradient-{stop}
            </code>
          ))}
        </div>
      </DemoBlock>
    </div>
  );
}
