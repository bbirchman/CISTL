# AI Agent Guidelines (AGENTS.MD)

Welcome, AI Developer (Gemini, Claude, Copilot, etc.)! This file contains important context and guidelines for working on this project.

## Project Structure

This is a full-stack Next.js application designed to be deployed to Cloudflare Pages:
- `/frontend`: Next.js (App Router), React, TypeScript, Mantine UI, Tailwind CSS. Next.js API Routes (Route Handlers) are used for backend logic and run on the Cloudflare Edge network.

## General Directives

1. **Agent Instructions**:
   - All AI agents must update this `AGENTS.MD` file when instructed to add or modify project-wide guidelines. Do NOT update agent-specific files (e.g., `GEMINI.md`, `CLAUDE.md`); they act solely as pointers to this central document.
2. **Tech Stack Adherence**:
   - Use React Server Components where applicable. 
   - Ensure TypeScript types are strict and accurate.
   - All API routes must specify `export const runtime = 'edge';` to ensure compatibility with Cloudflare Pages.
3. **Code Style**:
   - Follow existing formatting and linting rules.
   - Keep components modular and functions focused.
4. **No Unprompted Destructive Changes**:
   - Do not delete major features or change the architecture without explicit user confirmation.
5. **Environment Variables**:
   - Never hardcode secrets. Use `.env.local` or environment variables (e.g., `RESEND_API_KEY`).
6. **Testing & Validation**:
   - Ensure changes do not break existing functionality. Run build commands before finalizing tasks if requested.

## Useful Commands

- Development Server: `npm run dev` (from `/frontend`)
- Build Project: `npm run build` (from `/frontend`)