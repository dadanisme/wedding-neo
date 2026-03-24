import { ImageResponse } from "next/og"
import { WEDDING } from "@/lib/constants"
import { getGuestBySlug } from "@/lib/guests"

export const alt = `${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName} Wedding Invitation`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const COLORS = {
  background: "#f5ece1",
  foreground: "#4a3728",
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const guest = await getGuestBySlug(slug)
  const guestName = guest?.name ?? "Guest"

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.background,
        color: COLORS.foreground,
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "64px",
          opacity: 0.7,
        }}
      >
        Dear,
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "120px",
          fontWeight: 700,
          lineHeight: 1.1,
          marginTop: "8px",
          textAlign: "center",
        }}
      >
        {guestName}
      </div>
    </div>,
    { ...size }
  )
}
