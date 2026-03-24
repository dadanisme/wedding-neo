"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Guest = {
  id: string
  name: string
  slug: string
}

const BASE_URL = "https://wedding.muhammadramdan.com"

export default function DashboardPage() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [guests, setGuests] = useState<Guest[]>([])
  const [newName, setNewName] = useState("")
  const [adding, setAdding] = useState(false)
  const [addError, setAddError] = useState("")
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    let unsubSnapshot: (() => void) | undefined

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
        const q = query(collection(db, "guests"), orderBy("name"))
        unsubSnapshot = onSnapshot(q, (snapshot) => {
          setGuests(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })) as Guest[]
          )
        })
      } else {
        router.push("/dashboard/login")
      }
      setLoading(false)
    })

    return () => {
      unsubAuth()
      unsubSnapshot?.()
    }
  }, [router])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!newName.trim()) return
    setAdding(true)
    setAddError("")
    const res = await fetch("/api/guests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim() }),
    })
    if (!res.ok) {
      const data = await res.json()
      setAddError(data.error || "Failed to add guest")
      setAdding(false)
      return
    }
    setNewName("")
    setAdding(false)
  }

  async function handleDelete(id: string) {
    await fetch("/api/guests", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
  }

  function copyLink(slug: string) {
    navigator.clipboard.writeText(`${BASE_URL}/${slug}`)
    setCopied(slug)
    setTimeout(() => setCopied(null), 2000)
  }

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!authenticated) return null

  return (
    <div className="mx-auto min-h-svh max-w-2xl p-4 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Guest List</h1>
        <Button variant="outline" size="sm" onClick={() => signOut(auth)}>
          Sign out
        </Button>
      </div>

      {/* Add guest form */}
      <Card className="mb-6 border-2 border-border shadow-md">
        <CardHeader>
          <CardTitle className="text-base">Add Guest</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdd} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Guest name"
                className="h-9 flex-1 rounded-md border-2 border-border bg-background px-3 text-sm outline-none focus:border-primary"
                required
              />
              <Button type="submit" disabled={adding}>
                {adding ? "Adding..." : "Add"}
              </Button>
            </div>
            {addError && <p className="text-sm text-destructive">{addError}</p>}
          </form>
        </CardContent>
      </Card>

      {/* Guest list */}
      <Card className="border-2 border-border shadow-md">
        <CardHeader>
          <CardTitle className="text-base">Guests ({guests.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {guests.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No guests yet. Add one above.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {guests.map((guest) => (
                <div
                  key={guest.id}
                  className="flex items-center justify-between gap-2 rounded-md border-2 border-border p-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{guest.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {BASE_URL}/{guest.slug}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Button
                      variant="secondary"
                      size="xs"
                      onClick={() => copyLink(guest.slug)}
                    >
                      {copied === guest.slug ? "Copied!" : "Copy"}
                    </Button>
                    <Button
                      variant="destructive"
                      size="xs"
                      onClick={() => handleDelete(guest.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
