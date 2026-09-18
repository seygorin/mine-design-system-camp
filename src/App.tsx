import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { NavUser } from "@/components/nav-user"
import { SiteHeader } from "@/components/site-header"
import { SECTIONS, type SectionId } from "@/components/showcase/sections"
import { Badge } from "@/components/ui/badge"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  TypographyH1,
  TypographyMuted,
} from "@/components/ui/typography"

function isSectionId(value: string): value is SectionId {
  return SECTIONS.some((section) => section.id === value)
}

function sectionFromHash(): SectionId {
  const hash = window.location.hash.replace("#", "")
  return isSectionId(hash) ? hash : "foundations"
}

function App() {
  const [activeId, setActiveId] = useState<SectionId>(sectionFromHash)
  const section = SECTIONS.find((item) => item.id === activeId) ?? SECTIONS[0]
  const SectionComponent = section.Component

  useEffect(() => {
    const openSection = (id: SectionId) => {
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`)
      }
      setActiveId(id)
    }

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a")
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") {
        return
      }

      const id = anchor.hash.replace("#", "")
      if (!isSectionId(id)) {
        return
      }

      event.preventDefault()
      openSection(id)
    }

    const onPopState = () => {
      setActiveId(sectionFromHash())
    }

    window.addEventListener("click", onClick)
    window.addEventListener("popstate", onPopState)
    return () => {
      window.removeEventListener("click", onClick)
      window.removeEventListener("popstate", onPopState)
    }
  }, [])

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader sectionTitle={section.title} />
        <div className="flex flex-1">
          <AppSidebar activeId={activeId} />
          <SidebarInset className="min-w-0 bg-surface-gradient">
            <div className="flex min-w-0 flex-1 flex-col gap-4 p-4">
              <div className="space-y-2">
                <Badge variant="secondary">{section.title}</Badge>
                <TypographyH1 className="text-3xl sm:text-4xl">
                  mine-design-system-camp
                </TypographyH1>
                <TypographyMuted>{section.description}</TypographyMuted>
              </div>
              <SectionComponent />
            </div>
          </SidebarInset>
        </div>
        <NavUser />
      </SidebarProvider>
    </div>
  )
}

export default App
