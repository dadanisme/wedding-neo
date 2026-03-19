import { WEDDING } from "@/lib/constants"
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Call02Icon,
  CarParking01Icon,
  Clock01Icon,
  Download04Icon,
  GiftIcon,
  GoogleIcon,
  Location04Icon,
  MapsLocation01Icon,
  Navigation03Icon,
  Restaurant01Icon,
  Shirt01Icon,
} from "@hugeicons/core-free-icons"

export function VenueDialogContent() {
  const date = new Date(WEDDING.date)

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const googleCalendarUrl = (() => {
    const start = `${WEDDING.date.replace(/-/g, "")}T${WEDDING.schedule.akad.replace(":", "")}00`
    const end = `${WEDDING.date.replace(/-/g, "")}T${WEDDING.schedule.resepsi.replace(":", "")}00`
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName}'s Wedding`,
      dates: `${start}/${end}`,
      details: `Akad: ${WEDDING.schedule.akad} WIB\nResepsi: ${WEDDING.schedule.resepsi} WIB`,
      location: `${WEDDING.venue}, ${WEDDING.address}`,
    })
    return `https://calendar.google.com/calendar/render?${params.toString()}`
  })()

  const downloadIcs = () => {
    const start = `${WEDDING.date.replace(/-/g, "")}T${WEDDING.schedule.akad.replace(":", "")}00`
    const end = `${WEDDING.date.replace(/-/g, "")}T${WEDDING.schedule.resepsi.replace(":", "")}00`
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Wedding//EN",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName}'s Wedding`,
      `LOCATION:${WEDDING.venue}, ${WEDDING.address}`,
      `DESCRIPTION:Akad: ${WEDDING.schedule.akad} WIB\\nResepsi: ${WEDDING.schedule.resepsi} WIB`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n")
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "wedding.ics"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

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
              {WEDDING.venue}
            </DialogTitle>
            <DialogDescription className="text-center">
              <span className="inline-flex items-center gap-1.5 text-sm">
                <HugeiconsIcon
                  icon={Location04Icon}
                  size={14}
                  className="text-primary"
                />
                {WEDDING.address}
              </span>
            </DialogDescription>
          </DialogHeader>
        </div>
      </div>

      {/* Date info */}
      <div className="flex items-center gap-4">
        <div className="flex size-12 shrink-0 flex-col items-center justify-center border-2 border-border bg-secondary shadow-sm">
          <span className="text-[10px] leading-none font-bold text-muted-foreground uppercase">
            {date.toLocaleDateString("en-US", { month: "short" })}
          </span>
          <span className="text-lg leading-tight font-bold text-foreground">
            {date.toLocaleDateString("en-US", { day: "numeric" })}
          </span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-foreground">{formattedDate}</p>
          <p className="text-xs text-muted-foreground">{WEDDING.time} WIB</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                size="sm"
                className="cursor-pointer border-2 border-border shadow-md"
              />
            }
          >
            + Calendar
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              render={
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <HugeiconsIcon icon={GoogleIcon} size={16} />
              Google Calendar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={downloadIcs}>
              <HugeiconsIcon icon={Download04Icon} size={16} />
              Download .ics
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Practical info */}
      <div className="flex flex-col divide-y-2 divide-border border-y-2 border-border">
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={Clock01Icon}
              size={16}
              className="shrink-0 text-primary"
            />
            <span className="text-xs font-bold tracking-wider text-foreground uppercase">
              Schedule
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Akad {WEDDING.schedule.akad} &middot; Resepsi{" "}
            {WEDDING.schedule.resepsi}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={Shirt01Icon}
              size={16}
              className="shrink-0 text-primary"
            />
            <span className="text-xs font-bold tracking-wider text-foreground uppercase">
              Dress Code
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {WEDDING.dressCode}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={Restaurant01Icon}
              size={16}
              className="shrink-0 text-primary"
            />
            <span className="text-xs font-bold tracking-wider text-foreground uppercase">
              Food
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{WEDDING.food}</span>
        </div>
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={CarParking01Icon}
              size={16}
              className="shrink-0 text-primary"
            />
            <span className="text-xs font-bold tracking-wider text-foreground uppercase">
              Parking
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {WEDDING.parking}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={Call02Icon}
              size={16}
              className="shrink-0 text-primary"
            />
            <span className="text-xs font-bold tracking-wider text-foreground uppercase">
              Contact
            </span>
          </div>
          <span className="text-right text-xs text-muted-foreground">
            {WEDDING.contacts.map((c) => `${c.phone} (${c.name})`).join(" / ")}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={GiftIcon}
              size={16}
              className="shrink-0 text-primary"
            />
            <span className="text-xs font-bold tracking-wider text-foreground uppercase">
              Gift
            </span>
          </div>
          <span className="text-right text-xs text-muted-foreground">
            {WEDDING.gift.bank} {WEDDING.gift.account} a/n {WEDDING.gift.holder}
          </span>
        </div>
      </div>

      {/* Gift message */}
      <p className="text-center text-xs text-muted-foreground italic">
        &ldquo;{WEDDING.gift.message}&rdquo;
      </p>

      {/* CTA */}
      <DialogFooter>
        <Button
          nativeButton={false}
          size="lg"
          className="w-full gap-2 border-2 border-border text-sm font-bold tracking-wider uppercase shadow-md"
          render={
            <a
              href={WEDDING.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <HugeiconsIcon icon={Navigation03Icon} size={18} />
          Get Directions
        </Button>
      </DialogFooter>
    </>
  )
}
