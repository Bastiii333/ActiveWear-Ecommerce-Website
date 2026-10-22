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

## DOM debug hooks

Chrome DevTools hooks follow one convention across both pages. They are display-only: no styling, state or behavior reads them.

- `id` – page roots, unique sections and one-off controls. Kebab-case, unique per rendered page, prefixed with the page or shared area: `landing-hero`, `browse-filter-sidebar`, `site-header`. The existing `#featured-spotlight` anchor is kept unchanged because the hero CTA links to it.
- `data-component="PascalCase"` – root element of a component. Repeated components (`ProductCard`, `DivisionCard`) share the same value and never get duplicate IDs.
- `data-element="kebab-case"` – notable children inside a component that are otherwise hard to find in the Elements panel. Repeated items (`category-tab`, `product-swatch`) share the value.

Do not use IDs for Tailwind styling, and do not label every node: add a hook only where it identifies a section, a component root or a control you would actually inspect.

