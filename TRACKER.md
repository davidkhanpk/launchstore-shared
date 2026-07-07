# launchstore-shared Migration Tracker

> Project plan for completing the puck component migration from
> `launchstore-storefront` + `launchstore-frontend` into
> `launchstore-shared`. Each component = 1 PR batch that touches
> the shared repo + 2 consumer commits.

## Snapshot (2026-07-07)

- **37 / 120 components migrated to shared** (30.8%)
- **5 categories complete**: homepage, content, layout, footer, generic
- **83 components remain** across Wave 2.1 (2 deferred) + Wave 2.2 (37) + Wave 3 (~29) + Wave 4 (~10) + Phase 5

**Migration framework (proven across 37 components)**:
1. Shared file = 5 files (`.tsx` + `.fields.ts` + `.meta.ts` + `.types.ts` + `index.ts`)
2. Source-of-truth = storefront's source code, unless storefront lacks the component (then frontend is canonical)
3. Frontend wrapper spreads shared + overrides color fields with `ColorField` widget; `MediaPickerField` for image srcs; data-injection wrappers call existing hooks (useMenu, useMultipleMenus) before passing to presentational shared
4. Storefront wrapper = thin re-export (pure Puck field) OR data-fetching wrapper that fetches / projects + passes into shared
5. State components (Tabs/Accordion) keep useState in shared (re-render on user click is fine)
6. lucide-react and @heroicons inline-SVG'd in shared to keep dep tree minimal
7. Dead fields dropped silently; log in commit message
8. MIGRATION.md updated per-wave
9. Build must pass: `npm run build` → registry count increment + dist/index.d.ts present

## Epic Backlog

| # | Epic | Components | Status | Owner | Notes |
|---|---|---|---|---|---|
| E-W1.1 | Wave 1.1 homepage | 7 | ✅ DONE | — | completed in earlier sessions |
| E-W1.2a | Wave 1.2a content | 7 | ✅ DONE | — | this session |
| E-W1.2b | Wave 1.2b layout | 7 | ✅ DONE | — | this session |
| E-W1.2c | Wave 1.2c footer | 3 | ✅ DONE | — | this session |
| E-W1.2d | Wave 1.2d generic | 11 | ✅ DONE | — | this session |
| E-W2.1 | Wave 2.1 homepage data-driven | 3 | 1/3 done | — | 1 done; 2 deferred pending ProductPreview decision |
| **E-W2.1R** | **Wave 2.1 remaining** | **2** | **☐ BLOCKED** | **—** | **unblock D-1 (ProductPreview)** |
| E-W2.2 | Wave 2.2 category/product/nav | 37 | ☐ | — | 5 sub-categories, mostly data-driven |
| E-W3 | Wave 3 cart/checkout/order/account/form | 29 | ☐ | — | cart context coupling |
| E-W4 | Wave 4 collection/custom | 10 | ☐ | — | mostly Medusa data |
| **E-P5** | **Phase 5 publish** | **n/a** | **☐** | **—** | **git remote publish + dep swap** |
| **E-CC** | **Cross-cutting decisions** | **5** | **☐** | **—** | **decisions blocking waves** |

## Cross-cutting decisions (gating)

| ID | Decision | Blocks | Options | Recommended |
|---|---|---|---|---|
| **D-1** | ProductPreview migration strategy | W2.1R + W2.2 (product/*) + W3 (cart/checkout) | (A) Migrate ProductPreview into shared as `SharedProductCard` (~300-500 LoC). (B) Render-prop escape hatch — shared takes `renderProduct?: (product, region) => ReactNode`; storefront passes its own ProductPreview. | **(B)** — keeps Wave 2.1-2/3 tight; defer ProductPreview lift to a focused wave once cart needs it too. |
| **D-2** | Storefront Swiper CSS import strategy | W2.2 (swiper/* + product-image-gallery/*) + W3 if carousels used | (A) Per-component side-effect import (`import 'swiper/css'`). (B) Global _app.tsx CSS pre-import. (C) CSS-in-JS via stylesheet tag. | **(B)** — single line in `_app.tsx`; per-component imports redundant. |
| **D-3** | Cart context contract | W3 (cart/* + checkout/* + order/*) | (A) Define `CartProvider` shared via shared-puck (creates dep on storefront SDK). (B) Pass cart state via prop drilling. (C) Forward-ref pattern. | **(A)** — `<CartProvider>` in shared; storefront wires the real SDK bridge. |
| **D-4** | Data-fetching contract for *Client wrappers | W2.1R, W2.2, W3, W4 | (A) Each consumer hardcodes its own fetch paths (current pattern). (B) Shared exposes a `<DataSource>` wrapper that takes a fetcher function as prop. | **(A)** for now; **(B)** if/when 5+ consumers need the same shape. |
| **D-5** | Storage of selected IDs (pattern) | All data-driven | Currently mixed: storefront uses comma-separated strings, frontend uses `string[]`. Per-tracker: standardize on `string[]` going forward (the format CategoriesGrid established). | **Standardize on `string[]`** retroactively where existing component uses string. |

## Task breakdown

### Epic W2.1R — Wave 2.1 remaining (BLOCKED on D-1)

| ID | Component | Files (storefront) | Files (frontend) | Status | Notes |
|---|---|---|---|---|---|
| T-038 | FeaturedProducts | `homepage/FeaturedProducts.tsx` + `FeaturedProductsClient.tsx` (~258 + 259 LoC) | `homepage/FeaturedProducts.tsx` (~395 LoC) | ☐ blocked | Uses `<ProductPreview>` + `region` + Swiper carousel. Decide D-1 first. |
| T-039 | CategoryProducts | `homepage/CategoryProducts.tsx` + `CategoryProductsClient.tsx` (~315 + 274 LoC) | `homepage/CategoryProducts.tsx` (~511 LoC, factory pattern) | ☐ blocked | Same D-1 dependency as T-038. |

### Epic W2.2 — category (5 components)

| ID | Component | Files (storefront) | Files (frontend) | Status |
|---|---|---|---|---|
| T-040 | CategoryBreadcrumbs | `category/CategoryBreadcrumbs.tsx` | `category/CategoryBreadcrumbs.tsx` | ☐ |
| T-041 | CategoryTitle | `category/CategoryTitle.tsx` | `category/CategoryTitle.tsx` | ☐ |
| T-042 | CategoryDescription | `category/CategoryDescription.tsx` | `category/CategoryDescription.tsx` | ☐ |
| T-043 | CategoryMetadata | `category/CategoryMetadata.tsx` | `category/CategoryMetadata.tsx` | ☐ |
| T-044 | CategoryProductsGrid | `category/CategoryProductsGrid.tsx` | `category/CategoryProductsGrid.tsx` | ☐ likely uses ProductPreview → D-1 |

### Epic W2.2 — product (18 components)

| ID | Component | Files (storefront) | Status | Notes |
|---|---|---|---|---|
| T-045 | ProductCard | `product/ProductCard.tsx` | ☐ | central card; should use sharedcard → D-1 |
| T-046 | ProductAccordion | `product/ProductAccordion.tsx` | ☐ | |
| T-047 | ProductBreadcrumbs | `product/ProductBreadcrumbs.tsx` | ☐ | |
| T-048 | ProductTitle | `product/ProductTitle.tsx` | ☐ | |
| T-049 | ProductDescription | `product/ProductDescription.tsx` | ☐ | |
| T-050 | ProductMetadata | `product/ProductMetadata.tsx` | ☐ | |
| T-051 | ProductPrice | `product/ProductPrice.tsx` | ☐ | |
| T-052 | ProductRating | `product/ProductRating.tsx` | ☐ | |
| T-053 | ProductReviews | `product/ProductReviews.tsx` | ☐ | |
| T-054 | ProductVariantSelector | `product/ProductVariantSelector.tsx` | ☐ | |
| T-055 | ProductImageGallery | `product/ProductImageGallery.tsx` | ☐ | |
| T-056 | AddToCart | `product/AddToCart.tsx` | ☐ | uses CartContext → D-3 |
| T-057 | QuantitySelector | `product/QuantitySelector.tsx` | ☐ | |
| T-058 | WishlistButton | `product/WishlistButton.tsx` | ☐ | |
| T-059 | StockIndicator | `product/StockIndicator.tsx` | ☐ | |
| T-060 | BundledProductDetail | `product/BundledProductDetail.tsx` | ☐ | |
| T-061 | RelatedProducts | `product/RelatedProducts.tsx` | ☐ | uses ProductCard → D-1 |
| T-062 | RecentlyViewedProducts | `product/RecentlyViewedProducts.tsx` | ☐ | |

### Epic W2.2 — product-image-gallery (3 components)

| ID | Component | Files (storefront) | Status | Notes |
|---|---|---|---|---|
| T-063 | ImageGalleryMinimal | `product-image-gallery/ImageGalleryMinimal.tsx` | ☐ | |
| T-064 | ImageGalleryZoom | `product-image-gallery/ImageGalleryZoom.tsx` | ☐ | |
| T-065 | ImageGalleryFullscreen | `product-image-gallery/ImageGalleryFullscreen.tsx` | ☐ | |

### Epic W2.2 — swiper (5 components)

| ID | Component | Files (storefront) | Status | Notes |
|---|---|---|---|---|
| T-066 | ImageGallery | `swiper/ImageGallery.tsx` | ☐ | CSS side-effect import → D-2 |
| T-067 | ProductCarousel | `swiper/ProductCarousel.tsx` | ☐ | may use ProductCard → D-1 |
| T-068 | TestimonialCarousel | `swiper/TestimonialCarousel.tsx` | ☐ | |
| T-069 | LogoCarousel | `swiper/LogoCarousel.tsx` | ☐ | |
| T-070 | ContentSlider | `swiper/ContentSlider.tsx` | ☐ | |

### Epic W2.2 — navigation (10 components)

| ID | Component | Files (storefront) | Status | Notes |
|---|---|---|---|---|
| T-071 | Logo | `navigation/Logo.tsx` | ☐ | simple |
| T-072 | MenuNavigation | `navigation/MenuNavigation.tsx` | ☐ | uses useMenu (frontend has hook; storefront lacks) |
| T-073 | MenuNavigationRenderer | `navigation/MenuNavigationRenderer.tsx` | ☐ | |
| T-074 | CategoryMegaMenu | `navigation/CategoryMegaMenu.tsx` | ☐ | uses Category data |
| T-075 | MobileMenu | `navigation/MobileMenu.tsx` | ☐ | |
| T-076 | MobileMenuItem | `navigation/MobileMenuItem.tsx` | ☐ | |
| T-077 | SearchBar | `navigation/SearchBar.tsx` | ☐ | needs search API; may use cart-mode pattern |
| T-078 | SearchIcon | `navigation/SearchIcon.tsx` | ☐ | may duplicate Icon from Wave 1.2d |
| T-079 | AccountButton | `navigation/AccountButton.tsx` | ☐ | needs auth context |
| T-080 | CartButton | `navigation/CartButton.tsx` | ☐ | needs CartContext → D-3 |

### Epic W3 — cart (7 components)

| ID | Component | Files (storefront) | Status | Notes |
|---|---|---|---|---|
| T-081 | CartItems | `cart/CartItems.tsx` | ☐ | CartContext-bound → D-3 |
| T-082 | CartItemsPreview | `cart/CartItemsPreview.tsx` | ☐ | |
| T-083 | CartProgressBar | `cart/CartProgressBar.tsx` | ☐ | |
| T-084 | CartSummary | `cart/CartSummary.tsx` | ☐ | |
| T-085 | EmptyCart | `cart/EmptyCart.tsx` | ☐ | |
| T-086 | SignInPrompt | `cart/SignInPrompt.tsx` | ☐ | |
| T-087 | OrderSummary | `cart/OrderSummary.tsx` | ☐ | shared with checkout |

### Epic W3 — checkout (6 components)

| ID | Component | Files (storefront) | Status |
|---|---|---|---|
| T-088 | CheckoutForm | `cart/CheckoutForm.tsx` (or `checkout/`) | ☐ |
| T-089 | ShippingAddress | `checkout/ShippingAddress.tsx` | ☐ |
| T-090 | ShippingMethod | `checkout/ShippingMethod.tsx` | ☐ |
| T-091 | PaymentMethod | `checkout/PaymentMethod.tsx` | ☐ |
| T-092 | DiscountCode | `checkout/DiscountCode.tsx` | ☐ |
| T-093 | OrderReview | `checkout/OrderReview.tsx` | ☐ |
| T-094 | OrderTotals | `checkout/OrderTotals.tsx` | ☐ |

### Epic W3 — order (4 components)

| ID | Component | Files (storefront) | Status |
|---|---|---|---|
| T-095 | OrderConfirmation | `order/OrderConfirmation.tsx` | ☐ |
| T-096 | OrderDetails | `order/OrderDetails.tsx` | ☐ |
| T-097 | OrderActions | `order/OrderActions.tsx` | ☐ |
| T-098 | OrderTimeline | `order/OrderTimeline.tsx` | ☐ |

### Epic W3 — account (4 components)

| ID | Component | Files (storefront) | Status | Notes |
|---|---|---|---|---|
| T-099 | AccountProfile | `account/AccountProfile.tsx` | ☐ | needs auth customer-context |
| T-100 | AddressBook | `account/AddressBook.tsx` | ☐ | |
| T-101 | OrderHistory | `account/OrderHistory.tsx` | ☐ | |
| T-102 | WishlistItems | `account/WishlistItems.tsx` | ☐ | |

### Epic W3 — form (8 components)

| ID | Component | Files (storefront) | Status |
|---|---|---|---|
| T-103 | FormContainer | `form/FormContainer.tsx` | ☐ |
| T-104 | FormContext | `form/FormContext.tsx` | ☐ |
| T-105 | FormField | `form/FormField.tsx` | ☐ |
| T-106 | FormHeading | `form/FormHeading.tsx` | ☐ |
| T-107 | FormDivider | `form/FormDivider.tsx` | ☐ |
| T-108 | FormChoiceField | `form/FormChoiceField.tsx` | ☐ |
| T-109 | FormSelectField | `form/FormSelectField.tsx` | ☐ |
| T-110 | FormSubmitButton | `form/FormSubmitButton.tsx` | ☐ |
| T-111 | FormEmbed | `form/FormEmbed.tsx` | ☐ |

### Epic W4 — collection (10 components)

| ID | Component | Files (storefront) | Status |
|---|---|---|---|
| T-112 | CollectionBreadcrumbs | `collection/CollectionBreadcrumbs.tsx` | ☐ |
| T-113 | CollectionTitle | `collection/CollectionTitle.tsx` | ☐ |
| T-114 | CollectionDescription | `collection/CollectionDescription.tsx` | ☐ |
| T-115 | CollectionHeader | `collection/CollectionHeader.tsx` | ☐ |
| T-116 | CollectionMetadata | `collection/CollectionMetadata.tsx` | ☐ |
| T-117 | Pagination | `collection/Pagination.tsx` | ☐ |
| T-118 | ProductFilters | `collection/ProductFilters.tsx` | ☐ |
| T-119 | ProductGrid | `collection/ProductGrid.tsx` | ☐ |
| T-120 | ProductSort | `collection/ProductSort.tsx` | ☐ |
| T-121 | SavedBlock | `collection/SavedBlock.tsx` | ☐ |

### Epic W4 — custom (1 component)

| ID | Component | Files (storefront) | Status |
|---|---|---|---|
| T-122 | Custom | `custom/Custom.tsx` | ☐ user-injected; structure varies |

### Epic P5 — Phase 5: publish & remote (BLOCKED on T-122)

| ID | Task | Status | Notes |
|---|---|---|---|
| T-123 | Decide publish target (GitHub vs npm) | ☐ | GitHub for source + npm for convenience. |
| T-124 | `git remote add origin git@github.com:launchstore/shared-puck.git` | ☐ | |
| T-125 | Push `main` (initial) + tag `v0.0.1` | ☐ | |
| T-126 | Swap `launchstore-frontend/package.json` dep to `github:launchstore/shared-puck#v0.0.1` | ☐ | from `file:../launchstore-shared` |
| T-127 | Swap `launchstore-storefront/package.json` dep similarly | ☐ | |
| T-128 | (optional) Publish to npm as `@launchstore/shared-puck@0.0.1` | ☐ | |

## Per-component migration recipe (template)

For each task T-### above:

1. **Inventory** (sub-agent read both files + 1-line drift summary)
2. **Decide source-of-truth** = storefront when it has the file, else frontend
3. **Pick named widget overrides** needed (ColorField per color, MediaPickerField per image src, etc.)
4. **Write shared 5 files**: `Component.tsx` + `component.fields.ts` + `component.meta.ts` + `component.types.ts` + `index.ts`
5. **Register** in `src/puck/components/index.ts` under `category/<Name>/`
6. **Build** `npm run build` (verify registry count increment + tsc clean)
7. **Commit shared**: `feat(shared): migrate X (wave Y/N)`
8. **Write frontend wrapper**: spread shared + override fields + inject data
9. **Write storefront wrapper**: thin re-export OR data-fetching wrapper
10. **Commit frontend + storefront** (1 commit each)
11. **Update MIGRATION.md**: mark the task done
12. **Tombstone orphan files**: delete `*Client.tsx` if a Client wrapper was replaced; delete dead frontend dupes under generic/homepage that were migrated earlier
13. **Final batch check**: registry.json component count matches expected; no duplicate exports

## Velocity tracking

- Wave 1.1: 7 components in 1 turn
- Wave 1.2a: 7 components in 1 turn
- Wave 1.2b: 7 components in 2 batches (Header/Footer deferred-by-complexity kept the rest fast)
- Wave 1.2c: 3 components in 1 turn
- Wave 1.2d: 11 components in 3 batches (Icon's 87-icon catalog curated to 38; List/Tabs/Accordion stateful Puck components)
- Wave 2.1-1: 1 component CategoriesGrid in 1 turn (CategoriesGridClient.tsx deleted)
- **Estimated**: 1 component per ~3-5 minutes batch + 1 commit overhead per repo
- **Projected batches for 82 remaining**: ~15-25 turns across categories

## Status updates

When a task or epic completes, the commit message should include:
- The task ID (T-###)
- Wave number
- A 1-line drift summary if non-trivial
- A note on what was deleted if any
- Build/registry count verification
