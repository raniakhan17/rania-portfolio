# Rania React Portfolio

This is a Next.js + TypeScript + Tailwind 4 + shadcn-style rebuild of the static portfolio prototype.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Project structure

```txt
app/
  page.tsx
  layout.tsx
  globals.css
components/
  Hero.tsx
  PortfolioTabs.tsx
  ProjectCard.tsx
  ProjectModal.tsx
  AboutSection.tsx
  DesignSection.tsx
  GlassCursor.tsx
  ui/
    falling-pattern.tsx
lib/
  portfolio-data.ts
  utils.ts
public/
  images/
```

## Important

The default shadcn UI component path is:

```txt
/components/ui
```

That is where `falling-pattern.tsx` lives. Keeping shadcn-style UI primitives there makes imports predictable:

```tsx
import { FallingPattern } from "@/components/ui/falling-pattern";
```

## Edit content

Most portfolio content is in:

```txt
lib/portfolio-data.ts
```

Images should go in:

```txt
public/images
```
