# AI Agent Guidelines (AGENTS.MD)

Welcome, AI Developer (Gemini, Claude, Copilot, etc.)! This file contains important context and guidelines for working on this project.

## Project Structure

This is a full-stack Next.js application designed to be deployed to Cloudflare Pages:
- `/frontend`: Next.js (App Router), React, TypeScript, Mantine UI, Tailwind CSS. Next.js API Routes (Route Handlers) are used for backend logic and run on the Cloudflare Edge network.

## General Directives

1. **Agent Instructions**:
   - All AI agents must update this `AGENTS.MD` file when instructed to add or modify project-wide guidelines. Do NOT update agent-specific files (e.g., `GEMINI.md`, `CLAUDE.md`); they act solely as pointers to this central document.
2. **Tech Stack Adherence**:
   - Use React Server Components where applicable. **Pages must default to Server Components.** Interactive logic, hooks, and browser APIs must be pushed down into minimal Client Components.
   - Ensure TypeScript types are strict and accurate. Define strict `Props` interfaces for all components.
   - All API routes must specify `export const runtime = 'edge';` to ensure compatibility with Cloudflare Pages.
3. **Architecture & Organization (Feature-Driven)**:
   - Move away from a flat `components/` folder structure. 
   - New components and logic must be placed in a `features/[domain-name]/` directory (e.g., `features/home/`, `features/campuses/`). This helps AI agents isolate context.
4. **Styling & UI Consistency (Mantine vs Tailwind)**:
   - For agentic UI generation moving forward: The project currently relies heavily on **Mantine UI** components (`@mantine/core`) and its styling props (e.g., `px="xl"`, `c="wood"`). 
   - **Recommendation:** Stick to Mantine layout primitives and components for consistency, but explicitly state your choice between Tailwind utility classes and Mantine props to the user when creating new designs. Do not mix both indiscriminately as it causes specificity conflicts.
5. **Code Style**:
   - Follow existing formatting and linting rules.
   - Keep components modular and functions focused. Prefer `next/image` over component library image wrappers for optimal performance.
6. **No Unprompted Destructive Changes**:
   - Do not delete major features or change the architecture without explicit user confirmation.
7. **Environment Variables**:
   - Never hardcode secrets. Use `.env.local` or environment variables (e.g., `RESEND_API_KEY`).
8. **Testing & Validation**:
   - Ensure changes do not break existing functionality. Run build commands before finalizing tasks if requested.

## Useful Commands

- Development Server: `npm run dev` (from `/frontend`)
- Build Project: `npm run build` (from `/frontend`)