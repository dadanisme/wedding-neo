import type { MusicTrack } from "./music-context"

type ThemeVariables = Record<string, string>

/**
 * All CSS custom properties that themes can override.
 * Used to clear previous theme before applying a new one.
 */
export const THEME_PROPERTIES = [
  "--background",
  "--foreground",
  "--card",
  "--card-foreground",
  "--popover",
  "--popover-foreground",
  "--primary",
  "--primary-foreground",
  "--secondary",
  "--secondary-foreground",
  "--muted",
  "--muted-foreground",
  "--accent",
  "--accent-foreground",
  "--destructive",
  "--destructive-foreground",
  "--border",
  "--input",
  "--ring",
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
  "--chart-5",
  "--radius",
  "--sidebar",
  "--sidebar-foreground",
  "--sidebar-primary",
  "--sidebar-primary-foreground",
  "--sidebar-accent",
  "--sidebar-accent-foreground",
  "--sidebar-border",
  "--sidebar-ring",
  "--ff-sans",
  "--ff-serif",
  "--ff-mono",
  "--shadow-color",
  "--shadow-opacity",
  "--shadow-blur",
  "--shadow-spread",
  "--shadow-offset-x",
  "--shadow-offset-y",
  "--shadow-2xs",
  "--shadow-xs",
  "--shadow-sm",
  "--shadow",
  "--shadow-md",
  "--shadow-lg",
  "--shadow-xl",
  "--shadow-2xl",
  "--tracking-normal",
] as const

/**
 * Theme definitions per music track.
 * "alicia" is empty — it uses the CSS defaults in globals.css.
 */
export const TRACK_THEMES: Record<MusicTrack, ThemeVariables> = {
  // ── Alicia: default neo-brutalism (no overrides needed) ──
  alicia: {},

  // ── Last Dive: dark neo-brutalism (cool ocean tones) ──
  "last-dive": {
    "--background": "oklch(0.16 0.02 250)",
    "--foreground": "oklch(0.90 0.02 220)",
    "--card": "oklch(0.28 0.03 245)",
    "--card-foreground": "oklch(0.90 0.02 220)",
    "--popover": "oklch(0.28 0.03 245)",
    "--popover-foreground": "oklch(0.90 0.02 220)",
    "--primary": "oklch(0.78 0.14 220)",
    "--primary-foreground": "oklch(0.16 0.02 250)",
    "--secondary": "oklch(0.28 0.03 240)",
    "--secondary-foreground": "oklch(0.90 0.02 220)",
    "--muted": "oklch(0.24 0.02 245)",
    "--muted-foreground": "oklch(0.65 0.03 220)",
    "--accent": "oklch(0.50 0.08 200)",
    "--accent-foreground": "oklch(0.90 0.02 220)",
    "--destructive": "oklch(0.55 0.14 25)",
    "--destructive-foreground": "oklch(0.95 0.01 220)",
    "--border": "oklch(0.38 0.03 240)",
    "--input": "oklch(0.38 0.03 240)",
    "--ring": "oklch(0.78 0.14 220)",
    "--chart-1": "oklch(0.78 0.14 220)",
    "--chart-2": "oklch(0.45 0.06 200)",
    "--chart-3": "oklch(0.60 0.08 190)",
    "--chart-4": "oklch(0.40 0.05 260)",
    "--chart-5": "oklch(0.50 0.12 25)",
    "--sidebar": "oklch(0.20 0.02 245)",
    "--sidebar-foreground": "oklch(0.90 0.02 220)",
    "--sidebar-primary": "oklch(0.78 0.14 220)",
    "--sidebar-primary-foreground": "oklch(0.16 0.02 250)",
    "--sidebar-accent": "oklch(0.50 0.08 200)",
    "--sidebar-accent-foreground": "oklch(0.90 0.02 220)",
    "--sidebar-border": "oklch(0.38 0.03 240)",
    "--sidebar-ring": "oklch(0.78 0.14 220)",
    "--shadow-2xs": "4px 4px 0px 0px hsl(0 0% 0% / 0.50)",
    "--shadow-xs": "4px 4px 0px 0px hsl(0 0% 0% / 0.50)",
    "--shadow-sm":
      "4px 4px 0px 0px hsl(0 0% 0% / 0.70), 4px 1px 2px -1px hsl(0 0% 0% / 0.70)",
    "--shadow":
      "4px 4px 0px 0px hsl(0 0% 0% / 0.70), 4px 1px 2px -1px hsl(0 0% 0% / 0.70)",
    "--shadow-md":
      "4px 4px 0px 0px hsl(0 0% 0% / 0.70), 4px 2px 4px -1px hsl(0 0% 0% / 0.70)",
    "--shadow-lg":
      "4px 4px 0px 0px hsl(0 0% 0% / 0.70), 4px 4px 6px -1px hsl(0 0% 0% / 0.70)",
    "--shadow-xl":
      "4px 4px 0px 0px hsl(0 0% 0% / 0.70), 4px 8px 10px -1px hsl(0 0% 0% / 0.70)",
    "--shadow-2xl": "4px 4px 0px 0px hsl(0 0% 0% / 0.90)",
  },

  // ── Mikrokosmos: elegant luxury ──
  mikrokosmos: {
    "--background": "oklch(0.9779 0.0042 56.3756)",
    "--foreground": "oklch(0.2178 0 0)",
    "--card": "oklch(0.9779 0.0042 56.3756)",
    "--card-foreground": "oklch(0.2178 0 0)",
    "--popover": "oklch(0.9779 0.0042 56.3756)",
    "--popover-foreground": "oklch(0.2178 0 0)",
    "--primary": "oklch(0.4650 0.1470 24.9381)",
    "--primary-foreground": "oklch(1.0000 0 0)",
    "--secondary": "oklch(0.9625 0.0385 89.0943)",
    "--secondary-foreground": "oklch(0.4847 0.1022 75.1153)",
    "--muted": "oklch(0.9431 0.0068 53.4442)",
    "--muted-foreground": "oklch(0.4444 0.0096 73.6390)",
    "--accent": "oklch(0.9619 0.0580 95.6174)",
    "--accent-foreground": "oklch(0.3958 0.1331 25.7230)",
    "--destructive": "oklch(0.4437 0.1613 26.8994)",
    "--destructive-foreground": "oklch(1.0000 0 0)",
    "--border": "oklch(0.9355 0.0324 80.9937)",
    "--input": "oklch(0.9355 0.0324 80.9937)",
    "--ring": "oklch(0.4650 0.1470 24.9381)",
    "--chart-1": "oklch(0.5054 0.1905 27.5181)",
    "--chart-2": "oklch(0.4650 0.1470 24.9381)",
    "--chart-3": "oklch(0.3958 0.1331 25.7230)",
    "--chart-4": "oklch(0.5553 0.1455 48.9975)",
    "--chart-5": "oklch(0.4732 0.1247 46.2007)",
    "--radius": "0.375rem",
    "--sidebar": "oklch(0.9431 0.0068 53.4442)",
    "--sidebar-foreground": "oklch(0.2178 0 0)",
    "--sidebar-primary": "oklch(0.4650 0.1470 24.9381)",
    "--sidebar-primary-foreground": "oklch(1.0000 0 0)",
    "--sidebar-accent": "oklch(0.9619 0.0580 95.6174)",
    "--sidebar-accent-foreground": "oklch(0.3958 0.1331 25.7230)",
    "--sidebar-border": "oklch(0.9355 0.0324 80.9937)",
    "--sidebar-ring": "oklch(0.4650 0.1470 24.9381)",
    "--ff-sans": "var(--font-poppins)",
    "--ff-serif": "var(--font-libre-baskerville)",
    "--ff-mono": "var(--font-ibm-plex-mono)",
    "--shadow-2xs": "1px 1px 16px -2px hsl(0 63% 18% / 0.06)",
    "--shadow-xs": "1px 1px 16px -2px hsl(0 63% 18% / 0.06)",
    "--shadow-sm":
      "1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12)",
    "--shadow":
      "1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12)",
    "--shadow-md":
      "1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 2px 4px -3px hsl(0 63% 18% / 0.12)",
    "--shadow-lg":
      "1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 4px 6px -3px hsl(0 63% 18% / 0.12)",
    "--shadow-xl":
      "1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 8px 10px -3px hsl(0 63% 18% / 0.12)",
    "--shadow-2xl": "1px 1px 16px -2px hsl(0 63% 18% / 0.30)",
    "--tracking-normal": "0em",
  },

  // ── Canon: notebook ──
  canon: {
    "--background": "oklch(0.9821 0 0)",
    "--foreground": "oklch(0.3485 0 0)",
    "--card": "oklch(1.0000 0 0)",
    "--card-foreground": "oklch(0.3485 0 0)",
    "--popover": "oklch(1.0000 0 0)",
    "--popover-foreground": "oklch(0.3485 0 0)",
    "--primary": "oklch(0.4891 0 0)",
    "--primary-foreground": "oklch(0.9551 0 0)",
    "--secondary": "oklch(0.9006 0 0)",
    "--secondary-foreground": "oklch(0.3485 0 0)",
    "--muted": "oklch(0.9158 0 0)",
    "--muted-foreground": "oklch(0.4313 0 0)",
    "--accent": "oklch(0.9354 0.0456 94.8549)",
    "--accent-foreground": "oklch(0.4015 0.0436 37.9587)",
    "--destructive": "oklch(0.6627 0.0978 20.0041)",
    "--destructive-foreground": "oklch(1.0000 0 0)",
    "--border": "oklch(0.5538 0.0025 17.2320)",
    "--input": "oklch(1.0000 0 0)",
    "--ring": "oklch(0.7058 0 0)",
    "--chart-1": "oklch(0.3211 0 0)",
    "--chart-2": "oklch(0.4495 0 0)",
    "--chart-3": "oklch(0.5693 0 0)",
    "--chart-4": "oklch(0.6830 0 0)",
    "--chart-5": "oklch(0.7921 0 0)",
    "--radius": "0.625rem",
    "--sidebar": "oklch(0.9551 0 0)",
    "--sidebar-foreground": "oklch(0.3485 0 0)",
    "--sidebar-primary": "oklch(0.4891 0 0)",
    "--sidebar-primary-foreground": "oklch(0.9551 0 0)",
    "--sidebar-accent": "oklch(0.9354 0.0456 94.8549)",
    "--sidebar-accent-foreground": "oklch(0.4015 0.0436 37.9587)",
    "--sidebar-border": "oklch(0.8078 0 0)",
    "--sidebar-ring": "oklch(0.7058 0 0)",
    "--ff-sans": "var(--font-architects-daughter)",
    "--ff-serif": "'Times New Roman', Times, serif",
    "--ff-mono": "'Courier New', Courier, monospace",
    "--shadow-2xs": "1px 4px 5px 0px hsl(0 0% 0% / 0.01)",
    "--shadow-xs": "1px 4px 5px 0px hsl(0 0% 0% / 0.01)",
    "--shadow-sm":
      "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03)",
    "--shadow":
      "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03)",
    "--shadow-md":
      "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 2px 4px -1px hsl(0 0% 0% / 0.03)",
    "--shadow-lg":
      "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 4px 6px -1px hsl(0 0% 0% / 0.03)",
    "--shadow-xl":
      "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 8px 10px -1px hsl(0 0% 0% / 0.03)",
    "--shadow-2xl": "1px 4px 5px 0px hsl(0 0% 0% / 0.07)",
    "--tracking-normal": "0.5px",
  },
}

/**
 * Apply a theme by setting CSS custom properties on :root.
 * Clears all previous overrides first, then applies the new theme.
 */
export function applyTheme(track: MusicTrack) {
  const root = document.documentElement
  const theme = TRACK_THEMES[track]

  // Enable smooth transition
  root.classList.add("theme-transitioning")

  // Clear all previous inline theme overrides
  for (const prop of THEME_PROPERTIES) {
    root.style.removeProperty(prop)
  }

  // Apply new theme overrides
  for (const [prop, value] of Object.entries(theme)) {
    root.style.setProperty(prop, value)
  }

  // Remove transition class after animation completes
  setTimeout(() => {
    root.classList.remove("theme-transitioning")
  }, 600)
}
