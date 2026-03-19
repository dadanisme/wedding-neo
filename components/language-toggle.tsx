"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n-context"
import { Switch } from "@/components/ui/switch"

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation()

  return (
    <label className="inline-flex cursor-pointer items-center gap-2.5">
      <span className="inline-flex items-center gap-1">
        <Image
          src="https://flagcdn.com/id.svg"
          alt="Indonesian"
          width={20}
          height={14}
          unoptimized
          className="h-3.5 w-5 border border-border object-cover"
        />
        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
          ID
        </span>
      </span>
      <Switch
        checked={locale === "en"}
        onCheckedChange={(checked) => setLocale(checked ? "en" : "id")}
      />
      <span className="inline-flex items-center gap-1">
        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
          EN
        </span>
        <Image
          src="https://flagcdn.com/gb.svg"
          alt="English"
          width={20}
          height={14}
          unoptimized
          className="h-3.5 w-5 border border-border object-cover"
        />
      </span>
    </label>
  )
}
