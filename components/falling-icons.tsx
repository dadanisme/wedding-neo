import { HugeiconsIcon } from "@hugeicons/react"
import {
  FlowerIcon,
  SparklesIcon,
  StarsIcon,
  RoseIcon,
  LeafIcon,
  DiamondIcon,
} from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"

const ICONS: IconSvgElement[] = [
  FlowerIcon,
  SparklesIcon,
  StarsIcon,
  RoseIcon,
  LeafIcon,
  DiamondIcon,
]

const ITEMS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.5 + 1) % 100}%`,
  delay: `${(i * 0.7) % 8}s`,
  duration: `${6 + (i % 6)}s`,
  size: 14 + (i % 4) * 5,
  icon: ICONS[i % ICONS.length],
}))

export function FallingIcons() {
  return (
    <>
      {ITEMS.map((item) => (
        <div
          key={item.id}
          className="pointer-events-none absolute z-0 text-primary/15"
          style={{
            left: item.left,
            top: "-5%",
            animation: `fall ${item.duration} ${item.delay} linear infinite`,
          }}
        >
          <HugeiconsIcon icon={item.icon} size={item.size} strokeWidth={1.5} />
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(105svh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
