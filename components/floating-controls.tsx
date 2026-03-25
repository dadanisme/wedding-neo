"use client"

import { useState } from "react"
import { useMusic, MUSIC_TRACKS } from "@/lib/music-context"
import { useTranslation } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MusicNote03Icon,
  MuteIcon,
  ArrowDown01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons"
import { LanguageToggle } from "@/components/language-toggle"

export function FloatingControls() {
  const { playing, activated, toggle, track, setTrack } = useMusic()
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
      {/* Expandable song selector panel — only when music is activated */}
      {activated && (
        <div
          className={`flex w-56 origin-bottom flex-col gap-2 border-2 border-border bg-background p-3 shadow-lg transition-all duration-300 ease-out ${
            expanded
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }`}
        >
          <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
            {t.music.selectSong}
          </p>
          <Select
            value={track}
            onValueChange={(v) => {
              if (v) setTrack(v)
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                {(value) => MUSIC_TRACKS.find((m) => m.id === value)?.label}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {MUSIC_TRACKS.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Button row */}
      <div className="flex gap-1.5">
        <LanguageToggle />
        {activated && (
          <>
            <Button
              size="icon"
              variant="outline"
              className="size-10 border-2 border-border shadow-md"
              onClick={() => setExpanded(!expanded)}
            >
              <HugeiconsIcon
                icon={expanded ? ArrowDown01Icon : ArrowUp01Icon}
                size={18}
              />
            </Button>
            <Button
              size="icon"
              variant={playing ? "default" : "outline"}
              className="size-10 border-2 border-border shadow-md"
              onClick={toggle}
            >
              <HugeiconsIcon
                icon={playing ? MusicNote03Icon : MuteIcon}
                size={18}
              />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
