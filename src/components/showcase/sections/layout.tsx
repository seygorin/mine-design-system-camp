import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { DemoBlock } from "../demo-block";

const REGISTRY_ITEMS = [
  "breadcrumb",
  "button",
  "card",
  "collapsible",
  "command",
  "context-menu",
  "dialog",
  "dropdown-menu",
  "input",
  "kbd",
  "resizable",
  "scroll-area",
  "sheet",
  "sidebar",
  "spinner",
  "switch",
  "tabs",
  "textarea",
  "tooltip",
  "typography",
];

export function LayoutSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DemoBlock
        title="Card & Separator"
        description="Базовая раскладка блока с разделителями."
      >
        <Card>
          <CardHeader>
            <CardTitle>Registry</CardTitle>
            <CardDescription>
              Компоненты раздаются как статические JSON.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3 text-sm">
            <span>19 items</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Vite</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Tailwind v4</span>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              Открыть реестр
            </Button>
          </CardFooter>
        </Card>
      </DemoBlock>

      <DemoBlock
        title="Scroll Area"
        description="Прокрутка с кастомным скроллбаром."
      >
        <ScrollArea className="h-48 rounded-md border p-3">
          <div className="space-y-2">
            {REGISTRY_ITEMS.map((item) => (
              <div key={item} className="flex items-center justify-between">
                <code className="font-mono text-sm">{item}</code>
                <Badge variant="secondary">ui</Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DemoBlock>

      <DemoBlock
        title="Resizable"
        description="Панели с перетаскиваемой границей."
        className="lg:col-span-2"
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-40 rounded-lg border"
        >
          <ResizablePanel defaultSize="35" minSize="20">
            <div className="flex h-full items-center justify-center p-4 text-sm">
              Sidebar
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="65">
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize="35" minSize="20">
                <div className="flex h-full items-center justify-center p-4 text-sm">
                  Content
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize="35" minSize="20">
                <div className="flex h-full items-center justify-center p-4 text-sm">
                  Preview
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DemoBlock>
    </div>
  );
}
