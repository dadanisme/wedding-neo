import { adminDb } from "@/lib/firebase-admin"
import { generateSlug } from "@/lib/slug"

export type Guest = {
  id: string
  name: string
  slug: string
}

const COLLECTION = "guests"

export async function getGuestBySlug(slug: string): Promise<Guest | null> {
  const snapshot = await adminDb
    .collection(COLLECTION)
    .where("slug", "==", slug)
    .limit(1)
    .get()

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() } as Guest
}

export async function getGuestByName(name: string): Promise<Guest | null> {
  const snapshot = await adminDb
    .collection(COLLECTION)
    .where("name", "==", name.trim())
    .limit(1)
    .get()

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() } as Guest
}

export async function addGuest(
  name: string
): Promise<{ guest?: Guest; error?: string }> {
  const trimmed = name.trim()
  const existing = await getGuestByName(trimmed)
  if (existing) {
    return { error: "A guest with this name already exists" }
  }

  const slug = generateSlug(trimmed)
  const docRef = await adminDb.collection(COLLECTION).add({
    name: trimmed,
    slug,
  })
  return { guest: { id: docRef.id, name: trimmed, slug } }
}

export async function deleteGuest(id: string): Promise<void> {
  await adminDb.collection(COLLECTION).doc(id).delete()
}

export async function getAllGuests(): Promise<Guest[]> {
  const snapshot = await adminDb.collection(COLLECTION).orderBy("name").get()
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Guest[]
}
