import { NextRequest, NextResponse } from "next/server"
import { adminAuth } from "@/lib/firebase-admin"

export async function verifyAuth(request: NextRequest) {
  const header = request.headers.get("Authorization")
  if (!header?.startsWith("Bearer ")) {
    return {
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    }
  }

  try {
    const token = header.split("Bearer ")[1]
    const decoded = await adminAuth.verifyIdToken(token)
    return { user: decoded }
  } catch {
    return {
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    }
  }
}
