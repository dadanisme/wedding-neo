"use client"

import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n-context"

export function GreetingDialogContent({ guest }: { guest: string }) {
  const { t } = useTranslation()

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
        <div className="relative flex flex-col items-center gap-3">
          <p className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground uppercase">
            {t.greeting.headerLabel}
          </p>
          <DialogHeader className="items-center gap-2">
            <DialogTitle className="text-center text-2xl font-bold tracking-tight">
              {t.greeting.dialogTitle.replace("{guest}", guest)}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Wedding invitation greeting
            </DialogDescription>
          </DialogHeader>
        </div>
      </div>

      {/* Quranic verse */}
      <div className="relative border-2 border-border bg-secondary p-4 shadow-sm">
        <div className="absolute top-2 left-3 font-serif text-3xl leading-none text-primary/30">
          &ldquo;
        </div>
        <blockquote className="pt-3 text-center text-sm leading-relaxed text-foreground italic">
          {t.greeting.quranicVerse}
        </blockquote>
        <p className="mt-2 text-center font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
          {t.greeting.quranicRef}
        </p>
      </div>

      {/* Narrative — poetic line breaks */}
      <div className="flex flex-col gap-0.5 text-center">
        {t.greeting.narrativeLines.map((line, i) =>
          line === "" ? (
            <div key={i} className="h-3" />
          ) : (
            <p
              key={i}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {line}
            </p>
          )
        )}
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-3">
        <div className="h-0.5 flex-1 bg-border" />
        <div className="size-2 border-2 border-primary bg-primary" />
        <div className="h-0.5 flex-1 bg-border" />
      </div>

      {/* Closing invitation */}
      <div className="flex flex-col gap-0.5 text-center">
        {t.greeting.closingLines.map((line, i) =>
          line === "" ? (
            <div key={i} className="h-3" />
          ) : (
            <p
              key={i}
              className={
                i === t.greeting.closingLines.length - 1
                  ? "text-sm leading-relaxed font-medium text-foreground"
                  : "text-sm leading-relaxed text-muted-foreground"
              }
            >
              {line}
            </p>
          )
        )}
      </div>

      {/* CTA */}
      <DialogFooter>
        <DialogClose
          render={
            <Button
              size="lg"
              className="w-full border-2 border-border text-sm font-bold tracking-wider uppercase shadow-md"
            />
          }
        >
          {t.greeting.cta}
        </DialogClose>
      </DialogFooter>
    </>
  )
}
