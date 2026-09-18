import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource/jura/400.css"
import "@fontsource/jura/500.css"
import "@fontsource/jura/600.css"
import "@fontsource/jura/700.css"
import App from "./App.tsx"
import { ThemeProvider } from "./hooks/use-theme.tsx"
import { CubistShadowBinder } from "./lib/cubist-shadow.ts"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CubistShadowBinder>
        <App />
      </CubistShadowBinder>
    </ThemeProvider>
  </StrictMode>
)
