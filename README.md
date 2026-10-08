# ActiveWear Landing Page

Front-end stack: **React 19 + TypeScript + Tailwind CSS 3** (Vite 8).

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
npm run lint
```

All styling is Tailwind utility classes. The design tokens (colors, spacing, font sizes) from DESIGN.md live in `tailwind.config.js`; `src/index.css` only holds the Tailwind directives and the icon-font class.

## Structure
- `src/App.tsx` – composes the page
- `src/components/` – Header, Hero, PerformanceDivisions (+ DivisionCard), FeaturedSpotlight, OlympicEditorial, AnatomyBento, Footer, Icon
- `src/data/` – copy/content and image URLs
