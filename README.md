# TanStack Start Template

A production-ready template for building full-stack React applications with TanStack Start, featuring a dual-branch setup for development and testing.

## 🚀 Features

- **TanStack Start**: Full-stack React framework with SSR
- **TanStack Router**: Type-safe file-based routing
- **TanStack Query**: Server state management with optimistic updates
- **Zod**: Schema validation and type inference
- **Tailwind CSS v4**: Modern styling with CSS variables
- **TypeScript**: Full type safety
- **MSW**: Mock Service Worker for API development
- **Dual React Setup**: React 19 for development, React 18 for testing

## 📁 Project Structure

```
├── src/
│   ├── components/         # Reusable UI components
│   ├── db/                # Data schemas and operations
│   ├── routes/            # File-based routing
│   ├── styles/            # Global styles and Tailwind
│   └── queries.ts         # Centralized TanStack Query definitions
├── .tanstack/             # Build outputs (gitignored)
└── README.md
```

## 🔧 Quick Start

### Using This Template

1. **Create from template**:
   ```bash
   gh repo create my-new-project --template mxn2020/tanstack-start-template
   cd my-new-project
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start development**:
   ```bash
   pnpm dev
   ```

### Development Workflow

- **Main branch**: React 19 for development
- **Test branch**: React 18 with comprehensive test suite via worktree

## 📊 Available Scripts

### Main Branch (Development)
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
```

### Test Branch (Testing)
```bash
pnpm test            # Run tests
pnpm test:ui         # Run tests with UI
pnpm test:coverage   # Run tests with coverage
```

## 🧪 Testing Setup

The template includes a separate test worktree with:

- **Vitest**: Fast unit test runner
- **Testing Library**: React component testing
- **jsdom**: Browser environment simulation
- **MSW**: API mocking for tests
- **Coverage reporting**: v8 provider

### Setting Up Test Environment

The test branch is automatically configured when using this template. To work with tests:

```bash
# Switch to test worktree (if exists)
cd ../project-name-test

# Or create test worktree manually
git worktree add ../project-name-test test
```

## 🏗️ Architecture

### Key Patterns

1. **Optimistic Updates**: All mutations update UI immediately
2. **Type Safety**: Full TypeScript with Zod validation
3. **Error Handling**: Global boundaries and toast notifications
4. **SSR Ready**: Server-side rendering support

### Data Flow

```
UI Components → TanStack Query → API Layer → Zod Validation
     ↑              ↓
Optimistic Cache ← MSW (Dev/Test)
```

### State Management

- **Server State**: TanStack Query with aggressive caching
- **Form State**: React Hook Form (when needed)
- **UI State**: React useState/useReducer
- **No global client state library needed**

## 📚 Key Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 19.x (main), 18.x (test) |
| TanStack Start | Full-stack framework | Latest |
| TanStack Router | Routing | Latest |
| TanStack Query | Server state | Latest |
| TypeScript | Type safety | 5.x |
| Tailwind CSS | Styling | 4.x |
| Zod | Validation | 4.x |
| Vite | Build tool | 7.x |
| Vitest | Testing | 2.x |

## 🔄 Git Workflow

The template supports a dual-branch workflow:

1. **Development** (main branch):
   - React 19
   - Latest dependencies
   - Focus on features

2. **Testing** (test branch):
   - React 18 compatibility
   - Comprehensive test suite
   - Pull changes from main for testing

### Syncing Changes

```bash
# In test branch/worktree
git pull origin main     # Pull latest changes
pnpm install            # Update dependencies
pnpm test               # Run test suite
```

## 🎯 Best Practices

### Component Architecture
- Keep components small and focused
- Use TypeScript for all components
- Implement proper error boundaries
- Follow React best practices

### State Management
- Use TanStack Query for server state
- Implement optimistic updates for mutations
- Cache aggressively, invalidate strategically
- Use Zod schemas for data validation

### Testing Strategy
- Unit tests for utilities and hooks
- Component tests for UI logic
- Integration tests for user flows
- Mock external dependencies with MSW

## 🚀 Deployment

The template is ready for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- Any Node.js hosting platform

Build command: `pnpm build`
Output directory: `.tanstack/start/build`

## 📖 Learn More

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [Tailwind CSS v4 Docs](https://tailwindcss.com)

## 📄 License

MIT License - feel free to use this template for your projects.

---

**Happy coding!** 🎉