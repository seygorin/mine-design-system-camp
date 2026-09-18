import { Blocks, LayoutPanelLeft, MousePointerClick, Palette, SquarePen, Waves } from "lucide-react"
import { FeedbackSection } from "./sections/feedback"
import { FoundationsSection } from "./sections/foundations"
import { FormsSection } from "./sections/forms"
import { LayoutSection } from "./sections/layout"
import { NavigationSection } from "./sections/navigation"
import { OverlaysSection } from "./sections/overlays"

export type SectionId = "foundations" | "navigation" | "forms" | "overlays" | "layout" | "feedback"

export type Section = {
  id: SectionId
  title: string
  description: string
  icon: typeof Palette
  Component: () => React.ReactElement
}

export const SECTIONS: Section[] = [
  {
    id: "foundations",
    title: "Foundations",
    description: "Типографика, токены, Cubism и радужный фон",
    icon: Palette,
    Component: FoundationsSection,
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Breadcrumb, Tabs, меню и Command palette",
    icon: MousePointerClick,
    Component: NavigationSection,
  },
  {
    id: "forms",
    title: "Forms",
    description: "Input, Textarea, Switch, Kbd и кнопки",
    icon: SquarePen,
    Component: FormsSection,
  },
  {
    id: "overlays",
    title: "Overlays",
    description: "Dialog, Sheet и Tooltip",
    icon: Blocks,
    Component: OverlaysSection,
  },
  {
    id: "layout",
    title: "Layout",
    description: "Card, Separator, Scroll Area и Resizable",
    icon: LayoutPanelLeft,
    Component: LayoutSection,
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Badge, Avatar, Skeleton, Spinner и Shimmer",
    icon: Waves,
    Component: FeedbackSection,
  },
]
