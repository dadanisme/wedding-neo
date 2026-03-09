# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wedding invitation website for **Sarah & Ramdan**. Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, and TypeScript.

## Commands

- `bun dev` — start dev server (Turbopack)
- `bun run build` — production build
- `bun run lint` — run ESLint
- `bun run format` — run Prettier on all .ts/.tsx files
- `bun run typecheck` — TypeScript type checking (`tsc --noEmit`)

## Architecture

- **Next.js App Router** — pages in `app/`, uses React Server Components by default. Client components must have `"use client"` directive.
- **UI components** — shadcn/ui (base-maia style) with Base UI primitives (`@base-ui/react`). Add new components via `bunx shadcn add <component>`.
- **Styling** — Tailwind CSS v4 with CSS variables for theming (defined in `app/globals.css`). Uses `cn()` utility from `@/lib/utils` for class merging.
- **Variants** — `class-variance-authority` (cva) for component variants. Prettier sorts Tailwind classes via `prettier-plugin-tailwindcss` (configured for `cn` and `cva` functions).
- **Icons** — HugeIcons (`@hugeicons/react` + `@hugeicons/core-free-icons`)
- **Theme** — Light mode only. No dark mode support.

## Path Aliases

`@/*` maps to project root (e.g., `@/components/ui/button`, `@/lib/utils`, `@/hooks/*`).

## Code Style

- No semicolons, double quotes, 2-space indent, trailing commas (es5), 80 char print width
- ESLint: Next.js core-web-vitals + TypeScript rules
- Fonts: Figtree (sans, `--font-sans`), Geist Mono (mono, `--font-mono`)
- **Always run `bun run format` and `bun run lint` after completing work**

## Design Rules

- **Neo-brutalism style** — use shadcn components whenever possible to maintain consistency
- **Semantic colors only** — always use theme tokens (e.g., `bg-primary`, `text-muted-foreground`, `border-border`). Never hardcode colors like `bg-red-500` or `text-#fff`.
