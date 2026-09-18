import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { DemoBlock } from "../demo-block"

export function OverlaysSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DemoBlock title="Dialog" description="Модальное окно по центру, закрывается по Esc.">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Открыть диалог</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Переименовать проект</DialogTitle>
              <DialogDescription>Изменения применятся сразу после сохранения.</DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <Label htmlFor="dialog-name">Название</Label>
              <Input id="dialog-name" defaultValue="mine-design-system-camp" />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Отмена</Button>
              </DialogClose>
              <Button>Сохранить</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoBlock>

      <DemoBlock title="Sheet" description="Боковая панель — удобна для мобильных экранов.">
        <div className="flex flex-wrap gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">Справа</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Настройки темы</SheetTitle>
                <SheetDescription>Токены применяются ко всем компонентам сразу.</SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <Button>Применить</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Снизу</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Мобильный вариант</SheetTitle>
                <SheetDescription>Панель снизу — mobile-first паттерн.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Tooltip"
        description="Квадратная плоскость с Cubist Shadow, без стрелки."
        className="lg:col-span-2"
      >
        <div className="flex flex-wrap gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Наведи на меня</Button>
            </TooltipTrigger>
            <TooltipContent>Подсказка на Jura</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">С горячей клавишей</Button>
            </TooltipTrigger>
            <TooltipContent>
              Открыть поиск <Kbd>⌘K</Kbd>
            </TooltipContent>
          </Tooltip>
        </div>
      </DemoBlock>
    </div>
  )
}
