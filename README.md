*Lead, excellent refinements.* Updating the `README.md` to reflect Bun and editing Issue #1 to explicitly state `bun create next-app` keeps our documentation and GitHub issue tracker synchronized with our actual tech stack decisions.

Here is how to execute both updates.

---

## Step 1: Update `README.md` (Bun)

Save the following as your project's `README.md`:

````markdown
# Software & IT Engineering Portfolio

A high-performance, responsive single-page portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Bun**.

The architecture follows strict **Static Site Generation (SSG)** principles to achieve fast load times with zero database dependencies.

---

# 📐 Architecture & System Design Blueprint

## Phase 1: Requirements Engineering

### Core Identity

- **Role:** Software & IT Engineer (Information Technology Graduate)

### Target Audience

- Technical Recruiters
- Engineering Leads
- Freelance & Startup Clients

### Functional Requirements

- Dynamic, placeholder-first project showcase
- Categorized technical skills matrix
- One-click downloadable PDF résumé
- Contact form with client-side state handling

### Non-Functional Requirements

- Sub-1s First Contentful Paint (target)
- 100/100 Lighthouse goals
- WCAG 2.1 AA accessibility
- Keyboard navigation support
- Static deployment with zero database dependencies

---

## Phase 2: Information Architecture & Data Schema

Content is decoupled from UI components and stored in structured JSON files under `src/content/`.

### Content Files

- `projects.json` — Project catalog with placeholder support
- `skills.json` — Categorized technical skills
- `experience.json` — Academic and professional experience

### Sitemap

```text
/
├── #hero
├── #about
├── #skills
├── #projects
└── #contact

/resume.pdf
```

---

## Phase 3: Component Architecture & Design System

### Design Language

A spatial glassmorphism aesthetic inspired by Apple's visionOS featuring translucent glass cards over soft gradient backgrounds.

### Typography

- **Primary:** Inter or SF Pro
- **Monospace:** JetBrains Mono or SF Mono

### Color System

#### Light Mode

- Canvas: `bg-slate-50`
- Cards: `bg-white/40`
- Borders: `border-white/50`
- Blur: `backdrop-blur-2xl`

#### Dark Mode

- Canvas: `bg-neutral-950`
- Cards: `bg-black/40`
- Borders: `border-white/10`
- Blur: `backdrop-blur-2xl`

### Component Hierarchy

```text
App Layout (layout.tsx)
├── Header
│   ├── Brand Logo
│   ├── Navigation
│   └── Theme Toggle
│
├── Hero
├── SkillsSection
├── ProjectsSection
│   └── ProjectCard
└── ContactSection
    └── ContactForm
```

---

## Phase 4: Technology Stack

| Layer | Technology |
| ------ | ---------- |
| Runtime & Package Manager | Bun |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Forms | Web3Forms / Formspree / Resend |
| Hosting | Vercel or Cloudflare Pages |
| CI/CD | GitHub Actions |

---

## Phase 5: Repository Structure

```text
portfolio/
├── .github/
│   └── workflows/
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── assets/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── content/
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── experience.json
│   └── lib/
│       └── types.ts
├── tailwind.config.js
└── tsconfig.json
```

---

# 🛠 Local Development

## Clone the Repository

```bash
git clone https://github.com/sora960/portfolio-ultimate.git
cd portfolio-ultimate
bun install
```

## Start the Development Server

```bash
bun dev
```

Visit:

```text
http://localhost:3000
```

---

## Production Build

```bash
bun run build
```

This generates the production build and verifies that the application compiles successfully.

---

# 📄 License

Distributed under the **MIT License**.