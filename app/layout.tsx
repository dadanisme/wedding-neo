import type { Metadata } from "next"
import {
  Geist_Mono,
  Figtree,
  Poppins,
  Architects_Daughter,
  Libre_Baskerville,
  IBM_Plex_Mono,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { WEDDING } from "@/lib/constants"

const title = `${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName} — Undangan Pernikahan`
const description = `Anda diundang dengan hormat untuk merayakan pernikahan ${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName} pada ${new Date(WEDDING.date).toLocaleDateString("id-ID", { month: "long", day: "numeric", year: "numeric" })} di ${WEDDING.venue}, ${WEDDING.address}.`

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding.muhammadramdan.com"),
  title,
  description,
  keywords: [
    "undangan pernikahan",
    "wedding invitation",
    WEDDING.couple.bride.shortName,
    WEDDING.couple.groom.shortName,
    "Garut",
    WEDDING.venue,
  ],
  openGraph: {
    title,
    description,
    url: "https://wedding.muhammadramdan.com",
    siteName: title,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wedding.muhammadramdan.com",
  },
}

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Theme fonts — loaded upfront, activated via CSS variables per song
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-architects-daughter",
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable,
        poppins.variable,
        architectsDaughter.variable,
        libreBaskerville.variable,
        ibmPlexMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
