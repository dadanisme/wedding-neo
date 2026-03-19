import { ImageResponse } from "next/og"
import { WEDDING } from "@/lib/constants"

export const alt = `${WEDDING.couple.bride} & ${WEDDING.couple.groom} Wedding Invitation`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const COLORS = {
  background: "#f5ece1",
  foreground: "#4a3728",
  primary: "#9e3f2a",
  secondary: "#e6d9c6",
  border: "#4a3728",
}

export default function OGImage() {
  const date = new Date(WEDDING.date)
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

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
        {/* Left: Couple card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: COLORS.primary,
            color: COLORS.background,
            border: `3px solid ${COLORS.border}`,
            boxShadow: `6px 6px 0px 0px ${COLORS.border}`,
            padding: "40px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            We are getting married
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "72px",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              <span>{WEDDING.couple.bride}</span>
              <span>& {WEDDING.couple.groom}</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                marginTop: "12px",
                opacity: 0.7,
              }}
            >
              Two hearts, one journey.
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
          {/* Date card */}
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
              Save the Date
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                fontWeight: 700,
                marginTop: "12px",
                lineHeight: 1.2,
              }}
            >
              {formattedDate}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                marginTop: "8px",
                opacity: 0.7,
              }}
            >
              {WEDDING.time} WIB
            </div>
          </div>

          {/* Venue card */}
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
              Venue
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "8px",
              }}
            >
              {WEDDING.venue}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                marginTop: "4px",
                opacity: 0.7,
              }}
            >
              {WEDDING.address}
            </div>
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  )
}
