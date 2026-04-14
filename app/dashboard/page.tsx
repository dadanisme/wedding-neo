"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

type Guest = {
  id: string
  name: string
  slug: string
  sent?: boolean
}

const BASE_URL = "https://wedding.muhammadramdan.com"

async function authHeaders(): Promise<HeadersInit> {
  const token = await auth.currentUser?.getIdToken()
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
}

export default function DashboardPage() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [guests, setGuests] = useState<Guest[]>([])
  const [newName, setNewName] = useState("")
  const [adding, setAdding] = useState(false)
  const [addError, setAddError] = useState("")
  const [copied, setCopied] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "sent" | "unsent">("all")
  const [search, setSearch] = useState("")

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
      headers: await authHeaders(),
      body: JSON.stringify({ name: newName.trim() }),
    })
    if (!res.ok) {
      const data = await res.json()
      setAddError(data.error || "Failed to add guest")
      setAdding(false)
      return
    }
    setNewName("")
    setSearch("")
    setAdding(false)
  }

  async function handleDelete(id: string) {
    await fetch("/api/guests", {
      method: "DELETE",
      headers: await authHeaders(),
      body: JSON.stringify({ id }),
    })
  }

  function copyLink(guest: Guest) {
    navigator.clipboard.writeText(`${BASE_URL}/${guest.slug}`)
    setCopied(guest.slug)
    setTimeout(() => setCopied(null), 2000)
    if (!guest.sent) {
      toggleSent(guest.id, true)
    }
  }

  async function toggleSent(id: string, sent: boolean) {
    await fetch("/api/guests", {
      method: "PATCH",
      headers: await authHeaders(),
      body: JSON.stringify({ id, sent }),
    })
  }

  function highlightMatch(name: string) {
    if (!search.trim()) return name
    const idx = name.toLowerCase().indexOf(search.toLowerCase())
    if (idx === -1) return name
    const before = name.slice(0, idx)
    const match = name.slice(idx, idx + search.length)
    const after = name.slice(idx + search.length)
    return (
      <>
        {before}
        <mark className="rounded-sm bg-primary/30 text-inherit">{match}</mark>
        {after}
      </>
    )
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

      {/* Guest list */}
      <Card className="border-2 border-border shadow-md">
        <CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-base">
              Guests ({guests.length}) &middot;{" "}
              <span className="font-normal text-muted-foreground">
                {guests.filter((g) => g.sent).length} sent
              </span>
            </CardTitle>
            <div className="flex h-9 rounded-md border-2 border-border">
              {(["all", "sent", "unsent"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 text-sm font-medium capitalize transition-colors ${
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleAdd} className="flex items-center gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value)
                setSearch(e.target.value)
              }}
              placeholder="Search or add guest..."
              className="h-9 flex-1 rounded-md border-2 border-border bg-background px-3 text-sm outline-none focus:border-primary"
            />
            <Button
              type="submit"
              size="sm"
              disabled={adding || !newName.trim()}
            >
              {adding ? "Adding..." : "Add"}
            </Button>
          </form>
          {addError && <p className="text-sm text-destructive">{addError}</p>}
        </CardHeader>
        <CardContent>
          {guests.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No guests yet. Add one above.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {[...guests]
                .filter((g) => {
                  if (filter === "sent") return g.sent
                  if (filter === "unsent") return !g.sent
                  return true
                })
                .filter((g) =>
                  g.name.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => Number(!!a.sent) - Number(!!b.sent))
                .map((guest) => (
                  <div
                    key={guest.id}
                    className="flex items-center gap-3 rounded-md border-2 border-border p-3"
                  >
                    <Checkbox
                      checked={!!guest.sent}
                      onClick={() => toggleSent(guest.id, !guest.sent)}
                    />
                    <div className="min-w-0 flex-1">
                      <p
                        className={
                          guest.sent
                            ? "font-medium text-muted-foreground line-through"
                            : "font-medium"
                        }
                      >
                        {highlightMatch(guest.name)}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {BASE_URL}/{guest.slug}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <Button
                        variant="secondary"
                        size="xs"
                        onClick={() => copyLink(guest)}
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
