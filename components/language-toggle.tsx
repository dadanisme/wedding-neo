"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation()

  return (
    <Button
      size="sm"
      variant="outline"
      className="h-10 gap-1.5 border-2 border-border px-3 text-[11px] font-bold tracking-[1px] shadow-md"
      onClick={() => setLocale(locale === "id" ? "en" : "id")}
    >
      <Image
        src="https://flagcdn.com/id.svg"
        alt="Indonesian"
        width={16}
        height={12}
        unoptimized
        className="h-3 w-4 border border-border object-cover"
      />
      <span>ID / EN</span>
      <Image
        src="https://flagcdn.com/gb.svg"
        alt="English"
        width={16}
        height={12}
        unoptimized
        className="h-3 w-4 border border-border object-cover"
      />
    </Button>
  )
}
