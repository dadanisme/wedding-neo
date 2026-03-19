"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { WEDDING } from "@/lib/constants"
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

function BentoCard({
  className,
  dialogClassName,
  children,
  dialogContent,
}: {
  className?: string
  dialogClassName?: string
  children: React.ReactNode
  dialogContent: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        className={`cursor-pointer text-left transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] ${className ?? ""}`}
        render={<Card className="h-full border-2 border-border shadow-md" />}
      >
        <div className="relative flex h-full flex-col">
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

function PageContent() {
  const searchParams = useSearchParams()
  const guest = searchParams.get("to") ?? "Guest"
  const greetingText = WEDDING.greeting.replace("{guest}", guest)

  const date = new Date(WEDDING.date)

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-svh items-center justify-center p-4 sm:p-8">
      <div className="flex w-full max-w-4xl flex-col gap-4">
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
          <DialogContent>
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
                We&apos;re getting married
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold sm:text-5xl">
                {WEDDING.couple.bride.shortName}
                <br />
                &amp; {WEDDING.couple.groom.shortName}
              </h2>
              <p className="mt-2 text-sm opacity-70">
                Two hearts, one journey.
              </p>
            </CardContent>
          </BentoCard>

          {/* Date & Venue Card */}
          <BentoCard
            className="col-span-2 overflow-hidden bg-secondary text-secondary-foreground sm:col-span-2"
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
                  Save the Date
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
            className="col-span-2 bg-accent text-accent-foreground sm:col-start-3 sm:row-span-2 sm:row-start-1"
            dialogClassName="sm:max-w-3xl max-h-[85vh] overflow-y-auto"
            dialogContent={<GarutDialogContent />}
          >
            <CardHeader>
              <CardTitle className="text-xs font-normal tracking-widest uppercase opacity-80">
                Where to Go in Garut
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 items-end">
              <p className="text-lg font-medium sm:text-xl">
                Explore hot springs, tea plantations, and local cuisine while
                you&apos;re here.
              </p>
            </CardContent>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  )
}
