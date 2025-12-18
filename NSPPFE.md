# NSFEPP - Nigerian School on Fusion Energy & Plasma Physics

## Overview

This is a modern, responsive web application for the Nigerian School on Fusion Energy and Plasma Physics (NSFEPP). The application serves as an educational platform to showcase credibility, highlight past events and activities, and promote fusion science research and capacity building in Africa.

The design philosophy emphasizes a scientific, credible, modern, and clean aesthetic that is Africa-forward while maintaining global professional standards. The visual approach is inspired by major scientific institutions like CERN, ITER, and NASA science pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, bundled using Vite
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and visual effects
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Design**: RESTful endpoints under `/api/*` prefix
- **Development**: Vite dev server with HMR integration for seamless development experience
- **Production**: Static file serving from built assets

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit for database schema management
- **Current Storage**: In-memory storage implementation (`MemStorage`) with seeded event data, designed to be replaced with database storage

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/   # UI components (About, Hero, Events, etc.)
│       ├── data/         # Type definitions (Event interface)
│       ├── pages/        # Page-level components
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer with seeded events
│   └── static.ts     # Static file serving
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema definitions (events, contact messages)
└── attached_assets/  # Static assets and generated images
```

### API Endpoints
- `GET /api/events` - Returns all events
- `GET /api/events/:id` - Returns a specific event
- `GET /api/images/:type` - Serves images (hero, workshop, facility, conference, lab)
- `POST /api/contact` - Submits a contact form message

### Recent Changes
- Added backend API for events with in-memory storage
- Implemented contact form with Zod validation
- Connected frontend components to backend APIs
- Added error handling and loading states for data fetching

### Key Design Patterns
- **Separation of Concerns**: Clear boundary between client, server, and shared code
- **Type Safety**: Full TypeScript across the stack with shared types
- **Component Composition**: shadcn/ui pattern of composable, accessible components
- **Mobile-First**: Responsive design with Tailwind breakpoints

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database queries and schema management

### UI Component Libraries
- **Radix UI**: Accessible, unstyled component primitives (dialogs, tooltips, tabs, etc.)
- **Embla Carousel**: Touch-friendly carousel/slider functionality
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (social media icons)

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation (shared between client and server)
- **@hookform/resolvers**: Zod integration with React Hook Form

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first styling
- **PostCSS/Autoprefixer**: CSS processing

### Fonts
- Google Fonts: Inter, DM Sans, Geist Mono, Fira Code (loaded via CDN)