import { MoonIcon, SunIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "@/hooks/use-theme"
import { DemoBlock } from "../demo-block"

export function FormsSection() {
  const { theme, setTheme } = useTheme()
  const [notes, setNotes] = useState("")
  const isDark = theme === "dark"

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DemoBlock title="Input & Textarea" description="Поля ввода с подписями через Label.">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="project">Название проекта</Label>
            <Input id="project" placeholder="mine-design-system-camp" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Заметки</Label>
            <Textarea
              id="notes"
              placeholder="Что хочется поменять в дизайн-системе…"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
            <p className="text-muted-foreground text-xs">{notes.length} символов</p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Switch"
        description="Две квадратные плоскости: выкл — input, вкл — primary выходит вперёд."
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Switch
              id="theme-mode"
              checked={isDark}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              aria-label="Тёмная тема"
            />
            <Label htmlFor="theme-mode" className="text-foreground">
              {isDark ? (
                <MoonIcon className="size-4 shadow-cubist-icon" />
              ) : (
                <SunIcon className="size-4 shadow-cubist-icon" />
              )}
              <span className="sr-only">Тёмная тема</span>
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="switch-on" defaultChecked />
            <Label htmlFor="switch-on">Включено</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="switch-off" />
            <Label htmlFor="switch-off">Выключено</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="switch-sm" size="sm" defaultChecked />
            <Label htmlFor="switch-sm">Small</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="switch-disabled" disabled />
            <Label htmlFor="switch-disabled" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock title="Buttons" description="Primary — голубой, secondary — розовый.">
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </DemoBlock>

      <DemoBlock title="Kbd" description="Горячие клавиши в подсказках и меню.">
        <div className="flex flex-wrap items-center gap-4">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground text-xs">+</span>
            <Kbd>Shift</Kbd>
            <span className="text-muted-foreground text-xs">+</span>
            <Kbd>P</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Esc</Kbd>
          </KbdGroup>
        </div>
      </DemoBlock>
    </div>
  )
}
