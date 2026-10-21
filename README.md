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
- `src/components/LandingPage/LandingPage.tsx` – page composition
- `src/components/LandingPage/*/index.tsx` – one readable implementation per page section, with closely related subcomponents kept together
- `src/components/LandingPage/*/data.ts` and `types.ts` – section-specific content and types
- `src/components/LandingPage/shared/` – genuinely shared layout, icon, status, and image helpers
- `src/components/BrowsePage/` – catalog page: header, category tabs, filter sidebar, product grid
- `src/components/BrowsePage/hooks/useCatalogFilters.ts` – filter state + `GET /api/products` query string
- `src/lib/useHashRoute.ts` – `#/shop` switch between the landing page and the catalog
