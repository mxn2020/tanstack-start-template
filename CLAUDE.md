# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Dev server**: `pnpm dev` - Starts Vite dev server on port 3000
- **Build**: `pnpm build` - Builds the application and runs TypeScript check
- **Start**: `pnpm start` - Starts the production server

## Architecture Overview

This is a Trello-like kanban board application built with TanStack Start (full-stack React framework). The architecture follows these key patterns:

### Core Technologies
- **TanStack Start**: Full-stack React framework with SSR
- **TanStack Router**: Type-safe file-based routing
- **TanStack Query**: Server state management with optimistic updates
- **Zod**: Schema validation and type inference
- **Tailwind CSS**: Styling
- **MSW**: Mock Service Worker for API mocking

### Application Structure

#### Data Layer (`src/db/`)
- `schema.ts`: Zod schemas for Board, Column, and Item entities with validation
- `board.ts`: Database operations and API functions

#### Query Layer (`src/queries.ts`)
- Centralized query definitions using TanStack Query
- Optimistic updates for all mutations (create/update/delete operations)
- Query invalidation strategy for real-time updates

#### Routing (`src/routes/`)
- File-based routing with TanStack Router
- `__root.tsx`: Root layout with error boundaries, loading states, and global UI
- `index.tsx`: Homepage with board list
- `boards.$boardId.tsx`: Individual board view with drag-and-drop functionality

#### Components (`src/components/`)
- Modular UI components following React patterns
- Error boundaries and loading states built-in
- Form components with validation

### Key Architectural Patterns

1. **Optimistic Updates**: All mutations immediately update the UI cache before server confirmation
2. **Type Safety**: Full TypeScript coverage with Zod schema validation
3. **Error Handling**: Global error boundaries and toast notifications
4. **SSR Integration**: TanStack Router with server-side rendering support

### State Management Strategy
- TanStack Query for server state with aggressive caching
- Optimistic updates for immediate UI feedback
- Query invalidation after mutations for data consistency
- No separate client state management library needed

### Path Aliases
- `~/`: Maps to `src/` directory via tsconfig paths

## Development Notes

- When unlocking a color card, implement a method to refresh and load/show color details without a page refresh (client-side update)