"use client"

import * as React from "react"
import { SwatchBookIcon } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SECTIONS, type SectionId } from "@/components/showcase/sections"

export function AppSidebar({
  activeId,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  activeId?: SectionId
}) {
  return (
    <Sidebar
      collapsible="icon"
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Design System">
              <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <SwatchBookIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Design System</span>
                <span className="text-muted-foreground truncate text-xs">mine camp</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={SECTIONS.map((section) => ({
            title: section.title,
            url: `#${section.id}`,
            isActive: section.id === activeId,
          }))}
        />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
