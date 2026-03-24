import { NextRequest, NextResponse } from "next/server"
import { getAllGuests, addGuest, deleteGuest } from "@/lib/guests"

export async function GET() {
  const guests = await getAllGuests()
  return NextResponse.json(guests)
}

export async function POST(request: NextRequest) {
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

export async function DELETE(request: NextRequest) {
  const { id } = await request.json()
  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }
  await deleteGuest(id)
  return NextResponse.json({ success: true })
}
