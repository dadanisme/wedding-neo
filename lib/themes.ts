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

  // ── Mikrokosmos: purple modern ──
  mikrokosmos: {
    "--background": "oklch(0.9730 0.0133 286.1503)",
    "--foreground": "oklch(0.3015 0.0572 282.4176)",
    "--card": "oklch(1.0000 0 0)",
    "--card-foreground": "oklch(0.3015 0.0572 282.4176)",
    "--popover": "oklch(1.0000 0 0)",
    "--popover-foreground": "oklch(0.3015 0.0572 282.4176)",
    "--primary": "oklch(0.5417 0.1790 288.0332)",
    "--primary-foreground": "oklch(1.0000 0 0)",
    "--secondary": "oklch(0.9174 0.0435 292.6901)",
    "--secondary-foreground": "oklch(0.4143 0.1039 288.1742)",
    "--muted": "oklch(0.9580 0.0133 286.1454)",
    "--muted-foreground": "oklch(0.5426 0.0465 284.7435)",
    "--accent": "oklch(0.9221 0.0373 262.1410)",
    "--accent-foreground": "oklch(0.3015 0.0572 282.4176)",
    "--destructive": "oklch(0.6861 0.2061 14.9941)",
    "--destructive-foreground": "oklch(1.0000 0 0)",
    "--border": "oklch(0.9115 0.0216 285.9625)",
    "--input": "oklch(0.9115 0.0216 285.9625)",
    "--ring": "oklch(0.5417 0.1790 288.0332)",
    "--chart-1": "oklch(0.5417 0.1790 288.0332)",
    "--chart-2": "oklch(0.7042 0.1602 288.9880)",
    "--chart-3": "oklch(0.5679 0.2113 276.7065)",
    "--chart-4": "oklch(0.6356 0.1922 281.8054)",
    "--chart-5": "oklch(0.4509 0.1758 279.3838)",
    "--radius": "0.5rem",
    "--sidebar": "oklch(0.9580 0.0133 286.1454)",
    "--sidebar-foreground": "oklch(0.3015 0.0572 282.4176)",
    "--sidebar-primary": "oklch(0.5417 0.1790 288.0332)",
    "--sidebar-primary-foreground": "oklch(1.0000 0 0)",
    "--sidebar-accent": "oklch(0.9221 0.0373 262.1410)",
    "--sidebar-accent-foreground": "oklch(0.3015 0.0572 282.4176)",
    "--sidebar-border": "oklch(0.9115 0.0216 285.9625)",
    "--sidebar-ring": "oklch(0.5417 0.1790 288.0332)",
    "--ff-sans": "var(--font-inter)",
    "--ff-serif": "Georgia, serif",
    "--ff-mono": "var(--font-jetbrains-mono)",
    "--shadow-2xs": "0px 4px 10px 0px hsl(240 30% 25% / 0.06)",
    "--shadow-xs": "0px 4px 10px 0px hsl(240 30% 25% / 0.06)",
    "--shadow-sm":
      "0px 4px 10px 0px hsl(240 30% 25% / 0.12), 0px 1px 2px -1px hsl(240 30% 25% / 0.12)",
    "--shadow":
      "0px 4px 10px 0px hsl(240 30% 25% / 0.12), 0px 1px 2px -1px hsl(240 30% 25% / 0.12)",
    "--shadow-md":
      "0px 4px 10px 0px hsl(240 30% 25% / 0.12), 0px 2px 4px -1px hsl(240 30% 25% / 0.12)",
    "--shadow-lg":
      "0px 4px 10px 0px hsl(240 30% 25% / 0.12), 0px 4px 6px -1px hsl(240 30% 25% / 0.12)",
    "--shadow-xl":
      "0px 4px 10px 0px hsl(240 30% 25% / 0.12), 0px 8px 10px -1px hsl(240 30% 25% / 0.12)",
    "--shadow-2xl": "0px 4px 10px 0px hsl(240 30% 25% / 0.30)",
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
