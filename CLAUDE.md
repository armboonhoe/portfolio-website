# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Next.js dev server
- `npm run build` — Production build (TypeScript errors are ignored via `next.config.mjs`)
- `npm run lint` — Run ESLint
- `npm start` — Serve production build

## Architecture

Single-page portfolio site built with **Next.js 16** (App Router) + **shadcn/ui** (new-york style) + **Tailwind CSS v4**.

### Page structure

`app/page.tsx` renders all sections in order: Navbar → Hero → About → Skills → Experience → Projects → Contact → Footer. Each section is a standalone component in `components/`.

### Key files

- `app/layout.tsx` — Root layout with Inter + JetBrains Mono fonts (via `next/font`), Vercel Analytics
- `app/api/contact/route.ts` — Contact form POST handler using **Resend** (`RESEND_API_KEY` env var)
- `app/globals.css` — Tailwind v4 setup with oklch CSS variable theming (light/dark)
- `components/ui/` — shadcn/ui primitives (do not edit directly unless customizing)
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

### Conventions

- Path alias: `@/*` maps to project root
- Icons: `lucide-react`
- No theme provider wired up currently (dark mode tokens exist in CSS but no toggle)
- Images are unoptimized (`images.unoptimized: true` in next config)

### Environment

- `RESEND_API_KEY` — Required for the contact form API route
