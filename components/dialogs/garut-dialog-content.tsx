"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
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
  ArrowLeft02Icon,
  ArrowRight01Icon,
  Building06Icon,
  Call02Icon,
  Cancel01Icon,
  Leaf01Icon,
  Location04Icon,
  MapsLocation01Icon,
  Navigation03Icon,
  StarIcon,
} from "@hugeicons/core-free-icons"
import { useTranslation } from "@/lib/i18n-context"

const CATEGORY_ICONS = [
  { key: "all", icon: MapsLocation01Icon },
  { key: "hotel", icon: Building06Icon },
  { key: "wisata", icon: Leaf01Icon },
] as const

type Category = (typeof CATEGORY_ICONS)[number]["key"]

type SelectedPlace = {
  place: GarutPlace
  name: string
  description: string
}

export function GarutDialogContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [selected, setSelected] = useState<SelectedPlace | null>(null)
  const { t } = useTranslation()

  const filtered =
    activeCategory === "all"
      ? GARUT_PLACES
      : GARUT_PLACES.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Decorative header */}
      <div className="relative -mx-6 -mt-6 overflow-hidden border-b-2 border-border bg-secondary px-6 pt-10 pb-8">
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
              key={place.id}
              place={place}
              name={translatedPlace?.name ?? place.name}
              description={translatedPlace?.description ?? place.notes}
              onSelect={() =>
                setSelected({
                  place,
                  name: translatedPlace?.name ?? place.name,
                  description: translatedPlace?.description ?? place.notes,
                })
              }
            />
          )
        })}
      </div>

      {/* Footer tip */}
      <p className="text-center text-xs text-muted-foreground italic">
        &ldquo;{t.garut.footerQuote}&rdquo;
      </p>

      {/* Place detail overlay — portaled to body */}
      {selected &&
        createPortal(
          <PlaceDetailOverlay
            place={selected.place}
            name={selected.name}
            description={selected.description}
            onClose={() => setSelected(null)}
          />,
          document.body
        )}
    </>
  )
}

function PlaceCard({
  place,
  name,
  description,
  onSelect,
}: {
  place: GarutPlace
  name: string
  description: string
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex cursor-pointer flex-col overflow-hidden border-2 border-border bg-background text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Image background */}
      <div className="relative h-36 overflow-hidden">
        <Image
          src={place.images[0]}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <span className="absolute top-2 right-2 flex items-center gap-1 bg-background/90 px-1.5 py-0.5 text-[10px] font-bold text-foreground">
          <HugeiconsIcon icon={StarIcon} size={10} className="text-primary" />
          {place.rating}
          <span className="text-muted-foreground">
            ({place.ratingCount.toLocaleString()})
          </span>
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="text-sm leading-tight font-bold text-foreground">
          {name}
        </h3>
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </button>
  )
}

function PlaceDetailOverlay({
  place,
  name,
  description,
  onClose,
}: {
  place: GarutPlace
  name: string
  description: string
  onClose: () => void
}) {
  const [currentImage, setCurrentImage] = useState(0)
  const [closing, setClosing] = useState(false)
  const { t } = useTranslation()

  const handleClose = () => {
    setClosing(true)
    setTimeout(onClose, 150)
  }

  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + place.images.length) % place.images.length
    )
  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % place.images.length)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/80 backdrop-blur-xs duration-150",
          closing ? "animate-out fade-out-0" : "animate-in fade-in-0"
        )}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "relative z-10 grid w-full max-w-[calc(100%-2rem)] gap-6 overflow-hidden rounded-4xl bg-background p-6 text-sm ring-1 ring-foreground/5 duration-150 sm:max-w-lg",
          closing
            ? "animate-out fade-out-0 zoom-out-95"
            : "animate-in fade-in-0 zoom-in-95"
        )}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute top-4 right-4 z-20"
          onClick={handleClose}
        >
          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          <span className="sr-only">Close</span>
        </Button>

        {/* Image gallery */}
        <div className="-mx-6 -mt-6 border-b-2 border-border">
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-4xl">
            {place.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${name} — ${i + 1}`}
                fill
                className={cn(
                  "object-cover transition-opacity duration-500",
                  i === currentImage ? "opacity-100" : "opacity-0"
                )}
                sizes="(max-width: 640px) 100vw, 512px"
              />
            ))}
            {place.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer border-2 border-border bg-background/90 p-1.5 shadow-md transition-colors hover:bg-background"
                >
                  <HugeiconsIcon icon={ArrowLeft02Icon} size={16} />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer border-2 border-border bg-background/90 p-1.5 shadow-md transition-colors hover:bg-background"
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                </button>
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {place.images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImage(i)}
                      className={cn(
                        "size-2 cursor-pointer rounded-full border border-white/50 transition-colors",
                        i === currentImage ? "bg-white" : "bg-white/40"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl leading-tight font-bold text-foreground">
              {name}
            </h2>
            <span className="flex shrink-0 items-center gap-1 border-2 border-border bg-secondary px-2 py-1 text-xs font-bold">
              <HugeiconsIcon
                icon={StarIcon}
                size={12}
                className="text-primary"
              />
              {place.rating}
              <span className="text-muted-foreground">
                ({place.ratingCount.toLocaleString()})
              </span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-col gap-1.5">
            <p className="flex items-start gap-2 text-xs text-muted-foreground">
              <HugeiconsIcon
                icon={Location04Icon}
                size={14}
                className="mt-0.5 shrink-0 text-primary"
              />
              {place.address}
            </p>
            {place.phone && (
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <HugeiconsIcon
                  icon={Call02Icon}
                  size={14}
                  className="shrink-0 text-primary"
                />
                <a
                  href={`tel:${place.phone}`}
                  className="hover:text-foreground"
                >
                  {place.phone}
                </a>
              </p>
            )}
          </div>

          <a
            href={place.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1"
          >
            <Button
              size="sm"
              className="gap-1.5 border-2 border-border text-xs font-bold tracking-wider uppercase shadow-md"
            >
              <HugeiconsIcon icon={Navigation03Icon} size={14} />
              {t.garut.directions}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
