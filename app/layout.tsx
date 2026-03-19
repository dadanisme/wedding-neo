import type { Metadata } from "next"
import { Geist_Mono, Figtree } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { WEDDING } from "@/lib/constants"

const title = `${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName} — Wedding Invitation`
const description = `You are cordially invited to celebrate the wedding of ${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName} on ${new Date(WEDDING.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} at ${WEDDING.venue}, ${WEDDING.address}.`

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding.muhammadramdan.com"),
  title,
  description,
  keywords: [
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
    locale: "en_US",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
