import { useLayoutEffect, type ReactNode } from "react"

const PORTRAIT_SELECTOR = ".cubist-portrait"
const PORTRAIT_LIVE_SELECTOR = ".cubist-portrait-live"
const SHIMMER_SELECTOR = ".animate-shimmer"
const SHADOW_SELECTOR = "[class*='shadow-cubist'], .offset-cubist"
const ELEMENT_DEAD_ZONE = 8
const SHADOW_FOLLOW = 0.08
const SHADOW_SETTLE = 0.002

const SHIMMER_PRESETS = [
  {
    angle: "90deg",
    size: "200% 100%",
    from: ["-100%", "0"] as const,
    to: ["200%", "0"] as const,
  },
  {
    angle: "270deg",
    size: "200% 100%",
    from: ["200%", "0"] as const,
    to: ["-100%", "0"] as const,
  },
  {
    angle: "180deg",
    size: "100% 200%",
    from: ["0", "-100%"] as const,
    to: ["0", "200%"] as const,
  },
  {
    angle: "0deg",
    size: "100% 200%",
    from: ["0", "200%"] as const,
    to: ["0", "-100%"] as const,
  },
  {
    angle: "135deg",
    size: "200% 200%",
    from: ["-50%", "-50%"] as const,
    to: ["150%", "150%"] as const,
  },
  {
    angle: "315deg",
    size: "200% 200%",
    from: ["150%", "150%"] as const,
    to: ["-50%", "-50%"] as const,
  },
  {
    angle: "45deg",
    size: "200% 200%",
    from: ["-50%", "150%"] as const,
    to: ["150%", "-50%"] as const,
  },
  {
    angle: "225deg",
    size: "200% 200%",
    from: ["150%", "-50%"] as const,
    to: ["-50%", "150%"] as const,
  },
] as const
const PORTRAIT_TICK_MS = 1000
const PORTRAIT_COLORS = ["var(--primary)", "var(--secondary)", "var(--accent)"] as const
const VERTICAL_DIRS = ["to top", "to bottom"] as const
const HORIZONTAL_DIRS = ["to left", "to right"] as const

type CubistTarget = HTMLElement | SVGElement

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const current = next[i]
    const swap = next[j]
    next[i] = swap
    next[j] = current
  }
  return next
}

function randomPercent(min: number, max: number) {
  return `${min + Math.floor(Math.random() * (max - min + 1))}%`
}

function applyElementShadow(element: CubistTarget, x: number, y: number) {
  element.style.setProperty(
    "--cubist-shadow-x",
    `calc(${x.toFixed(3)} * var(--cubist-shadow-offset))`
  )
  element.style.setProperty(
    "--cubist-shadow-y",
    `calc(${y.toFixed(3)} * var(--cubist-shadow-offset))`
  )
}

type ShadowFollow = {
  currentX: number
  currentY: number
  targetX: number
  targetY: number
}

function isCubistTarget(node: EventTarget | null): node is CubistTarget {
  return node instanceof HTMLElement || node instanceof SVGElement
}

function bindLightShadows() {
  const follow = new WeakMap<CubistTarget, ShadowFollow>()
  let frame = 0
  let light: { x: number; y: number } | null = null

  function shadowState(element: CubistTarget) {
    let state = follow.get(element)
    if (!state) {
      state = { currentX: 1, currentY: 1, targetX: 1, targetY: 1 }
      follow.set(element, state)
    }
    return state
  }

  function tick() {
    let settling = false
    document.querySelectorAll(SHADOW_SELECTOR).forEach((node) => {
      if (!isCubistTarget(node)) return
      const state = shadowState(node)
      if (light) {
        const rect = node.getBoundingClientRect()
        const dx = rect.left + rect.width / 2 - light.x
        const dy = rect.top + rect.height / 2 - light.y
        if (Math.abs(dx) >= ELEMENT_DEAD_ZONE) {
          state.targetX = dx < 0 ? -1 : 1
        }
        if (Math.abs(dy) >= ELEMENT_DEAD_ZONE) {
          state.targetY = dy < 0 ? -1 : 1
        }
      }
      state.currentX += (state.targetX - state.currentX) * SHADOW_FOLLOW
      state.currentY += (state.targetY - state.currentY) * SHADOW_FOLLOW
      if (
        Math.abs(state.targetX - state.currentX) > SHADOW_SETTLE ||
        Math.abs(state.targetY - state.currentY) > SHADOW_SETTLE
      ) {
        settling = true
      } else {
        state.currentX = state.targetX
        state.currentY = state.targetY
      }
      applyElementShadow(node, state.currentX, state.currentY)
    })
    frame = settling ? window.requestAnimationFrame(tick) : 0
  }

  function onPointer(event: PointerEvent) {
    light = { x: event.clientX, y: event.clientY }
    if (!frame) {
      frame = window.requestAnimationFrame(tick)
    }
  }

  window.addEventListener("pointerdown", onPointer, { passive: true })
  window.addEventListener("pointermove", onPointer, { passive: true })
  return () => {
    window.removeEventListener("pointerdown", onPointer)
    window.removeEventListener("pointermove", onPointer)
    if (frame) {
      window.cancelAnimationFrame(frame)
    }
  }
}

function paintPortrait(element: CubistTarget) {
  const live = element.classList.contains("cubist-portrait-live")
  if (!live && element.dataset.cubistPortrait !== undefined) return
  const [a, b, c] = shuffle(PORTRAIT_COLORS)
  const overlayVertical = Math.random() < 0.5
  element.style.setProperty("--cubist-portrait-a", a)
  element.style.setProperty("--cubist-portrait-b", b)
  element.style.setProperty("--cubist-portrait-c", c)
  element.style.setProperty(
    "--cubist-portrait-split-dir",
    pick(overlayVertical ? HORIZONTAL_DIRS : VERTICAL_DIRS)
  )
  element.style.setProperty(
    "--cubist-portrait-overlay-dir",
    pick(overlayVertical ? VERTICAL_DIRS : HORIZONTAL_DIRS)
  )
  element.style.setProperty("--cubist-portrait-split", randomPercent(40, 60))
  element.style.setProperty("--cubist-portrait-overlay", randomPercent(45, 65))
  if (!live) {
    element.dataset.cubistPortrait = ""
  }
}

function paintShimmer(element: CubistTarget) {
  if (element.dataset.cubistShimmer !== undefined) return
  const preset = pick(SHIMMER_PRESETS)
  element.style.setProperty("--shimmer-angle", preset.angle)
  element.style.setProperty("--shimmer-size", preset.size)
  element.style.setProperty("--shimmer-from-x", preset.from[0])
  element.style.setProperty("--shimmer-from-y", preset.from[1])
  element.style.setProperty("--shimmer-to-x", preset.to[0])
  element.style.setProperty("--shimmer-to-y", preset.to[1])
  element.dataset.cubistShimmer = ""
}

function paintMatching(root: ParentNode, selector: string, paint: (element: CubistTarget) => void) {
  if ((root instanceof HTMLElement || root instanceof SVGElement) && root.matches(selector)) {
    paint(root)
  }
  root.querySelectorAll(selector).forEach((node) => {
    if (node instanceof HTMLElement || node instanceof SVGElement) {
      paint(node)
    }
  })
}

function paintTree(root: ParentNode) {
  paintMatching(root, PORTRAIT_SELECTOR, paintPortrait)
  paintMatching(root, SHIMMER_SELECTOR, paintShimmer)
}

function CubistShadowBinder({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    paintTree(document)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            paintTree(node)
          }
        })
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const stopShadow = reduceMotion.matches ? undefined : bindLightShadows()
    const timer = reduceMotion.matches
      ? 0
      : window.setInterval(
          () => paintMatching(document, PORTRAIT_LIVE_SELECTOR, paintPortrait),
          PORTRAIT_TICK_MS
        )
    return () => {
      observer.disconnect()
      window.clearInterval(timer)
      stopShadow?.()
    }
  }, [])

  return children
}

export { CubistShadowBinder }
