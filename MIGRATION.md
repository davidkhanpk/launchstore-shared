# Migration queue — components still living in launchstore-frontend & launchstore-storefront

**Total to migrate:** ~120 `.tsx` files across 17 categories.

**Status (2026-07-07):** 15 components migrated across 2 categories (homepage + content).
- HeroSection, CustomHTML, StatsSection, TrustBadges, CountdownTimer, PromotionalBannerGrid, Testimonials, Newsletter are in shared with `*.meta.ts`. (homepage/ — 8/8 done)
- All 7 `content/*` (Video, Text, Heading, Link, Image, RichTextContent, Button) are in shared with `*.meta.ts`. (content/ — 7/7 done)

Each row = 1 PR that touches 3 repos:
1. **shared:** add new files at `src/puck/components/<category>/<Component>/`
2. **frontend:** delete duplicate, swap import site
3. **storefront:** delete duplicate, swap import site

The backend (`launchstore`) needs no per-component PR — registry regenerates
automatically each time shared's `prebuild` runs.

---

## Status overview

| Wave | Status | Count | Components |
|---|---|---|---|
| ✅ done | Hero | 1 | `homepage/Hero` — full migration (editor extends fields; renderer uses as-is; AI registry populated) |
| Wave 1.1 | ✅ done | 7 | `homepage/CustomHTML, Testimonials, Newsletter, PromotionalBannerGrid, StatsSection, TrustBadges, CountdownTimer` — all migrated (WhatsAppOptIn deferred to Wave 2 since it gates on a backend hook) |
| Wave 1.2 | 4/4 done | 33 | `content/* (7/7 DONE)`, `layout/* (7/7 DONE)`, `footer/* (3/3 DONE)`, `generic/* (11/11 DONE — Wave 1.2d)` |
| Wave 2.1 | ☐ | 3 | `homepage/CategoriesGrid, FeaturedProducts, CategoryProducts` |
| Wave 2.2 | ☐ | 37 | `category/* (5)`, `product/* (18)`, `product-image-gallery/* (3)`, `swiper/* (5)`, `navigation/* (6)` |
| Wave 3 | ☐ | 29 | `cart/* (6)`, `checkout/* (7)`, `order/* (4)`, `account/* (4)`, `form/* (8)` |
| Wave 4 | ☐ | 10 | `collection/* (9)`, `custom/* (1)` |
| **Total remaining** | | **83** | (36 done, 83 to go) |

---

## Wave 1 migration pattern (proven by Hero)

How Hero migrated cleanly — copy this for Wave 1 components:

### Shared (single source of truth)

```
src/puck/components/<category>/<Component>/
├── index.ts              ← public re-exports
├── <Component>.tsx       ← Puck ComponentConfig (label + fields + defaultProps + render)
├── <component>.fields.ts ← Puck Field definitions (text/radio/select/custom/array/object)
├── <component>.meta.ts   ← AI capability descriptor (intent, searchTags, visualRole, dataDeps, props)
└── <component>.types.ts  ← TS interface for props
```

### Frontend (editor — extends fields, doesn't redefine)

```tsx
'use client';
import { HeroSection as SharedHeroSection } from '@launchstore/shared-puck';
import type { HeroSectionProps } from '@launchstore/shared-puck';
import MediaPickerField from '../../fields/MediaPickerField';
import ColorField from '@/components/theme/ColorField';

export const HeroSection = {
  ...SharedHeroSection,
  fields: {
    ...SharedHeroSection.fields,
    imageUrl: { type: 'custom', render: ({ value, onChange }) =>
      <MediaPickerField value={value || ''} onChange={onChange} />
    },
    textColor: { type: 'custom', render: ({ value, onChange }) =>
      <ColorField ... />
    },
  },
};
export type { HeroSectionProps };
export default HeroSection;
```

### Storefront (renderer — uses as-is, no custom widgets)

```tsx
import { HeroSection as SharedHeroSection } from '@launchstore/shared-puck';
export const HeroSection: any = SharedHeroSection;
export type { HeroSectionProps } from '@launchstore/shared-puck';
```

The `as any` cast on the renderer side is intentional — it's because Puck's
generic `Config` slot in the renderer is strictly-typed and doesn't quite match
the shared component's `ComponentConfig<HeroSectionProps>` shape at compile
time. Runtime is identical. Revisit when migrating all Wave 1+ components.

---

## Order & rationale (legacy table — see Status overview above for the consolidated view)

**Wave 1: presentational components (no data deps).** Easy wins.
Each migration: 1-2 files, ~50-80 LoC, no live-API wiring.

| Status | Category | Component | Notes |
|---|---|---|---|
| ✅ done | homepage | Hero | Full migration. See Wave 1 migration pattern above. |
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
