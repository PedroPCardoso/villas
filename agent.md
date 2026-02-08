# Villas Locações - Project Documentation & Guidelines

> **Project Name:** Villas Locações
> **Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS
> **Backend Strategy:** NestJS (Future Implementation)

## 1. Project Overview
This project is a fleet inspection and rental management system. It is currently a frontend-focused application migrated from a legacy Vite+React codebase to **Next.js**.

The architecture is designed to support two distinct user experiences:
1.  **Admin Portal (Desktop-first):** Comprehensive management dashboard for admins.
2.  **Client Portal (Mobile-first):** App-like experience for drivers and customers.

## 2. Directory Structure

### `src/` (Core Application)
- **`app/`**: Next.js App Router structure.
  - `(public)`: Public marketing pages (Landing, Catalog).
  - `admin/`: Protected admin routes.
  - `cliente/`: Protected client routes (Mobile layout).
- **`components/`**:
  - `ui/`: Reusable atomic components (Buttons, Inputs).
  - `layout/`: Structural components (Sidebar, Headers).
  - `features/`: Business-logic heavy components (Charts, Forms).
- **`lib/`**: Utilities and API clients.
  - `api.ts`: Centralized API abstraction layer.
- **`types/`**: TypeScript interfaces and types.
- **`constants/`**: Mock data and configuration constants.

### `backend/` (Future NestJS)
- Reserved structure for the future Node.js/NestJS backend.
- Contains `README.md` with module planning.

### `legacy-vite/` (Archive)
- Contains the original Vite source code for reference.
- **Do not edit or import from this directory.**

## 3. Technology Stack & Key Decisions

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (v3/v4).
  - Primary Color: `#A32A2A` (Villas Red).
  - Fonts: `Inter` (UI) and `Chakra Petch` (Brand/Logo).
- **Icons:** Material Symbols Outlined (via Google Fonts).
- **Charts:** Recharts.
- **Images:** `next/image` with domain configuration for external providers.

## 4. Development Guidelines

### 4.1. Coding Standards
- **Components:** Functional components with strict TypeScript typing.
  - Use `React.FC` or strict props typing.
  - mark client components with `'use client'` at the very top.
- **Naming:**
  - Files/Components: `PascalCase.tsx`
  - Functions/Variables: `camelCase`
  - Constants: `UPPER_SNAKE_CASE`
- **Imports:** Use absolute imports `@/` configured in `tsconfig.json`.

### 4.2. API & Data Fetching
- **Current State:** The app uses mock data (`src/constants/mock-data.ts`).
- **Future State:** All data access must go through `src/lib/api.ts`.
- **Migration Rule:** When connecting the backend, replace mock returns in `api.ts` with real `fetch` / `axios` calls without changing component logic.

### 4.3. Branding
- **Logo:** Always use `/assets/logo.png`.
  - **Do not** use raw SVGs or external URLs for the logo.
- **Favicon:** Configured in `app/layout.tsx` metadata.

## 5. Deployment
- **Platform:** Vercel.
- **Build:** `npm run build`.
- **Issues:** If build fails on TypeScript errors in `legacy-vite`, ensure it is excluded in `tsconfig.json`.

## 6. Git Workflow
- **Main Branch:** `main`
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`).
