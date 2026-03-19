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

export function CoupleStoryDialogContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

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
              The Happy Couple
            </DialogTitle>
            <DialogDescription className="text-center text-sm">
              Two hearts, one journey.
            </DialogDescription>
          </DialogHeader>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Groom section */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xs font-bold tracking-wider text-primary uppercase">
          The Groom
        </p>
        <h3 className="text-xl font-bold text-foreground">
          {WEDDING.couple.groom.name}
        </h3>
        <p className="text-xs text-muted-foreground">
          Son of {WEDDING.couple.groom.parents}
        </p>
        <p className="mt-1 text-sm text-muted-foreground italic">
          &ldquo;{WEDDING.couple.groom.quote}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Bride section */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xs font-bold tracking-wider text-primary uppercase">
          The Bride
        </p>
        <h3 className="text-xl font-bold text-foreground">
          {WEDDING.couple.bride.name}
        </h3>
        <p className="text-xs text-muted-foreground">
          Daughter of {WEDDING.couple.bride.parents}
        </p>
        <p className="mt-1 text-sm text-muted-foreground italic">
          &ldquo;{WEDDING.couple.bride.quote}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-border" />

      {/* Gallery section */}
      <div className="flex flex-col gap-3">
        <p className="text-center text-xs font-bold tracking-wider text-primary uppercase">
          Our Gallery
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
