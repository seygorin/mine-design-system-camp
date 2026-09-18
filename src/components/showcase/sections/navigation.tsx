import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DemoBlock } from "../demo-block"

export function NavigationSection() {
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setCommandOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DemoBlock title="Breadcrumb" description="Путь до текущего раздела витрины.">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Design System</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Navigation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DemoBlock>

      <DemoBlock title="Command palette" description="Открывается по ⌘K / Ctrl+K или кнопкой.">
        <Button variant="outline" onClick={() => setCommandOpen(true)}>
          <Search />
          Поиск компонента
          <KbdGroup className="ml-2">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </Button>

        <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
          <CommandInput placeholder="Введите название компонента…" />
          <CommandList>
            <CommandEmpty>Ничего не найдено.</CommandEmpty>
            <CommandGroup heading="Компоненты">
              <CommandItem>
                Button
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>Dialog</CommandItem>
              <CommandItem>Sidebar</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Токены">
              <CommandItem>primary — пастельный голубой</CommandItem>
              <CommandItem>secondary — пастельный розовый</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </DemoBlock>

      <DemoBlock title="Tabs" description="Переключение вложенного контента.">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="tokens">Токены</TabsTrigger>
            <TabsTrigger value="usage">Использование</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-muted-foreground">
            Активный триггер — вторая плоскость primary за текстом.
          </TabsContent>
          <TabsContent value="tokens" className="text-muted-foreground">
            Плашка использует токен `muted`.
          </TabsContent>
          <TabsContent value="usage" className="text-muted-foreground">
            Ставится из реестра: `shadcn add @mine-ds/tabs`.
          </TabsContent>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="Dropdown Menu" description="Меню действий по кнопке.">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Действия</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Аккаунт</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Профиль</DropdownMenuItem>
            <DropdownMenuItem>Настройки</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Выйти</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoBlock>
    </div>
  )
}
