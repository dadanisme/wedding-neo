import { notFound } from "next/navigation"
import { getGuestBySlug } from "@/lib/guests"
import { WEDDING } from "@/lib/constants"
import { Invitation } from "@/components/invitation"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const guest = await getGuestBySlug(slug)
  if (!guest) return {}

  const title = `${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName} — Undangan Pernikahan`
  const description = `Dear ${guest.name}, Anda diundang dengan hormat untuk merayakan pernikahan ${WEDDING.couple.bride.shortName} & ${WEDDING.couple.groom.shortName}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://wedding.muhammadramdan.com/${slug}`,
      siteName: title,
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  }
}

export default async function InvitationPage({ params }: Props) {
  const { slug } = await params
  const guest = await getGuestBySlug(slug)

  if (!guest) notFound()

  return <Invitation guest={guest.name} />
}
