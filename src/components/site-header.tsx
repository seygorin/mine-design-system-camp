"use client"

import { MoonIcon, SidebarIcon, SunIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { useTheme } from "@/hooks/use-theme"

export function SiteHeader({ sectionTitle }: { sectionTitle: string }) {
  const { toggleSidebar } = useSidebar()
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center border-b border-b-2 bg-transparent"
    >
      <div className="flex h-(--header-height) w-full items-center gap-4 px-4">
        <Button
          className="h-8 w-8 overflow-visible"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon className="shadow-cubist-icon" />
        </Button>
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#foundations">Showcase</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{sectionTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Label
          className="text-foreground ml-2 flex cursor-pointer sm:ml-auto sm:w-auto gap-4"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? (
            <MoonIcon className="size-4 shadow-cubist-icon" />
          ) : (
            <SunIcon className="size-4 shadow-cubist-icon" />
          )}
          <span className="sr-only">Тёмная тема</span>
        </Label>
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>
  )
}
