# Rukun Al Zuhab Trading Co - Project Context

## Project Overview
This project is the official web application for **Rukun Al Zuhab Trading Co**, a leading trading company based in Saudi Arabia (established in 1999). The company specializes in the procurement and distribution of building materials, hardware, safety equipment, and electrical supplies.

The application is a high-performance, responsive website designed to showcase the company's extensive product catalog and professional services.

## Tech Stack
- **Framework:** [Next.js 16.2.4](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with OKLCH color support
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **AI Integration:** [AI SDK](https://sdk.vercel.ai/docs) (Anthropic & React AI)
- **Animations:** `tw-animate-css`

## Project Structure
```text
src/
├── app/              # Next.js App Router (pages and layouts)
│   ├── about/        # Company information
│   ├── contact/      # Contact forms and details
│   ├── products/     # Product catalog (filtered by category)
│   ├── services/     # Service offerings
│   ├── globals.css   # Global styles and Tailwind configuration
│   └── layout.tsx    # Root layout with Header/Footer
├── components/       # React components
│   ├── ui/           # Reusable Shadcn UI components
│   ├── header.tsx    # Navigation and brand logo
│   └── footer.tsx    # Links, contact info, and newsletter
├── lib/              # Utility functions (e.g., cn helper)
└── public/           # Static assets (images, logo, Excel catalog)
```

## Key Commands
- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Production Start:** `npm run start`
- **Linting:** `npm run lint`

## Development Conventions

### Styling & Design System
- **Colors:** Uses custom OKLCH variables defined in `src/app/globals.css`. 
  - **Primary:** Deep Navy Blue (`--navy`)
  - **Accent:** Premium Gold (`--gold`)
- **Typography:** Uses Geist Sans for body and headings.
- **Responsiveness:** Standard Tailwind container (`max-w-7xl`) and responsive grids.

### Components
- Prefer functional components with TypeScript interfaces for props.
- Use the `cn` utility from `@/lib/utils` for conditional class merging.
- Follow Shadcn UI patterns for building new UI elements.

### Data Management
- Product and service data are currently stored as static arrays within their respective page components (`src/app/products/page.tsx`, `src/app/services/page.tsx`).
- A "Showroom Available Items List.xlsx" exists in `public/` as a reference for the full catalog.

### AI Features
- The project includes `@ai-sdk/anthropic`, indicating capabilities for AI-driven features (e.g., smart product search or customer support), though these are in the early stages or hidden behind future updates.

## Roadmap / TODOs
- [ ] Implement dynamic data fetching for the product catalog from the provided Excel sheet or a CMS.
- [ ] Complete the Ticket Support and Help Center pages under `/support`.
- [ ] Implement the Contact form submission logic.
- [ ] Integrate AI SDK for enhanced product discovery or automated quotes.
