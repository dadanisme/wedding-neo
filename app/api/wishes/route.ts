import { NextRequest, NextResponse } from "next/server"
import { adminDb } from "@/lib/firebase-admin"
import { FieldValue } from "firebase-admin/firestore"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { guestSlug, message } = body

  if (!guestSlug || typeof guestSlug !== "string") {
    return NextResponse.json(
      { error: "guestSlug is required" },
      { status: 400 }
    )
  }

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "message is required" }, { status: 400 })
  }

  const trimmedMessage = message.trim()
  if (trimmedMessage.length === 0 || trimmedMessage.length > 500) {
    return NextResponse.json(
      { error: "Message must be 1-500 characters" },
      { status: 400 }
    )
  }

  // Validate guest exists
  const guestsSnapshot = await adminDb
    .collection("guests")
    .where("slug", "==", guestSlug)
    .limit(1)
    .get()

  if (guestsSnapshot.empty) {
    return NextResponse.json({ error: "Guest not found" }, { status: 404 })
  }

  const guest = guestsSnapshot.docs[0].data()

  // Upsert wish (doc ID = guestSlug)
  // Use merge so that createdAt is only set on first write
  const wishRef = adminDb.collection("wishes").doc(guestSlug)
  const existing = await wishRef.get()

  if (existing.exists) {
    // Update: preserve original createdAt
    await wishRef.update({
      guestName: guest.name,
      message: trimmedMessage,
      updatedAt: FieldValue.serverTimestamp(),
    })
  } else {
    // First write: set createdAt
    await wishRef.set({
      guestName: guest.name,
      guestSlug,
      message: trimmedMessage,
      createdAt: FieldValue.serverTimestamp(),
    })
  }

  return NextResponse.json({ success: true })
}
