"use client"

import { useEffect, useState, useCallback } from "react"
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  doc,
  getDoc,
  Timestamp,
} from "firebase/firestore"
import { db } from "@/lib/firebase"

export type Wish = {
  id: string
  guestName: string
  guestSlug: string
  message: string
  createdAt: Date | null
}

export function useWishes(guestSlug: string) {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [loading, setLoading] = useState(true)
  const [existingWish, setExistingWish] = useState<Wish | null>(null)
  const [sending, setSending] = useState(false)

  // Realtime listener for all wishes
  useEffect(() => {
    const q = query(
      collection(db, "wishes"),
      orderBy("createdAt", "desc"),
      limit(100)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => {
        const raw = d.data()
        return {
          id: d.id,
          guestName: raw.guestName as string,
          guestSlug: raw.guestSlug as string,
          message: raw.message as string,
          createdAt:
            raw.createdAt instanceof Timestamp ? raw.createdAt.toDate() : null,
        } satisfies Wish
      })
      setWishes(data)
      setLoading(false)

      // Update existing wish from the feed
      const mine = data.find((w) => w.guestSlug === guestSlug)
      setExistingWish(mine ?? null)
    })

    return () => unsubscribe()
  }, [guestSlug])

  // Fetch current guest's existing wish on mount
  useEffect(() => {
    async function fetchExisting() {
      const docRef = doc(db, "wishes", guestSlug)
      const snap = await getDoc(docRef)
      if (snap.exists()) {
        const raw = snap.data()
        setExistingWish({
          id: snap.id,
          guestName: raw.guestName as string,
          guestSlug: raw.guestSlug as string,
          message: raw.message as string,
          createdAt:
            raw.createdAt instanceof Timestamp ? raw.createdAt.toDate() : null,
        })
      }
    }
    fetchExisting()
  }, [guestSlug])

  const sendWish = useCallback(
    async (message: string) => {
      setSending(true)
      try {
        const res = await fetch("/api/wishes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ guestSlug, message }),
        })
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || "Failed to send wish")
        }
      } finally {
        setSending(false)
      }
    },
    [guestSlug]
  )

  return { wishes, loading, existingWish, sending, sendWish }
}
