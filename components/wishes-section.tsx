"use client"

import { useState } from "react"
import { useWishes } from "@/hooks/use-wishes"
import { useTranslation } from "@/lib/i18n-context"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function formatTimeAgo(
  date: Date | null,
  timeAgo: {
    justNow: string
    minutesAgo: string
    hoursAgo: string
    daysAgo: string
  }
): string {
  if (!date) return ""
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMin < 1) return timeAgo.justNow
  if (diffMin < 60) return timeAgo.minutesAgo.replace("{n}", String(diffMin))
  if (diffHours < 24) return timeAgo.hoursAgo.replace("{n}", String(diffHours))
  return timeAgo.daysAgo.replace("{n}", String(diffDays))
}

export function WishesSection({
  guest,
  guestSlug,
}: {
  guest: string
  guestSlug: string
}) {
  const { t } = useTranslation()
  const { wishes, loading, existingWish, sending, sendWish } =
    useWishes(guestSlug)
  const [draft, setDraft] = useState<string | null>(null)

  // If user hasn't edited, show existing wish; otherwise show draft
  const message = draft ?? existingWish?.message ?? ""

  const handleSubmit = async () => {
    if (!message.trim()) return
    await sendWish(message.trim())
    setDraft(null)
  }

  const isUpdate = !!existingWish
  const inputLabel = t.wishes.inputLabel.replace("{guest}", guest)

  return (
    <div className="flex flex-col gap-4">
      {/* Section divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border opacity-20" />
        <span className="text-[9px] font-bold tracking-[2px] text-muted-foreground uppercase">
          {t.wishes.sectionTitle}
        </span>
        <div className="h-px flex-1 bg-border opacity-20" />
      </div>

      {/* Input area */}
      <div className="flex flex-col gap-3 border-2 border-border bg-secondary p-4 shadow-md">
        <p className="text-[11px] font-bold tracking-[1.5px] text-muted-foreground uppercase">
          {inputLabel}
        </p>
        <Textarea
          value={message}
          onChange={(e) => {
            setDraft(e.target.value)
          }}
          placeholder={t.wishes.placeholder}
          maxLength={500}
          className="min-h-[72px] resize-none border-2 border-border bg-background"
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {message.length}/500
          </span>
          <Button
            onClick={handleSubmit}
            disabled={!message.trim() || sending}
            className="border-2 border-border text-[13px] font-bold tracking-[1px] uppercase shadow-md"
          >
            {sending ? "..." : isUpdate ? t.wishes.update : t.wishes.send}
          </Button>
        </div>
      </div>

      {/* Wish feed */}
      {loading ? (
        <div className="py-8 text-center text-sm text-muted-foreground">
          ...
        </div>
      ) : wishes.length === 0 ? (
        <div className="py-8 text-center text-sm text-muted-foreground">
          {t.wishes.empty}
        </div>
      ) : (
        <div className="flex max-h-80 flex-col gap-3 overflow-y-auto pr-1">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="flex flex-col gap-1.5 border-2 border-border bg-background p-3.5 shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold">{wish.guestName}</span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {formatTimeAgo(wish.createdAt, t.wishes.timeAgo)}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{wish.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
