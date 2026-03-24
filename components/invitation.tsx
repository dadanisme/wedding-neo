"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { WEDDING } from "@/lib/constants"
import { useTranslation } from "@/lib/i18n-context"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Calendar03Icon,
  Clock01Icon,
  Location04Icon,
} from "@hugeicons/core-free-icons"
import { GreetingDialogContent } from "@/components/dialogs/greeting-dialog-content"
import { CoupleStoryDialogContent } from "@/components/dialogs/couple-story-dialog-content"
import { VenueDialogContent } from "@/components/dialogs/venue-dialog-content"
import { GarutDialogContent } from "@/components/dialogs/garut-dialog-content"
import { LanguageToggle } from "@/components/language-toggle"
import { FallingIcons } from "@/components/falling-icons"
import { MusicPlayer } from "@/components/music-player"

function BentoCard({
  className,
  cardClassName,
  dialogClassName,
  children,
  dialogContent,
}: {
  className?: string
  cardClassName?: string
  dialogClassName?: string
  children: React.ReactNode
  dialogContent: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        className={`cursor-pointer text-left transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] ${className ?? ""}`}
        render={
          <Card
            className={`h-full border-2 border-border shadow-md ${cardClassName ?? ""}`}
          />
        }
      >
        <div className="relative flex h-full flex-col overflow-hidden">
          {children}
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={18}
            className="pointer-events-none absolute right-3 bottom-3 text-foreground opacity-50"
          />
        </div>
      </DialogTrigger>
      <DialogContent className={dialogClassName}>{dialogContent}</DialogContent>
    </Dialog>
  )
}

const GARUT_SLIDES = [
  "/garut/wisata/situ-bagendit_1.jpg",
  "/garut/hotels/mercure-garut_1.jpg",
  "/garut/wisata/darajat-pass_1.jpg",
  "/garut/wisata/kamasri-view_1.jpg",
  "/garut/wisata/nagara-hot-spring_1.jpg",
]

function GarutCardBackground() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % GARUT_SLIDES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {GARUT_SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 640px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

export function Invitation({ guest }: { guest: string }) {
  const { t, dateLocale } = useTranslation()
  const greetingText = t.greeting.salutation.replace("{guest}", guest)

  const date = new Date(WEDDING.date)

  const formattedDate = date.toLocaleDateString(dateLocale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden p-4 sm:p-8">
      <FallingIcons />
      <MusicPlayer />
      <div className="relative z-10 flex w-full max-w-4xl flex-col gap-4">
        {/* Greeting Alert */}
        <Dialog defaultOpen>
          <DialogTrigger
            nativeButton={false}
            className="cursor-pointer text-left transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            render={
              <Alert className="border-2 border-border bg-secondary text-secondary-foreground shadow-md" />
            }
          >
            <AlertTitle className="flex items-center justify-between">
              {greetingText}
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </AlertTitle>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto">
            <GreetingDialogContent guest={guest} />
          </DialogContent>
        </Dialog>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-[auto_auto]">
          {/* The Couple & Our Story */}
          <BentoCard
            className="col-span-2 bg-primary text-primary-foreground"
            dialogClassName="sm:max-w-lg max-h-[85vh] overflow-y-auto"
            dialogContent={<CoupleStoryDialogContent />}
          >
            <CardHeader>
              <CardTitle className="text-xs font-normal tracking-widest uppercase opacity-80">
                {t.page.gettingMarried}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold sm:text-5xl">
                {WEDDING.couple.bride.shortName}
                <br />
                &amp; {WEDDING.couple.groom.shortName}
              </h2>
              <p className="mt-2 text-sm opacity-70">{t.page.twoHearts}</p>
            </CardContent>
          </BentoCard>

          {/* Date & Venue Card */}
          <BentoCard
            className="col-span-2 overflow-hidden bg-secondary text-secondary-foreground sm:col-span-2"
            dialogClassName="max-h-[85vh] overflow-y-auto"
            dialogContent={<VenueDialogContent />}
          >
            <CardContent className="flex items-center gap-4 p-4">
              <HugeiconsIcon
                icon={Calendar03Icon}
                size={40}
                className="shrink-0 text-primary"
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-bold tracking-wider uppercase opacity-60">
                  {t.page.saveTheDate}
                </p>
                <p className="text-base leading-tight font-bold text-foreground sm:text-lg">
                  {formattedDate}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Clock01Icon}
                      size={12}
                      className="text-primary"
                    />
                    {WEDDING.time} WIB
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Location04Icon}
                      size={12}
                      className="text-primary"
                    />
                    {WEDDING.venue}
                  </span>
                </div>
              </div>
            </CardContent>
          </BentoCard>

          {/* Where to go in Garut */}
          <BentoCard
            className="col-span-2 text-white sm:col-start-3 sm:row-span-2 sm:row-start-1"
            cardClassName="gap-0 py-0"
            dialogClassName="sm:max-w-3xl max-h-[85vh] overflow-y-auto"
            dialogContent={<GarutDialogContent />}
          >
            <GarutCardBackground />
            <CardHeader className="relative z-10 pt-6">
              <CardTitle className="text-xs font-normal tracking-widest uppercase opacity-80">
                {t.page.garutTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-1 items-end pb-6">
              <p className="text-lg font-medium sm:text-xl">
                {t.page.garutDescription}
              </p>
            </CardContent>
          </BentoCard>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center pb-20">
          <LanguageToggle />
        </div>
      </div>
    </div>
  )
}
