"use client"

import { useState } from "react"
import { GARUT_PLACES, type GarutPlace } from "@/lib/constants"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Leaf01Icon,
  MapsLocation01Icon,
  Mosque02Icon,
  Navigation03Icon,
  Restaurant01Icon,
} from "@hugeicons/core-free-icons"
import { useTranslation } from "@/lib/i18n-context"

const CATEGORY_ICONS = [
  { key: "all", icon: MapsLocation01Icon },
  { key: "nature", icon: Leaf01Icon },
  { key: "food", icon: Restaurant01Icon },
  { key: "culture", icon: Mosque02Icon },
] as const

type Category = (typeof CATEGORY_ICONS)[number]["key"]

const CATEGORY_COLORS: Record<GarutPlace["category"], string> = {
  nature: "bg-accent text-accent-foreground",
  food: "bg-primary text-primary-foreground",
  culture: "bg-secondary text-secondary-foreground",
}

export function GarutDialogContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const { t } = useTranslation()

  const filtered =
    activeCategory === "all"
      ? GARUT_PLACES
      : GARUT_PLACES.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Decorative header */}
      <div className="relative -mx-6 -mt-6 overflow-hidden border-b-2 border-border bg-secondary px-6 pt-10 pb-8">
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative flex flex-col items-center gap-4">
          <div className="flex size-14 items-center justify-center border-2 border-border bg-accent shadow-md">
            <HugeiconsIcon
              icon={MapsLocation01Icon}
              size={28}
              className="text-accent-foreground"
            />
          </div>
          <DialogHeader className="items-center gap-1.5">
            <DialogTitle className="text-center text-2xl font-bold tracking-tight">
              {t.garut.title}
            </DialogTitle>
            <DialogDescription className="max-w-md text-center">
              {t.garut.description}
            </DialogDescription>
          </DialogHeader>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {CATEGORY_ICONS.map((cat) => (
          <Button
            key={cat.key}
            size="sm"
            variant={activeCategory === cat.key ? "default" : "outline"}
            className={cn(
              "gap-1.5 border-2 border-border text-xs font-bold tracking-wider uppercase",
              activeCategory === cat.key ? "shadow-md" : "shadow-sm"
            )}
            onClick={() => setActiveCategory(cat.key)}
          >
            <HugeiconsIcon icon={cat.icon} size={14} />
            {t.garut.categories[cat.key]}
          </Button>
        ))}
      </div>

      {/* Places grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {filtered.map((place) => {
          const index = GARUT_PLACES.indexOf(place)
          const translatedPlace = t.garut.places[index]
          return (
            <PlaceCard
              key={place.name}
              place={place}
              name={translatedPlace?.name ?? place.name}
              description={translatedPlace?.description ?? place.description}
            />
          )
        })}
      </div>

      {/* Footer tip */}
      <p className="text-center text-xs text-muted-foreground italic">
        &ldquo;{t.garut.footerQuote}&rdquo;
      </p>
    </>
  )
}

function PlaceCard({
  place,
  name,
  description,
}: {
  place: GarutPlace
  name: string
  description: string
}) {
  const { t } = useTranslation()

  return (
    <div className="group flex flex-col overflow-hidden border-2 border-border bg-background shadow-sm transition-shadow hover:shadow-md">
      {/* Image placeholder */}
      <div
        className={cn(
          "relative flex h-32 items-end p-3",
          CATEGORY_COLORS[place.category]
        )}
      >
        {/* Decorative pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <span className="relative border-2 border-current bg-background/90 px-2 py-0.5 text-[10px] font-bold tracking-widest text-foreground uppercase">
          {t.garut.categories[place.category]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="text-sm leading-tight font-bold text-foreground">
          {name}
        </h3>
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
        <a
          href={place.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-colors hover:text-foreground"
        >
          <HugeiconsIcon icon={Navigation03Icon} size={12} />
          {t.garut.directions}
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={12}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </div>
  )
}
