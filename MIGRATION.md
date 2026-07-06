# Migration queue — components still living in launchstore-frontend & launchstore-storefront

**Total to migrate:** ~120 `.tsx` files across 17 categories (Hero stub is
already in `src/puck/components/homepage/Hero/`).

Each row = 1 PR that touches 3 repos:
1. **shared:** add new files at `src/puck/components/<category>/<Component>/`
2. **frontend:** delete duplicate, swap import site
3. **storefront:** delete duplicate, swap import site

The backend (`launchstore`) needs no per-component PR — registry regenerates
automatically each time shared's `prebuild` runs (and shipped via the new
`registry.json` consumer switch, see `roadmap.md`).

---

## Order & rationale

**Wave 1: presentational components (no data deps). Easy wins.** ~30 components
estimated. Each migration: 1-2 files, ~50-80 LoC, no live-API wiring.

| Status | Category | Component | Notes |
|---|---|---|---|
| ✅ stub | homepage | Hero | Already here as 5-file stub (T-002). Complete it as Wave 1.1 (move real frontend + storefront impl). |
| ☐ | homepage | CustomHTML | Pure HTML, no props besides inner content. |
| ☐ | homepage | StatsSection | Number cards, static props. |
| ☐ | homepage | TrustBadges | Image list. |
| ☐ | homepage | CountdownTimer | Client-only date math. |
| ☐ | homepage | PromotionalBannerGrid | Static layout. |
| ☐ | homepage | Testimonials | Carousel, mock data OK in editor. |
| ☐ | homepage | WhatsAppOptIn | Gated action, similar to Newsletter. |
| ☐ | homepage | Newsletter | Form action URL is static. |
| ☐ | content | (7) Link, Button, Image, etc. | All presentational — batch as one PR. |
| ☐ | layout | (7) FlexRow, FlexColumn, Header, Footer, etc. | Presentational wrappers. |
| ☐ | footer | (3) ContactInfo, Copyright, SocialIcons | Presentational. |
| ☐ | generic | (16) Button, Divider, List, Avatar, Spinner, ... | Mostly presentational, batch as one PR. |

**Wave 2: data-driven but with predictable props.** ~30 components. These
need a `*Client.tsx` variant that hits Medusa / Stripe / cart APIs.

| Status | Category | Component | Notes |
|---|---|---|---|
| ☐ | homepage | CategoriesGrid | Connects to Medusa categories. |
| ☐ | homepage | FeaturedProducts | Medusa products with featured flag. |
| ☐ | homepage | CategoryProducts | Dynamic by category handle. |
| ☐ | category | (5) Breadcrumbs, Title, Description, Metadata, Products | Mix of presentational + data. |
| ☐ | product | (18) ImageGallery, ProductMeta, AddToCart, etc. | Most read live product data. |
| ☐ | product-image-gallery | (3) Fullscreen, Minimal, Zoom | Carousel wrappers over ProductImageGallery. |
| ☐ | swiper | (5) ImageGallery, ProductCarousel, TestimonialCarousel, LogoCarousel, ContentSlider | All wrap react-id-swiper. |
| ☐ | navigation | (6) Logo, MenuNavigation, AccountButton, CartButton, SearchBar, SearchIcon | CartButton + SearchBar need cart/search APIs. |

**Wave 3: cart, checkout, order — high coupling.** ~25 components. These
talk to Medusa cart / checkout / order APIs and have the highest risk of
breaking the live storefront.

| Status | Category | Component | Notes |
|---|---|---|---|
| ☐ | cart | (6) CartItems, CartSummary, CartProgressBar, EmptyCart, CheckoutForm, OrderSummary | Most talk to `/api/cart` or Medusa SDK. |
| ☐ | checkout | (7) ShippingAddress, Payment, Review, etc. | Checkout step components. |
| ☐ | order | (4) OrderConfirmation, OrderDetails, OrderActions, OrderTimeline | Read order from props. |
| ☐ | account | (4) OrderHistory, AddressBook, AccountProfile, WishlistItems | Read customer data. |
| ☐ | form | (8) FormEmbed, FieldRenderers, etc. | Mostly wrappers around react-hook-form. |

**Wave 4: collections + remaining.** ~10 components.

| Status | Category | Component | Notes |
|---|---|---|---|
| ☐ | collection | (9) CollectionHero, ProductGrid, etc. | Read collection + its products. |
| ☐ | custom | (1) User-injected via Puck editor | Migrate last — structure varies per use. |

---

## Per-component checklist (paste into PR body)

```markdown
## Component: <Category>/<Component>

- [ ] shared: `src/puck/components/<category>/<Component>/index.ts` exports
- [ ] shared: `<Component>.tsx` (editor variant with stub data)
- [ ] shared: `<Component>Client.tsx` ONLY if it talks to live APIs
- [ ] shared: `<component>.meta.ts` (Puck fields + AI capability descriptor)
- [ ] shared: `<component>.types.ts` (zod schemas + TS types)
- [ ] shared: `npm run build` — registry contains the new component
- [ ] frontend: delete `components/page-builder/components/<category>/<Component>.tsx`
- [ ] frontend: swap all import sites to `@launchstore/shared-puck/components/<category>/<Component>`
- [ ] frontend: if there are Puck fields changes, swap to `<component>.fields` re-export
- [ ] storefront: delete `src/lib/puck/components/<category>/<Component>.tsx` (or `*Client.tsx`)
- [ ] storefront: swap import sites — prefer `*Client` variant
- [ ] storefront: if there are 2 variants in storefront (`X.tsx` + `XClient.tsx`), pick the one that matches the live renderer; delete the other (or keep both as `X.tsx` + `XClient.tsx` in shared)
- [ ] all 3 repos: typecheck passes locally
- [ ] PRs linked: shared PR → frontend PR → storefront PR
```

---

## Cadence

- **Wave 1 components** can ship as 1-component-per-PR or batched (e.g. all
  presentational `content/*` in one PR). Smaller PRs = easier review.
- **Wave 2+ components** = 1 per PR. Each touches the live storefront, so
  the storefront deploy cadence is the bottleneck.
- **Coupling check:** if a Puck page template references the component by
  hardcoded category path (e.g. `homepage/HeroSection`), the migration needs to
  update the template config too. Grep for the old import path before deleting.

## Tracking

Add a GitHub Project board column "Shared migration" linked to this file.
Each row gets the component name; PRs reference the row in their body.
