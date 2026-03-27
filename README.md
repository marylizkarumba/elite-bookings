# Getting Started with React (Vite) + TailwindCSS – Building a Premium Multi-Service Booking Website

## 1. Title & Objective

**Technology Chosen:** React (via Vite), TailwindCSS, TypeScript, Framer Motion

**Why React + Vite?**
React is the most widely adopted frontend library for building dynamic, component-based user interfaces. Vite was chosen as the build tool for its lightning-fast hot module replacement (HMR) and optimized development experience compared to traditional bundlers like Webpack. TailwindCSS enables rapid UI development with utility-first classes, and Framer Motion adds smooth, premium animations.

**End Goal:**
Build a fully functional, visually stunning, multi-service booking website with a dark-mode luxury aesthetic — featuring a 6-step booking flow, service selection, pricing tiers, portfolio gallery, and contact functionality.

---

## 2. Quick Summary of the Technology

### React
React is a declarative, component-based JavaScript library for building user interfaces. Developed by Meta, it allows developers to create reusable UI components that efficiently update when data changes using a virtual DOM.

- **What is it?** A frontend JavaScript library for building interactive UIs.
- **Where is it used?** Web applications, single-page apps (SPAs), dashboards, e-commerce sites.
- **Real-world example:** Facebook, Instagram, Airbnb, and Netflix all use React in production.

### TailwindCSS
TailwindCSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup without writing custom CSS.

- **What is it?** A utility-first CSS framework for rapid UI development.
- **Where is it used?** Modern web applications requiring custom, responsive designs.
- **Real-world example:** Shopify, GitHub, and Vercel use TailwindCSS.

### Vite
Vite is a next-generation frontend build tool that offers instant server start and fast HMR.

### Framer Motion
A production-ready animation library for React that makes creating complex animations simple and performant.

---

## 3. System Requirements

| Requirement | Details |
|---|---|
| **OS** | Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+) |
| **Node.js** | v18.0.0 or higher |
| **Package Manager** | npm (v9+), bun, or pnpm |
| **Editor** | VS Code (recommended) with extensions: ES7+ React Snippets, Tailwind CSS IntelliSense, Prettier |
| **Browser** | Chrome, Firefox, or Edge (latest versions) |
| **Git** | v2.30+ for version control |

### Key npm Packages

```
react, react-dom, react-router-dom
tailwindcss, postcss, autoprefixer
framer-motion
typescript
@vitejs/plugin-react-swc
lucide-react (icons)
shadcn/ui components (@radix-ui/*)
```

---

## 4. Installation & Setup Instructions

### Step 1: Create the Vite + React Project

```bash
# Create a new Vite project with React and TypeScript
npm create vite@latest my-booking-site -- --template react-ts

# Navigate into the project
cd my-booking-site

# Install dependencies
npm install
```

### Step 2: Install TailwindCSS

```bash
# Install Tailwind and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind config
npx tailwindcss init -p
```

### Step 3: Configure Tailwind (`tailwind.config.ts`)

```ts
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Custom colors, fonts, animations go here
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

### Step 4: Add Tailwind Directives to CSS (`src/index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Install Additional Dependencies

```bash
# Routing
npm install react-router-dom

# Animations
npm install framer-motion

# Icons
npm install lucide-react

# UI Components (shadcn/ui)
npx shadcn-ui@latest init
```

### Step 6: Start the Development Server

```bash
npm run dev
# App runs at http://localhost:5173
```

---

## 5. Minimal Working Example

### What it does:
A simple React component styled with TailwindCSS that renders a service card with hover animations using Framer Motion.

```tsx
// src/components/ServiceCard.tsx
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

const ServiceCard = () => {
  return (
    // Framer Motion wrapper for hover animation
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 
                 rounded-lg p-6 cursor-pointer"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/20 
                      flex items-center justify-center mb-4">
        <Monitor className="w-6 h-6 text-primary" />
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-display font-bold text-foreground mb-2">
        IT Support
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm">
        Professional tech support for your business needs.
      </p>

      {/* Price */}
      <p className="text-primary font-bold mt-4">From R500</p>
    </motion.div>
  );
};

export default ServiceCard;
```

### Expected Output:
A dark-themed card with glassmorphism styling, a blue icon, service title, description, and price. On hover, the card smoothly scales up by 5%.

---

## 6. AI Prompt Journal

### Prompt 1: Initial Project Scaffold

**Prompt used:**
> "Build a modern, premium, multi-service booking website using React. The website represents a personal brand offering IT Support, Website Development, Deejaying, Social Media Management, and Graphic Design. Create a visually stunning, high-converting corporate website with dark mode, neon accents, glassmorphism, and Framer Motion animations."

**AI Response Summary:**
The AI scaffolded the entire project structure including:
- Landing page with hero section, services overview, testimonials, and CTA
- Services page with pricing tiers (Basic/Standard/Premium)
- 6-step booking flow with progress bar and live summary sidebar
- Portfolio page with filterable gallery
- About and Contact pages
- Full design system with CSS custom properties and Tailwind config

**Evaluation:** Extremely helpful — generated a production-ready codebase with consistent design tokens, responsive layouts, and proper component architecture in a single prompt.

### Prompt 2: Documentation Generation

**Prompt used:**
> "Generate the README.md following a specific toolkit document format with sections for Title & Objective, Quick Summary, System Requirements, Installation, Minimal Working Example, AI Prompt Journal, Common Issues, and References."

**AI Response Summary:**
Generated comprehensive documentation following the exact format specified.

**Evaluation:** Helpful for structuring project documentation in an academic/portfolio format.

---

## 7. Common Issues & Fixes

### Issue 1: TailwindCSS Classes Not Applying

**Problem:** Tailwind utility classes render but styles don't appear.

**Fix:** Ensure the `content` array in `tailwind.config.ts` includes all file paths:
```ts
content: ["./src/**/*.{ts,tsx}", "./index.html"]
```

**Reference:** [TailwindCSS Content Configuration](https://tailwindcss.com/docs/content-configuration)

### Issue 2: Framer Motion Hydration Warnings

**Problem:** Console warnings about motion components during development.

**Fix:** This is expected in development mode with React StrictMode. Wrap motion components properly and ensure `key` props are set on animated lists.

### Issue 3: React Router Blank Page on Refresh

**Problem:** Refreshing on a sub-route (e.g., `/services`) shows a blank page.

**Fix:** Configure the dev server to redirect all routes to `index.html`:
```ts
// vite.config.ts
server: {
  host: "::",
  port: 8080,
}
```
For production, configure your hosting provider's rewrite rules.

**Reference:** [React Router Docs](https://reactrouter.com/en/main)

### Issue 4: Dark Mode Flickering

**Problem:** Brief flash of light theme on page load.

**Fix:** Add the `dark` class to the `<html>` element in `index.html` and use CSS custom properties for theming rather than Tailwind's `dark:` variant.

### Issue 5: Import Path Aliases Not Resolving

**Problem:** `@/components/...` imports fail.

**Fix:** Configure both `tsconfig.json` and `vite.config.ts`:
```ts
// vite.config.ts
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}
```

---

## 8. References

### Official Documentation
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### UI Component Libraries
- [shadcn/ui](https://ui.shadcn.com/) — Re-usable components built with Radix UI and TailwindCSS
- [Radix UI Primitives](https://www.radix-ui.com/) — Unstyled, accessible UI primitives
- [Lucide Icons](https://lucide.dev/) — Beautiful & consistent icon set

### Video Tutorials
- [React Full Course 2024 – freeCodeCamp](https://www.youtube.com/watch?v=CgkZ7MvWUAA)
- [TailwindCSS Crash Course – Traversy Media](https://www.youtube.com/watch?v=dFgzHOX84xQ)
- [Framer Motion Tutorial – The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i)

### Helpful Articles
- [Vite vs Create React App](https://blog.logrocket.com/vite-vs-create-react-app/)
- [Building a Design System with Tailwind](https://www.smashingmagazine.com/2022/05/design-system-tailwindcss/)
- [Dark Mode with TailwindCSS](https://tailwindcss.com/docs/dark-mode)

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Navbar.tsx       # Sticky navigation bar
│   ├── HeroSection.tsx  # Landing page hero
│   ├── ServicesOverview.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── CTABanner.tsx
│   ├── Footer.tsx
│   └── NavLink.tsx
├── pages/               # Route-level page components
│   ├── Index.tsx         # Landing page
│   ├── ServicesPage.tsx  # Services + pricing
│   ├── BookingPage.tsx   # 6-step booking flow
│   ├── PortfolioPage.tsx # Portfolio gallery
│   ├── AboutPage.tsx     # About page
│   ├── ContactPage.tsx   # Contact form
│   └── NotFound.tsx      # 404 page
├── lib/                  # Utilities and data
│   ├── services-data.ts  # Service definitions & pricing
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── App.tsx               # Root component with routing
├── index.css             # Design system tokens & global styles
└── main.tsx              # Entry point
```

---

*Built with ❤️ using React, Vite, TailwindCSS, and Framer Motion*
