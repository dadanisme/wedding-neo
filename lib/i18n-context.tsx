"use client"

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
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

let listeners: Array<() => void> = []

function getSnapshot(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "en" || stored === "id") return stored
  return "id"
}

function getServerSnapshot(): Locale {
  return "id"
}

function subscribe(listener: () => void) {
  listeners = [...listeners, listener]
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const setLocale = useCallback((l: Locale) => {
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
    emitChange()
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

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
