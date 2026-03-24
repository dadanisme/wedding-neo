import { HeartbreakIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { FallingIcons } from "@/components/falling-icons"

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6">
      <FallingIcons />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Giant 404 */}
        <div className="relative select-none">
          <h1
            className="flex items-center gap-2 text-center font-sans leading-none font-black text-foreground sm:gap-4"
            style={{ fontSize: "clamp(8rem, 25vw, 16rem)" }}
          >
            <span className="relative inline-block transition-transform hover:scale-110 hover:-rotate-6">
              4
            </span>
            <span className="relative inline-block">
              <span
                className="inline-flex items-center justify-center border-4 border-foreground bg-primary text-primary-foreground shadow-md transition-transform hover:scale-110 hover:rotate-12"
                style={{
                  width: "clamp(6rem, 18vw, 12rem)",
                  height: "clamp(6rem, 18vw, 12rem)",
                }}
              >
                <HugeiconsIcon
                  icon={HeartbreakIcon}
                  className="size-[clamp(3rem,9vw,6rem)]"
                  strokeWidth={2}
                />
              </span>
            </span>
            <span className="relative inline-block transition-transform hover:scale-110 hover:rotate-6">
              4
            </span>
          </h1>
        </div>

        {/* Message card */}
        <div className="w-full max-w-md border-3 border-foreground bg-card p-6 shadow-lg">
          <p className="text-center font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Page not found
          </p>
          <p className="mt-3 text-center text-lg font-medium text-foreground">
            Looks like this page wandered off
            <br />
            before the ceremony started.
          </p>
        </div>
      </div>
    </div>
  )
}
