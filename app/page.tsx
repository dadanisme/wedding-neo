"use client"

import { useSearchParams } from "next/navigation"
import { WEDDING } from "@/lib/constants"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

function BentoCard({
  className,
  children,
  dialogTitle,
  dialogContent,
}: {
  className?: string
  children: React.ReactNode
  dialogTitle: string
  dialogContent: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        className={`cursor-pointer text-left transition-all hover:-translate-y-0.5 hover:shadow-lg ${className ?? ""}`}
        render={<Card className="h-full border-2 border-border shadow-md" />}
      >
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogContent}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default function Page() {
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
        <Dialog>
          <DialogTrigger
            nativeButton={false}
            className="cursor-pointer text-left transition-all hover:-translate-y-0.5 hover:shadow-lg"
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
            <DialogHeader>
              <DialogTitle>Welcome, {guest}!</DialogTitle>
              <DialogDescription>
                We are delighted to have you celebrate this special day with us.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
          {/* Names Card - top left, spans 2 cols */}
          <BentoCard
            className="col-span-2 bg-primary text-primary-foreground"
            dialogTitle="The Couple"
            dialogContent="More details about Sarah & Ramdan coming soon."
          >
            <CardHeader>
              <CardTitle className="text-xs font-normal tracking-widest uppercase opacity-80">
                We&apos;re getting married
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold sm:text-5xl">
                {WEDDING.couple.bride}
                <br />
                &amp; {WEDDING.couple.groom}
              </h2>
            </CardContent>
          </BentoCard>

          {/* Date & Time Card - bottom left */}
          <BentoCard
            className="col-span-1 bg-secondary text-secondary-foreground"
            dialogTitle="Date & Time"
            dialogContent={`${formattedDate} at ${WEDDING.time} WIB`}
          >
            <CardHeader>
              <CardTitle className="text-xs font-normal tracking-widest uppercase opacity-80">
                Save the Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold sm:text-3xl">
                {date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="mt-1 text-sm font-medium">{WEDDING.time} WIB</p>
            </CardContent>
          </BentoCard>

          {/* Place Card - bottom middle */}
          <BentoCard
            className="col-span-1 bg-muted text-muted-foreground"
            dialogTitle="Venue"
            dialogContent={`${WEDDING.venue}, ${WEDDING.address}`}
          >
            <CardHeader>
              <CardTitle className="text-xs font-normal tracking-widest uppercase opacity-80">
                Venue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-foreground sm:text-xl">
                {WEDDING.venue}
              </p>
              <p className="mt-1 text-xs">{WEDDING.address}</p>
            </CardContent>
          </BentoCard>

          {/* Custom Content Card - right, spans 2 rows on desktop */}
          <BentoCard
            className="col-span-2 bg-accent text-accent-foreground sm:col-start-3 sm:row-span-2 sm:row-start-1"
            dialogTitle="Our Story"
            dialogContent="Our love story details coming soon."
          >
            <CardHeader>
              <CardTitle className="text-xs font-normal tracking-widest uppercase opacity-80">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 items-end">
              <p className="text-lg font-medium sm:text-xl">
                Join us in celebrating our special day filled with love, joy,
                and togetherness.
              </p>
            </CardContent>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
