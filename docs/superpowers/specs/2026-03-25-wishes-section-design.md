# Wishes Section — Design Spec

## Overview

Add a realtime "Wishes & Prayers" section below the bento grid on the invitation page. Guests can send one wish each (auto-identified by their invite link). Wishes appear in a scrollable feed with realtime updates via Firestore. The language toggle moves from inline to a floating button alongside the music player.

## Data Model

### Firestore Collection: `wishes`

```typescript
type Wish = {
  id: string           // Firestore document ID (= guestSlug)
  guestName: string    // From guest invite (e.g., "Sarah")
  guestSlug: string    // Guest's slug for deduplication
  message: string      // The wish text (max 500 chars)
  createdAt: Timestamp // Firestore server timestamp
}
```

- **One wish per guest** — enforced by using `guestSlug` as the document ID (upsert pattern). If a guest sends again, it overwrites their previous wish.
- **No moderation** — wishes appear instantly via realtime listener.
- **Message limit** — 500 character max, enforced both client-side (`maxLength` on textarea + character counter) and server-side (API route validates before writing).

## Write Path — Server-Side Validation

Wishes are **not** written directly from the client via `setDoc`. Instead, writes go through a Next.js API Route Handler that validates:

1. The `guestSlug` corresponds to a real guest in the Firestore `guests` collection (using `firebase-admin`).
2. The `message` is non-empty and at most 500 characters.
3. The `guestName` matches the guest record.

### API Route: `app/api/wishes/route.ts`

```typescript
// POST { guestSlug: string, message: string }
// → Validates slug against guests collection
// → Writes to wishes/{guestSlug} via adminDb
// → Returns the created wish
```

This prevents:
- Fake slugs creating phantom wishes
- Arbitrary field injection
- Oversized payloads

**Reads** still use the client-side Firestore SDK with `onSnapshot` for realtime updates (read-only from client).

## Components

### 1. `WishesSection` (`components/wishes-section.tsx`)

Client component. Receives `guest` (display name) and `guestSlug` props.

- **Section divider**: "Wishes & Prayers" / "Ucapan & Doa" label with decorative lines on each side.
- **Input area**: Secondary background card with:
  - Personalized label: "Send your wishes, {guest}" / "Kirim ucapanmu, {guest}" (uses `.replace("{guest}", guest)` matching existing pattern in `greeting.salutation`)
  - Textarea with placeholder and `maxLength={500}` + character counter
  - "Send Wish" / "Kirim Ucapan" submit button (primary color)
  - If the guest has already sent a wish, pre-fill the textarea with their existing message and change button to "Update Wish" / "Perbarui Ucapan"
- **Wish feed**: Scrollable list (max-height with overflow-y-auto), newest first. Each wish card shows:
  - Guest name (bold)
  - Relative timestamp in monospace (e.g., "2 min ago" / "2 menit lalu")
  - Message text

All styled with neo-brutalism: 2px borders, hard box shadows, uppercase tracking labels.

### 2. `useWishes` hook (`hooks/use-wishes.ts`)

Custom hook that:
- Sets up a Firestore `onSnapshot` realtime listener on the `wishes` collection, ordered by `createdAt` desc, with `limit(100)` to cap the feed size.
- Performs a separate `getDoc("wishes", guestSlug)` to fetch the current guest's existing wish (if any) for pre-filling the textarea. This avoids scanning the full list client-side.
- Returns `{ wishes, loading, sendWish, existingWish }`.
- `existingWish` — the current guest's wish document, fetched via direct `getDoc` by document ID.
- `sendWish(guestSlug, message)` calls `POST /api/wishes` (not direct Firestore write). The API route handles validation and writing.
- Cleans up listener on unmount.

### 3. Floating Controls (`components/floating-controls.tsx`)

**New component** that renders the shared floating bar at the bottom center of the screen. This component is **always visible** (not gated by music activation).

Composition:
- **Language toggle button**: Compact button showing `🇮🇩 ID / EN 🇬🇧`. Clicking toggles locale (same `useTranslation` hook). Always rendered.
- **Music controls**: Song selector arrow + play/mute button. Only rendered when `activated` is true (same gate as current `MusicPlayer`).

The existing `MusicPlayer` component is replaced by `FloatingControls`. The DOM structure mirrors the current `MusicPlayer`:

```
<div class="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 flex-col items-center gap-2">
  <!-- Expandable song selector panel (same as current MusicPlayer) -->
  <div class="collapsible-panel"> ... Select song dropdown ... </div>
  <!-- Button row -->
  <div class="flex gap-1.5">
    <LanguageToggleButton />   ← NEW
    <SongSelectorArrowButton /> ← from MusicPlayer
    <PlayMuteButton />          ← from MusicPlayer
  </div>
</div>
```

The language toggle button is prepended to the existing button row. The collapsible song selector panel above the buttons is preserved exactly as in the current `MusicPlayer`. When music is not yet activated, only the language toggle button renders in the button row (the music buttons and panel are hidden).

## Prop Threading — Page → Invitation → WishesSection

Currently `app/[slug]/page.tsx` only passes `guest.name` to `<Invitation>`. This must change:

```typescript
// app/[slug]/page.tsx
return <Invitation guest={guest.name} guestSlug={guest.slug} />

// components/invitation.tsx
export function Invitation({ guest, guestSlug }: { guest: string; guestSlug: string }) {
  // ...
  <WishesSection guest={guest} guestSlug={guestSlug} />
}
```

## Layout Changes to `invitation.tsx`

1. **Remove** the inline `<LanguageToggle />` and its wrapper div from the bento section.
2. **Remove** `<MusicPlayer />` — replaced by `<FloatingControls />`.
3. **Add** `<FloatingControls />` (renders language toggle + music controls).
4. **Add** `<WishesSection guest={guest} guestSlug={guestSlug} />` below the bento grid.
5. Add bottom padding (`pb-20`) to the wishes section to prevent floating controls overlap.

## i18n Additions

Add to both `en.ts` and `id.ts` dictionaries:

```typescript
wishes: {
  sectionTitle: "Wishes & Prayers" / "Ucapan & Doa",
  inputLabel: "Send your wishes, {guest}" / "Kirim ucapanmu, {guest}",
  placeholder: "Write your heartfelt wishes for the couple..." / "Tulis ucapan terbaik untuk kedua mempelai...",
  send: "Send Wish" / "Kirim Ucapan",
  update: "Update Wish" / "Perbarui Ucapan",
  empty: "Be the first to send your wishes!" / "Jadilah yang pertama mengirim ucapan!",
  timeAgo: {
    justNow: "just now" / "baru saja",
    minutesAgo: "{n} min ago" / "{n} menit lalu",
    hoursAgo: "{n} hours ago" / "{n} jam lalu",
    daysAgo: "{n} days ago" / "{n} hari lalu",
  }
}
```

All `timeAgo` values are strings with `{n}` placeholder, interpolated via `.replace("{n}", String(n))`. Plural forms use the plural string for all values (e.g., "1 hours ago" is accepted for simplicity — this is a casual wedding UI, not a formal document).

## Files to Create

- `components/wishes-section.tsx` — Main wishes UI component
- `components/floating-controls.tsx` — Shared floating bar (language + music)
- `hooks/use-wishes.ts` — Firestore realtime hook + API call for writes
- `app/api/wishes/route.ts` — Server-side validated write endpoint

## Files to Modify

- `app/[slug]/page.tsx` — Pass `guestSlug` prop to `Invitation`
- `components/invitation.tsx` — Accept `guestSlug` prop, add wishes section, remove inline language toggle, replace `MusicPlayer` with `FloatingControls`
- `components/language-toggle.tsx` — Replace the existing switch-based component entirely with a compact button variant. The current `<label>` + `<Switch>` + dual `<Image>` flags layout is removed (no remaining consumers after this change). The new component renders a single `<Button>` with `<Image>` CDN flags (same `flagcdn.com` source, same `border-border` styling) and "ID / EN" text between them. Clicking toggles `setLocale` between `"id"` and `"en"` directly. No props needed — uses `useTranslation` hook internally as before.
- `lib/i18n/en.ts` — Add wishes translations
- `lib/i18n/id.ts` — Add wishes translations
- `lib/i18n/types.ts` — Add wishes type to Dictionary

## Files to Delete

- `components/music-player.tsx` — Functionality absorbed into `floating-controls.tsx`

## Edge Cases

- **Empty state**: Show a friendly message ("Be the first to send your wishes!") when no wishes exist yet.
- **Long messages**: Enforced at 500 chars via `maxLength` on textarea, character counter in UI, and server-side validation in API route.
- **Guest without slug**: The wishes section only renders on valid guest pages (already gated by the `[slug]` route).
- **Duplicate prevention**: Using slug as document ID naturally prevents duplicates.
- **Offline**: Firestore handles offline persistence for reads. Writes via API route will fail gracefully with a toast/error message; guest can retry when online.
- **Music not activated**: Floating controls bar always renders (language toggle visible). Music buttons only appear after music is activated via the greeting dialog.
