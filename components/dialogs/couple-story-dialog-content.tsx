import { WEDDING } from "@/lib/constants"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function CoupleStoryDialogContent() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">
          {WEDDING.couple.bride} & {WEDDING.couple.groom}
        </DialogTitle>
        <DialogDescription>Two hearts, one journey.</DialogDescription>
      </DialogHeader>

      {/* Timeline */}
      <div className="relative flex flex-col gap-6 pl-6">
        <div className="absolute top-1 bottom-1 left-[7px] w-0.5 bg-border" />

        <div className="relative">
          <div className="absolute top-1 -left-6 size-3.5 border-2 border-primary bg-background" />
          <p className="text-xs font-bold tracking-wider text-primary uppercase">
            First Met
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            What started as a chance encounter quickly became something neither
            of us expected.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1 -left-6 size-3.5 border-2 border-primary bg-background" />
          <p className="text-xs font-bold tracking-wider text-primary uppercase">
            Falling in Love
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Through late-night conversations and shared dreams, we knew this was
            something real.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1 -left-6 size-3.5 border-2 border-primary bg-primary" />
          <p className="text-xs font-bold tracking-wider text-primary uppercase">
            Forever Begins
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            And now we invite you to witness the next chapter of our story.
          </p>
        </div>
      </div>
    </>
  )
}
