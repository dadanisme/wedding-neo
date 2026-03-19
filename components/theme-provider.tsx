"use client"

import * as React from "react"
import { I18nProvider } from "@/lib/i18n-context"

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>
}

export { ThemeProvider }
