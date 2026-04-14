import { NextRequest, NextResponse } from "next/server"
import {
  getAllGuests,
  addGuest,
  deleteGuest,
  updateGuestSent,
} from "@/lib/guests"
import { verifyAuth } from "@/lib/auth"

export async function GET(request: NextRequest) {
  const auth = await verifyAuth(request)
  if (auth.error) return auth.error

  const guests = await getAllGuests()
  return NextResponse.json(guests)
}

export async function POST(request: NextRequest) {
  const auth = await verifyAuth(request)
  if (auth.error) return auth.error

  const { name } = await request.json()
  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Name is required" }, { status: 400 })
  }
  const result = await addGuest(name)
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 409 })
  }
  return NextResponse.json(result.guest)
}

export async function PATCH(request: NextRequest) {
  const auth = await verifyAuth(request)
  if (auth.error) return auth.error

  const { id, sent } = await request.json()
  if (!id || typeof id !== "string" || typeof sent !== "boolean") {
    return NextResponse.json(
      { error: "ID and sent status are required" },
      { status: 400 }
    )
  }
  await updateGuestSent(id, sent)
  return NextResponse.json({ success: true })
}

export async function DELETE(request: NextRequest) {
  const auth = await verifyAuth(request)
  if (auth.error) return auth.error

  const { id } = await request.json()
  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }
  await deleteGuest(id)
  return NextResponse.json({ success: true })
}
