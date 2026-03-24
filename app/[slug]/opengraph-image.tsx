import { ImageResponse } from "next/og"
import { WEDDING } from "@/lib/constants"
import { getGuestBySlug } from "@/lib/guests"

export const alt = `${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName} Wedding Invitation`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const COLORS = {
  background: "#f5ece1",
  foreground: "#4a3728",
  primary: "#9e3f2a",
  secondary: "#e6d9c6",
  border: "#4a3728",
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.background,
        position: "relative",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          backgroundImage: `linear-gradient(${COLORS.border}20 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border}20 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          padding: "60px",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Left: Invitation card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: COLORS.primary,
            color: COLORS.background,
            border: `3px solid ${COLORS.border}`,
            boxShadow: `6px 6px 0px 0px ${COLORS.border}`,
            padding: "48px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              opacity: 0.8,
            }}
          >
            You are invited
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                opacity: 0.8,
              }}
            >
              Dear,
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "56px",
                fontWeight: 700,
                lineHeight: 1.1,
                marginTop: "4px",
              }}
            >
              {guestName}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "380px",
          }}
        >
          {/* Couple card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: COLORS.secondary,
              color: COLORS.foreground,
              border: `3px solid ${COLORS.border}`,
              boxShadow: `6px 6px 0px 0px ${COLORS.border}`,
              padding: "32px",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                opacity: 0.6,
              }}
            >
              The Wedding of
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "48px",
                fontWeight: 700,
                marginTop: "12px",
                lineHeight: 1.05,
              }}
            >
              <span>{WEDDING.couple.bride.shortName}</span>
              <span>& {WEDDING.couple.groom.shortName}</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                marginTop: "12px",
                opacity: 0.7,
              }}
            >
              Two hearts, one journey.
            </div>
          </div>

          {/* Date card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: COLORS.background,
              color: COLORS.foreground,
              border: `3px solid ${COLORS.border}`,
              boxShadow: `6px 6px 0px 0px ${COLORS.border}`,
              padding: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                opacity: 0.6,
              }}
            >
              Save the Date
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "8px",
              }}
            >
              {new Date(WEDDING.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                marginTop: "4px",
                opacity: 0.7,
              }}
            >
              {WEDDING.venue}, {WEDDING.address}
            </div>
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  )
}
