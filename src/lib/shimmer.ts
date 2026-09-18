import { cn } from "cn"

function shimmer(...classNames: Parameters<typeof cn>) {
  return cn("bg-muted animate-shimmer rounded-none", ...classNames)
}

export { shimmer }
