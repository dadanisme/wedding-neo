"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react"
import type { Locale, Dictionary } from "@/lib/i18n/types"
import en from "@/lib/i18n/en"
import id from "@/lib/i18n/id"

const dictionaries: Record<Locale, Dictionary> = { en, id }

type I18nContextValue = {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  dateLocale: string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = "wedding-lang"

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "id"
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "en" || stored === "id") return stored
  return "id"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])

  const value: I18nContextValue = {
    locale,
    t: dictionaries[locale],
    setLocale,
    dateLocale: locale === "id" ? "id-ID" : "en-US",
  }

  return <I18nContext value={value}>{children}</I18nContext>
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider")
  return ctx
}
