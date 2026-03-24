"use client"

import * as React from "react"
import { I18nProvider } from "@/lib/i18n-context"
import { MusicProvider } from "@/lib/music-context"

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <MusicProvider>{children}</MusicProvider>
    </I18nProvider>
  )
}

export { ThemeProvider }
