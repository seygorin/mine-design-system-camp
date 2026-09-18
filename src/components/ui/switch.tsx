"use client"

import * as React from "react"
import { cn } from "cn"
import { Switch as SwitchPrimitive } from "radix-ui"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        `group/switch relative inline-block shrink-0 overflow-visible rounded-none border
        border-transparent outline-none`,
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[size=default]:size-5 data-[size=sm]:size-4",
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-input group-data-[state=unchecked]/switch:shadow-cubist
          dark:bg-input/80"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-primary shadow-cubist opacity-0
          transition-[opacity,transform] duration-80
          group-data-[state=checked]/switch:translate-x-[var(--cubist-shadow-x)]
          group-data-[state=checked]/switch:translate-y-[var(--cubist-shadow-y)]
          group-data-[state=checked]/switch:opacity-100"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
