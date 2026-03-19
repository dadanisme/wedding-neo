"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { WEDDING } from "@/lib/constants"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { HugeiconsIcon } from "@hugeicons/react"
import { FavouriteIcon } from "@hugeicons/core-free-icons"
import { useTranslation } from "@/lib/i18n-context"

export function CoupleStoryDialogContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const { t } = useTranslation()

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
              icon={FavouriteIcon}
              size={28}
              className="text-accent-foreground"
            />
          </div>
          <DialogHeader className="items-center gap-1.5">
            <DialogTitle className="text-center text-2xl font-bold tracking-tight">
              {t.couple.title}
            </DialogTitle>
            <DialogDescription className="text-center text-sm">
              {t.couple.subtitle}
            </DialogDescription>
          </DialogHeader>
        </div>
      </div>

      {/* Groom section */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xs font-bold tracking-wider text-primary uppercase">
          {t.couple.theGroom}
        </p>
        <h3 className="text-xl font-bold text-foreground">
          {WEDDING.couple.groom.name}
        </h3>
        <p className="text-xs text-muted-foreground">
          {t.couple.sonOf} {WEDDING.couple.groom.parents}
        </p>
        <p className="mt-1 text-sm text-muted-foreground italic">
          &ldquo;{t.couple.groomQuote}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Bride section */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xs font-bold tracking-wider text-primary uppercase">
          {t.couple.theBride}
        </p>
        <h3 className="text-xl font-bold text-foreground">
          {WEDDING.couple.bride.name}
        </h3>
        <p className="text-xs text-muted-foreground">
          {t.couple.daughterOf} {WEDDING.couple.bride.parents}
        </p>
        <p className="mt-1 text-sm text-muted-foreground italic">
          &ldquo;{t.couple.brideQuote}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Gallery section */}
      <div className="flex flex-col gap-3">
        <p className="text-center text-xs font-bold tracking-wider text-primary uppercase">
          {t.couple.ourGallery}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {WEDDING.gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              className="relative aspect-square cursor-pointer overflow-hidden border-2 border-border bg-secondary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 30vw, 150px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={WEDDING.gallery.map((src) => ({ src }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  )
}
