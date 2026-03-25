# Wishes Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a realtime wishes/prayers section below the bento grid, and unify the language toggle + music player into a shared floating controls bar.

**Architecture:** Wishes are stored in Firestore (`wishes` collection, doc ID = guest slug). Writes go through a Next.js API route for server-side validation. Reads use client-side `onSnapshot` for realtime updates. The floating controls bar replaces the separate music player and inline language toggle.

**Tech Stack:** Next.js 16 App Router, React 19, Firebase Firestore (client + admin), Tailwind CSS v4, shadcn/ui, HugeIcons

**Spec:** `docs/superpowers/specs/2026-03-25-wishes-section-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `hooks/use-wishes.ts` | Firestore realtime listener + API write |
| Create | `app/api/wishes/route.ts` | Server-side validated wish write endpoint |
| Create | `components/wishes-section.tsx` | Wishes UI (input + feed) |
| Create | `components/floating-controls.tsx` | Unified floating bar (language + music) |
| Modify | `lib/i18n/types.ts` | Add `wishes` type to Dictionary |
| Modify | `lib/i18n/en.ts` | Add English wishes translations |
| Modify | `lib/i18n/id.ts` | Add Indonesian wishes translations |
| Modify | `components/language-toggle.tsx` | Replace with compact button variant |
| Modify | `app/[slug]/page.tsx` | Pass `guestSlug` to Invitation |
| Modify | `components/invitation.tsx` | Wire up wishes section + floating controls |
| Delete | `components/music-player.tsx` | Absorbed into floating-controls.tsx |

---

### Task 1: Add i18n types and translations for wishes

**Files:**
- Modify: `lib/i18n/types.ts:68-77`
- Modify: `lib/i18n/en.ts:177-185`
- Modify: `lib/i18n/id.ts:175-184`

- [ ] **Step 1: Add wishes type to Dictionary**

In `lib/i18n/types.ts`, add after the `music` block (line 72) and before `langToggle`:

```typescript
  wishes: {
    sectionTitle: string
    inputLabel: string
    placeholder: string
    send: string
    update: string
    empty: string
    timeAgo: {
      justNow: string
      minutesAgo: string
      hoursAgo: string
      daysAgo: string
    }
  }
```

- [ ] **Step 2: Add English translations**

In `lib/i18n/en.ts`, add after the `music` block (line 181) and before `langToggle`:

```typescript
  wishes: {
    sectionTitle: "Wishes & Prayers",
    inputLabel: "Send your wishes, {guest}",
    placeholder: "Write your heartfelt wishes for the couple...",
    send: "Send Wish",
    update: "Update Wish",
    empty: "Be the first to send your wishes!",
    timeAgo: {
      justNow: "just now",
      minutesAgo: "{n} min ago",
      hoursAgo: "{n} hours ago",
      daysAgo: "{n} days ago",
    },
  },
```

- [ ] **Step 3: Add Indonesian translations**

In `lib/i18n/id.ts`, add after the `music` block (line 180) and before `langToggle`:

```typescript
  wishes: {
    sectionTitle: "Ucapan & Doa",
    inputLabel: "Kirim ucapanmu, {guest}",
    placeholder: "Tulis ucapan terbaik untuk kedua mempelai...",
    send: "Kirim Ucapan",
    update: "Perbarui Ucapan",
    empty: "Jadilah yang pertama mengirim ucapan!",
    timeAgo: {
      justNow: "baru saja",
      minutesAgo: "{n} menit lalu",
      hoursAgo: "{n} jam lalu",
      daysAgo: "{n} hari lalu",
    },
  },
```

- [ ] **Step 4: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors (both en.ts and id.ts satisfy the updated Dictionary type)

- [ ] **Step 5: Commit**

```bash
git add lib/i18n/types.ts lib/i18n/en.ts lib/i18n/id.ts
git commit -m "feat(i18n): add wishes section translations"
```

---

### Task 2: Create API route for wishes

**Files:**
- Create: `app/api/wishes/route.ts`

- [ ] **Step 1: Create the wishes API route**

Create `app/api/wishes/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server"
import { adminDb } from "@/lib/firebase-admin"
import { FieldValue } from "firebase-admin/firestore"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { guestSlug, message } = body

  if (!guestSlug || typeof guestSlug !== "string") {
    return NextResponse.json(
      { error: "guestSlug is required" },
      { status: 400 },
    )
  }

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "message is required" },
      { status: 400 },
    )
  }

  const trimmedMessage = message.trim()
  if (trimmedMessage.length === 0 || trimmedMessage.length > 500) {
    return NextResponse.json(
      { error: "Message must be 1-500 characters" },
      { status: 400 },
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
```

- [ ] **Step 2: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add app/api/wishes/route.ts
git commit -m "feat(api): add wishes POST endpoint with server-side validation"
```

---

### Task 3: Create useWishes hook

**Files:**
- Create: `hooks/use-wishes.ts`

- [ ] **Step 1: Create the hook**

Create `hooks/use-wishes.ts`:

```typescript
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
      limit(100),
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => {
        const raw = d.data()
        return {
          id: d.id,
          guestName: raw.guestName as string,
          guestSlug: raw.guestSlug as string,
          message: raw.message as string,
          createdAt: raw.createdAt instanceof Timestamp
            ? raw.createdAt.toDate()
            : null,
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
          createdAt: raw.createdAt instanceof Timestamp
            ? raw.createdAt.toDate()
            : null,
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
    [guestSlug],
  )

  return { wishes, loading, existingWish, sending, sendWish }
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add hooks/use-wishes.ts
git commit -m "feat: add useWishes hook with realtime listener and API write"
```

---

### Task 4: Create WishesSection component

**Files:**
- Create: `components/wishes-section.tsx`

- [ ] **Step 1: Add shadcn textarea component**

Run: `bunx --bun shadcn@latest add textarea`

- [ ] **Step 2: Create the WishesSection component**

Create `components/wishes-section.tsx`:

```tsx
"use client"

import { useState, useEffect } from "react"
import { useWishes } from "@/hooks/use-wishes"
import { useTranslation } from "@/lib/i18n-context"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function formatTimeAgo(
  date: Date | null,
  timeAgo: {
    justNow: string
    minutesAgo: string
    hoursAgo: string
    daysAgo: string
  },
): string {
  if (!date) return ""
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMin < 1) return timeAgo.justNow
  if (diffMin < 60) return timeAgo.minutesAgo.replace("{n}", String(diffMin))
  if (diffHours < 24)
    return timeAgo.hoursAgo.replace("{n}", String(diffHours))
  return timeAgo.daysAgo.replace("{n}", String(diffDays))
}

export function WishesSection({
  guest,
  guestSlug,
}: {
  guest: string
  guestSlug: string
}) {
  const { t } = useTranslation()
  const { wishes, loading, existingWish, sending, sendWish } =
    useWishes(guestSlug)
  const [message, setMessage] = useState("")
  const [hasEdited, setHasEdited] = useState(false)

  // Pre-fill with existing wish
  useEffect(() => {
    if (existingWish && !hasEdited) {
      setMessage(existingWish.message)
    }
  }, [existingWish, hasEdited])

  const handleSubmit = async () => {
    if (!message.trim()) return
    await sendWish(message.trim())
    setHasEdited(false)
  }

  const isUpdate = !!existingWish
  const inputLabel = t.wishes.inputLabel.replace("{guest}", guest)

  return (
    <div className="flex flex-col gap-4">
      {/* Section divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border opacity-20" />
        <span className="text-[9px] font-bold tracking-[2px] text-muted-foreground uppercase">
          {t.wishes.sectionTitle}
        </span>
        <div className="h-px flex-1 bg-border opacity-20" />
      </div>

      {/* Input area */}
      <div className="flex flex-col gap-3 border-2 border-border bg-secondary p-4 shadow-md">
        <p className="text-[11px] font-bold tracking-[1.5px] text-muted-foreground uppercase">
          {inputLabel}
        </p>
        <Textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            setHasEdited(true)
          }}
          placeholder={t.wishes.placeholder}
          maxLength={500}
          className="min-h-[72px] resize-none border-2 border-border bg-background"
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {message.length}/500
          </span>
          <Button
            onClick={handleSubmit}
            disabled={!message.trim() || sending}
            className="border-2 border-border text-[13px] font-bold tracking-[1px] uppercase shadow-md"
          >
            {sending
              ? "..."
              : isUpdate
                ? t.wishes.update
                : t.wishes.send}
          </Button>
        </div>
      </div>

      {/* Wish feed */}
      {loading ? (
        <div className="py-8 text-center text-sm text-muted-foreground">
          ...
        </div>
      ) : wishes.length === 0 ? (
        <div className="py-8 text-center text-sm text-muted-foreground">
          {t.wishes.empty}
        </div>
      ) : (
        <div className="flex max-h-80 flex-col gap-3 overflow-y-auto pr-1">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="flex flex-col gap-1.5 border-2 border-border bg-background p-3.5 shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold">{wish.guestName}</span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {formatTimeAgo(wish.createdAt, t.wishes.timeAgo)}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{wish.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add components/ui/textarea.tsx components/wishes-section.tsx
git commit -m "feat: add WishesSection component with input and realtime feed"
```

---

### Task 5: Rewrite LanguageToggle as compact button

**Files:**
- Modify: `components/language-toggle.tsx` (full rewrite)

- [ ] **Step 1: Rewrite LanguageToggle**

Replace the entire content of `components/language-toggle.tsx`:

```tsx
"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation()

  return (
    <Button
      size="sm"
      variant="outline"
      className="h-10 gap-1.5 border-2 border-border px-3 text-[11px] font-bold tracking-[1px] shadow-md"
      onClick={() => setLocale(locale === "id" ? "en" : "id")}
    >
      <Image
        src="https://flagcdn.com/id.svg"
        alt="Indonesian"
        width={16}
        height={12}
        unoptimized
        className="h-3 w-4 border border-border object-cover"
      />
      <span>ID / EN</span>
      <Image
        src="https://flagcdn.com/gb.svg"
        alt="English"
        width={16}
        height={12}
        unoptimized
        className="h-3 w-4 border border-border object-cover"
      />
    </Button>
  )
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add components/language-toggle.tsx
git commit -m "refactor: rewrite LanguageToggle as compact floating button"
```

---

### Task 6: Create FloatingControls component

**Files:**
- Create: `components/floating-controls.tsx`

- [ ] **Step 1: Create FloatingControls**

Create `components/floating-controls.tsx`. This merges the MusicPlayer functionality with the LanguageToggle into a unified floating bar:

```tsx
"use client"

import { useState } from "react"
import { useMusic, MUSIC_TRACKS } from "@/lib/music-context"
import { useTranslation } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MusicNote03Icon,
  MuteIcon,
  ArrowDown01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons"
import { LanguageToggle } from "@/components/language-toggle"

export function FloatingControls() {
  const { playing, activated, toggle, track, setTrack } = useMusic()
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
      {/* Expandable song selector panel — only when music is activated */}
      {activated && (
        <div
          className={`flex w-56 origin-bottom flex-col gap-2 border-2 border-border bg-background p-3 shadow-lg transition-all duration-300 ease-out ${
            expanded
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }`}
        >
          <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
            {t.music.selectSong}
          </p>
          <Select
            value={track}
            onValueChange={(v) => {
              if (v) setTrack(v)
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                {(value) => MUSIC_TRACKS.find((m) => m.id === value)?.label}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {MUSIC_TRACKS.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Button row */}
      <div className="flex gap-1.5">
        <LanguageToggle />
        {activated && (
          <>
            <Button
              size="icon"
              variant="outline"
              className="size-10 border-2 border-border shadow-md"
              onClick={() => setExpanded(!expanded)}
            >
              <HugeiconsIcon
                icon={expanded ? ArrowDown01Icon : ArrowUp01Icon}
                size={18}
              />
            </Button>
            <Button
              size="icon"
              variant={playing ? "default" : "outline"}
              className="size-10 border-2 border-border shadow-md"
              onClick={toggle}
            >
              <HugeiconsIcon
                icon={playing ? MusicNote03Icon : MuteIcon}
                size={18}
              />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `bun run typecheck`
Expected: May have errors since invitation.tsx still imports MusicPlayer — that's fixed in Task 7.

- [ ] **Step 3: Commit**

```bash
git add components/floating-controls.tsx
git commit -m "feat: add FloatingControls with unified language toggle + music"
```

---

### Task 7: Wire everything into the invitation page

**Files:**
- Modify: `app/[slug]/page.tsx:43`
- Modify: `components/invitation.tsx:17-23,101,114-228`
- Delete: `components/music-player.tsx`

- [ ] **Step 1: Pass guestSlug from page to Invitation**

In `app/[slug]/page.tsx`, change line 43 from:

```tsx
return <Invitation guest={guest.name} />
```

to:

```tsx
return <Invitation guest={guest.name} guestSlug={guest.slug} />
```

- [ ] **Step 2: Update Invitation component**

In `components/invitation.tsx`:

a) Update imports — remove `LanguageToggle` and `MusicPlayer`, add `FloatingControls` and `WishesSection`:

Replace:
```tsx
import { LanguageToggle } from "@/components/language-toggle"
import { FallingIcons } from "@/components/falling-icons"
import { MusicPlayer } from "@/components/music-player"
```

With:
```tsx
import { FallingIcons } from "@/components/falling-icons"
import { FloatingControls } from "@/components/floating-controls"
import { WishesSection } from "@/components/wishes-section"
```

b) Update the Invitation function signature (line 101):

Replace:
```tsx
export function Invitation({ guest }: { guest: string }) {
```

With:
```tsx
export function Invitation({
  guest,
  guestSlug,
}: {
  guest: string
  guestSlug: string
}) {
```

c) Replace `<MusicPlayer />` (line 117) with `<FloatingControls />`:

Replace:
```tsx
<MusicPlayer />
```

With:
```tsx
<FloatingControls />
```

d) Replace the language toggle block and add wishes section. Replace the entire block (lines 222-225):

```tsx
        {/* Language Toggle */}
        <div className="flex justify-center pb-20">
          <LanguageToggle />
        </div>
```

With:
```tsx
        {/* Wishes Section */}
        <WishesSection guest={guest} guestSlug={guestSlug} />

        {/* Bottom spacer for floating controls */}
        <div className="pb-20" />
```

- [ ] **Step 3: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors

- [ ] **Step 4: Verify the dev server runs**

Run: `bun dev` and open `http://localhost:3000/<any-valid-slug>` in browser.
Expected: Page renders with wishes section below bento grid, floating controls at bottom with language toggle.

- [ ] **Step 5: Delete the old MusicPlayer**

```bash
git rm components/music-player.tsx
```

- [ ] **Step 6: Run format and lint**

Run: `bun run format && bun run lint`
Expected: No errors

- [ ] **Step 7: Commit (atomic — delete + rewiring together)**

```bash
git add app/[slug]/page.tsx components/invitation.tsx
git commit -m "feat: wire wishes section and floating controls into invitation page"
```

---

### Task 8: Final cleanup and verification

- [ ] **Step 1: Run full typecheck, lint, and format**

```bash
bun run typecheck && bun run lint && bun run format
```

Expected: All pass with no errors.

- [ ] **Step 2: Run production build**

```bash
bun run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Manual test in browser**

Open the invitation page in a browser and verify:
1. Wishes section appears below bento grid
2. Section divider shows "Wishes & Prayers" / "Ucapan & Doa" based on locale
3. Input area shows personalized label with guest name
4. Can type a message and submit
5. Wish appears in the feed in realtime
6. Submitting again updates the existing wish (button says "Update Wish")
7. Character counter works (shows x/500)
8. Floating controls bar at bottom shows language toggle
9. Language toggle switches locale
10. Music controls appear after clicking "Let's Go" in greeting dialog
11. Song selector expands/collapses
12. Empty state message shows when no wishes exist

- [ ] **Step 4: Final commit if any fixes needed**

```bash
bun run format
git add -A
git commit -m "chore: final cleanup for wishes section feature"
```
