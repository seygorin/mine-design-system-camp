import * as React from "react"
import { Tabs as TabsPrimitive } from "radix-ui"
import { cn } from "cn"

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        `bg-muted text-muted-foreground inline-flex h-10 w-fit items-center justify-center
        overflow-visible rounded-none p-1 shadow-cubist`,
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `inline-flex items-center justify-center gap-1.5 rounded-none px-5 py-1.5 text-sm
        font-medium whitespace-nowrap transition-all`,
        `ring-offset-background focus-visible:ring-ring focus-visible:ring-2
        focus-visible:ring-offset-2 focus-visible:outline-none`,
        "disabled:pointer-events-none disabled:opacity-50",
        `data-[state=active]:relative data-[state=active]:z-10 data-[state=active]:bg-background
        data-[state=active]:text-foreground data-[state=active]:shadow-cubist`,
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        `ring-offset-background focus-visible:ring-ring mt-2 flex-1 outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2`,
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
