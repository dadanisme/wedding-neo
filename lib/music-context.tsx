"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { applyTheme } from "./themes"

export type MusicTrack = "alicia" | "last-dive" | "mikrokosmos" | "canon"

export const MUSIC_TRACKS: { id: MusicTrack; label: string }[] = [
  { id: "alicia", label: "Alicia" },
  { id: "last-dive", label: "Last Dive" },
  { id: "mikrokosmos", label: "방탄소년단 소우주 (Mikrokosmos)" },
  { id: "canon", label: "Canon in D" },
]

type MusicContextValue = {
  enabled: boolean
  setEnabled: (v: boolean) => void
  track: MusicTrack
  setTrack: (t: MusicTrack) => void
  playing: boolean
  activated: boolean
  play: () => void
  pause: () => void
  toggle: () => void
}

const MusicContext = createContext<MusicContextValue | null>(null)

const STORAGE_KEY_TRACK = "wedding-music-track"
const STORAGE_KEY_ENABLED = "wedding-music-enabled"

function getNextTrack(current: MusicTrack): MusicTrack {
  const idx = MUSIC_TRACKS.findIndex((t) => t.id === current)
  return MUSIC_TRACKS[(idx + 1) % MUSIC_TRACKS.length].id
}

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabledState] = useState(true)
  const [track, setTrackState] = useState<MusicTrack>("alicia")
  const [playing, setPlaying] = useState(false)
  const [activated, setActivated] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Hydrate from localStorage
  useEffect(() => {
    const storedTrack = localStorage.getItem(STORAGE_KEY_TRACK)
    if (
      storedTrack === "alicia" ||
      storedTrack === "last-dive" ||
      storedTrack === "mikrokosmos" ||
      storedTrack === "canon"
    ) {
      setTrackState(storedTrack)
    }
    const storedEnabled = localStorage.getItem(STORAGE_KEY_ENABLED)
    if (storedEnabled === "false") {
      setEnabledState(false)
    }
  }, [])

  // Apply theme whenever track changes
  useEffect(() => {
    applyTheme(track)
  }, [track])

  const setEnabled = useCallback((v: boolean) => {
    setEnabledState(v)
    localStorage.setItem(STORAGE_KEY_ENABLED, String(v))
  }, [])

  const setTrack = useCallback((t: MusicTrack) => {
    setTrackState(t)
    localStorage.setItem(STORAGE_KEY_TRACK, t)
  }, [])

  // Manage audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.volume = 0.4
    }
    const audio = audioRef.current

    // Auto-advance to next song when current one ends
    const handleEnded = () => {
      const next = getNextTrack(track)
      setTrack(next)
      audio.src = `/music/${next}.mp3`
      audio.play().catch(() => {})
    }

    audio.addEventListener("ended", handleEnded)
    audio.src = `/music/${track}.mp3`

    // If it was playing, restart with new track
    if (playing) {
      audio.play().catch(() => {})
    }

    return () => {
      audio.removeEventListener("ended", handleEnded)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track])

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`/music/${track}.mp3`)
      audioRef.current.volume = 0.4
    }
    audioRef.current.play().catch(() => {})
    setPlaying(true)
    setActivated(true)
  }, [track])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setPlaying(false)
  }, [])

  const toggle = useCallback(() => {
    if (playing) {
      pause()
    } else {
      play()
    }
  }, [playing, play, pause])

  // Pause when disabled
  useEffect(() => {
    if (!enabled && playing) {
      pause()
    }
  }, [enabled, playing, pause])

  return (
    <MusicContext
      value={{
        enabled,
        setEnabled,
        track,
        setTrack,
        playing,
        activated,
        play,
        pause,
        toggle,
      }}
    >
      {children}
    </MusicContext>
  )
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error("useMusic must be used within MusicProvider")
  return ctx
}
