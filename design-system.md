# PPR Design System v1.0

*Extracted from the homepage and "How we work" prototypes.*

This sits alongside `brand-brief.md`. The brand brief is the strategic foundation (positioning, voice, palette, type, principles). This doc is the implementation: tokens, primitives, components, motion. Five colours, one typeface, one motion easing, one illustration vocabulary derived from the logo emblem.

For a live visual reference, open `design-system.html`. For the prose specifications, read on.

---

## 1. Tokens

### Colour

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0E1116` | Primary text, headlines, mass plates |
| `--paper` | `#FAF7F2` | Page background; reversed-out text on mass plates |
| `--burgundy` | `#7B2D3A` | Single accent. Links, ring bullets, wedge marks, pillar tags, emphasis. Never used as a fill for body type. |
| `--slate` | `#5C5C5C` | Secondary text (ledes, captions, monospace micro-labels, footer copy) |
| `--stone` | `#E6E0D6` | Dividers, hairlines, surface tints |

All five tokens are CSS custom properties on `:root` in `styles.css`. Use the variables, not the hex codes, anywhere a colour appears.

### Typography

- **One typeface: Georgia.** Body, headings, marginalia. Ships on every device, MS Office, Adobe — no Google Fonts, no licences.
- **One sans for utility:** `--font-mono` (system monospace) for eyebrows, call-numbers, rail labels — never for prose.

| Role | Size | Line-height | Weight | Notes |
|---|---|---|---|---|
| Hero (home) `h1` | 68px / 40px mobile | 1.04 | 400 | `letter-spacing: -0.018em`, `text-wrap: balance` |
| Long-form `h1` | 56px / 36px mobile | 1.04 | 400 | `letter-spacing: -0.014em` |
| `h2` | 32px / 26px mobile | 1.2 | 400 | `letter-spacing: -0.005em` |
| `h3` / pillar title | 22px / 19px mobile | 1.25 | 400 | |
| Long-form body | 17px / 16px mobile | 1.72 | 400 | Slightly looser than 1.6 — long-form needs it |
| Default body | 17px | 1.6 | 400 | |
| Lede | 21px / 18px mobile | 1.5 | 400 | Italic, Slate |
| Pillar body | 15px | 1.6 | 400 | Slate |
| Take-part / quiet pointer | 16px | — | 400 | Slate, with Burgundy link |
| Footer | 14px | — | 400 | Slate |
| Brand wordmark | 15px / 13px mobile | 1.08 | 400 | Uppercase, `letter-spacing: 0.04em` |
| Eyebrow (monospace) | 10px (10–11 for rail items, 9 for rail label) | — | 400 | Uppercase, `letter-spacing: 0.18em`, Burgundy |

Use `font-variant-numeric: oldstyle-nums` for inline Georgia figures; `lining-nums tabular-nums` for any tabular data.

### Layout & measure

| Token | Value | Use |
|---|---|---|
| `--max-page` | 1100px | Homepage, contact, take-part wrappers |
| `--max-long` | 1040px | Long-form pages (rail + content) |
| `--max-content` | 60ch | Long-form prose column |
| `--max-prose` | 70ch | Generic prose max-width |

Body measure stays at **60–70 characters per line**. Hero headlines run to 14–16ch and use `text-wrap: balance`.

### Spacing rhythm

Vertical rhythm uses 6 stops, in this order from tight to wide:

- 6, 8, 12, 14 — inside compact components (pillar marks, rail items)
- 18, 22, 24, 28 — between paragraphs, between lede and body
- 32, 44, 48, 56 — between blocks
- 72, 88, 96 — between major sections, between page sections and the footer

These are pixel values, not tokens — for legibility in `styles.css`. If we ever need to scale the whole rhythm, promote to `--space-1` through `--space-12`.

### Hairlines

`0.5px solid var(--stone)` for structural dividers (header bottom, pillars top/bottom, footer top, rail-collapsed-mobile bottom). `0.5px solid var(--burgundy)` only when a divider needs emphasis — currently unused on the site.

### Motion tokens

| Token | Value | Use |
|---|---|---|
| `--ease-settle` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | All entrance and hover settles |
| `--t-hover` | 200ms | Hover state changes (nav, links, wedge nudges) |
| `--t-pop` | 260ms | Emblem element fade-in |
| `--t-reveal` | 720ms | Page entrance reveal (.reveal class) |

One easing curve. Never bouncy. Never `ease-in-out`.

---

## 2. Illustration primitives

All illustration derives from the logo emblem. Three primitives are in active use; four more are documented as available extensions (explored during direction work; reserved for future content needs).

### In use

#### `EmblemMark` — the full logo

The six-figure mark. Three contexts:

- **Header lockup**: 44px (36px mobile), Ink, sits beside the wordmark.
- **Hero watermark** (homepage only): 540px (440 / 360 / 300 at breakpoints), Burgundy at `opacity: 0.13` (0.08 on mobile). Anchored top-right of the hero, can float past the page-max.
- **Page mark** (optional, reserved): 28–32px, Burgundy at 0.5 opacity, can sit above a long-form `h1`. Not currently deployed — restraint wins until a page needs it.

The watermark animates on first load: heads fade in clockwise from 12 o'clock (80ms apart, ~250ms each), then the chevron polygons in the same order. ~800ms total. One-off — never re-runs on re-navigation.

#### `Wedge` — single chevron arm extracted from the emblem body

A thin Burgundy chevron pointing left, used as a wayfinding/pointer marker. Never as a section divider (the chevron-as-divider experiments read as too decorative).

- **Pillar marker**: 14×10px, beside the `PILLAR I / II / III` monospace tag. Nudges 2px right + stroke thickens 4→5 on tile hover.
- **Rail item marker**: 18×13px, beside each rail link. Stone when inactive, Burgundy when active. Stroke thickens 4→6 on active, 4→5 on hover. Item shifts 3px right on hover.
- **Inline link pointer**: a small `›` after a Burgundy link (e.g., "See here ›"). Translates 3px right on link hover.

#### `RingBullet` — hollow Burgundy ring derived from the emblem heads

A 12px hollow ring with wall thickness matching the logo head proportions (~47% of outer radius). Used **only as a list bullet** in a `.ring-list`, never as a decorative dot.

Centre of the bullet aligns with the visual middle of the first line of its text item — i.e., translated 2px below the baseline so it sits at the text's x-height midpoint. (`transform: translateY(2px)` on a 12px SVG.)

### Available, not currently deployed

These were explored during direction work; held in reserve for content that genuinely calls for them. They are documented so that future pages don't reinvent.

- **RadialFan** — six chevrons fanning outward, heads stripped. Avoided here because it reads heraldic/religious at the wrong scale.
- **RingConstellation** — the six heads laid out radially without chevrons. Could be a chapter indicator if multi-section pages grow.
- **CountStrip** — linear row of hollow rings, one ring per unit. Reserved for any future statistical callout.
- **ChevronQuoteOpen/Close** — doubled chevrons used as quotation marks. Reserved for any participant pull-quote, should we ever surface one publicly.

When extending the system, prefer to reuse a primitive over inventing a new shape.

### Hard rule: section dividers

Do not use the chevron as a section divider. If a section transition needs marking, use **the logo** (small, ~28px, Burgundy at 0.5 opacity) or **nothing at all** (whitespace + the heading). On the current pages, "nothing at all" is the chosen default.

---

## 3. Components

Every component sits in `styles.css` under its own block. The class names below are the canonical ones.

### `header.site` + `.brand`

Site header with inline-SVG emblem + Georgia wordmark on the left, primary nav on the right. 0.5px Stone hairline at the bottom. Mobile: stacks to column.

Active nav link uses `aria-current="page"` — styled Burgundy underline.

### `footer.site`

Copyright left, secondary nav right. 0.5px Stone hairline at the top. Slate text, Burgundy underlines on hover.

### `.home-hero`

Homepage-only. Position-relative wrapper containing the emblem watermark, an `<h1>`, and a supporting `.hero-sub` paragraph. The watermark uses inline SVG so its 12 elements (6 heads + 3 chevron groups + their internals) can stage their entrance.

### `.pillars` + `.pillar`

Three-column tile grid (collapses to single column under 760px). Each tile is a `.pillar-mark` (wedge + `PILLAR I` monospace tag), an `<h3>`, and a body paragraph. Hover state: wedge nudges right, stroke thickens.

### `.take-part-pointer`

Quiet text + Burgundy link with chevron-style `›` arrow. Used as the homepage's only direct participant-facing line. Arrow translates on hover.

### `.long-form` + `.rail` + `.long-content`

Long-form page layout. 180px left rail (sticky, "On this page" wayfinding) + content column (max 64ch). Mobile (<800px): rail collapses to a horizontal row at the top.

The rail is one `.rail-item` per section, each linking to an `id` on the corresponding content section. Sections carry `data-section-id`. JS scroll-spy activates the topmost-visible section.

Click on a rail item smooth-scrolls (or instant-scrolls for `prefers-reduced-motion`).

### `.ring-list`

Bulleted list using the hollow `RingBullet` primitive. Grid layout (14px bullet column + 1fr text). Items have `align-items: baseline` and the bullet is `translateY(2px)` to centre on text x-height.

### Forms (existing, retained)

`.form-group` (label + input/textarea), `button.submit`, and `.ms-forms-embed` (iframe wrapper). All Georgia, all square corners (no border-radius). Focus state uses Burgundy outline at 1px inset.

### Links

Default link is Burgundy text + Burgundy 1px bottom border. Hover thickens the border to 2px. No colour change on hover.

---

## 4. Motion principles

### One easing, three durations

- **`--ease-settle`** for everything that moves. No exceptions. Never bouncy.
- **200ms** for hover state changes (`--t-hover`).
- **260ms** for emblem element fade-in (`--t-pop`).
- **720ms** for page entrance reveals (`--t-reveal`).

If a new motion needs a different duration, it should fit one of these three tiers. If it doesn't, the motion is probably wrong.

### Entrance choreography

**Page reveal.** Every above-the-fold element wears `.reveal`, which runs a 720ms `translateY(14px) → 0` + opacity fade. Per-element stagger via `--delay` CSS custom property. Header at 0ms; hero h1 at 80ms; hero sub at 220ms; pillars at 0/80/160ms.

**Emblem watermark.** The 6 heads fade in clockwise from 12 o'clock (`hd-0` … `hd-5`, 50ms apart, 260ms each), then the 3 chevron polygons in the same direction (`ch-0` … `ch-2`, 60ms apart). Total ~800ms. One-off.

### Hover affordances

| Element | Effect |
|---|---|
| Nav link | Colour → Burgundy + 1px Burgundy underline |
| Body link | Bottom-border 1px → 2px |
| Pillar tile | Wedge translates 2px right + stroke thickens |
| Take-part link arrow | Translates 3px right |
| Rail item | Translates 3px right + Burgundy colour |
| Brand emblem | Tints Burgundy |

Note: the brief said "Burgundy underlines that grow" — implemented as `border-bottom-width: 1px → 2px`, not `text-decoration`. This avoids the default underline's bad descender clearance with Georgia.

### Reduced motion

`@media (prefers-reduced-motion: reduce)`:

- All `animation-duration` and `transition-duration` clamped to `0.001ms`.
- `.reveal` stays opacity 1, transform none.
- Emblem heads/chevrons stay opacity 1.
- `scroll-behavior: auto` (no smooth scroll).

Nothing relies on motion for understandability. The site is functionally identical without it.

---

## 5. Layout & accessibility

### Page templates

- **Homepage** (`index.html`): `header.site` + `main.page` containing `.home-hero` + `.pillars` + `.take-part-pointer` + `footer.site`.
- **Long-form** (`how-we-work.html`, future `privacy.html`): `header.site` + `main.long-form` (`.rail` + `.long-content`) + `footer.site`.
- **Form-led** (future `contact.html`, `take-part.html`): `header.site` + `main.page` with a heading, lede, and `.form-group` blocks + `footer.site`.

### Accessibility

- All interactive controls keyboard-reachable; visible focus uses Burgundy outline.
- Nav active state uses `aria-current="page"` (not just a class). CSS targets the attribute.
- All decorative SVG (`brand-emblem`, `wedge`, `ring-bullet`, `emblem-watermark`) carries `aria-hidden="true"`.
- The `.rail` is `<aside aria-label="On this page">`; rail links are real anchors that work with JS off.
- Colour contrast: Ink on Paper passes WCAG AAA. Slate on Paper passes AA for body. Burgundy on Paper passes AA for body. Paper on Burgundy (reversed-out mass plates, when used) passes AA.
- Headings always describe in document order (`h1` → `h2` → `h3`). No skips. Pillar titles are `h3` because they sit under the implied "What we do" `h2` of the section (which is `aria-label`-only on `.pillars`).

### Responsive breakpoints

- **980px** — homepage hero scales down; watermark shrinks.
- **800px** — long-form rail collapses to horizontal row.
- **720px** — header stacks; nav wraps; type scale steps down across the board.
- **480px** — homepage h1 final reduction.

No 1440+ breakpoint. Beyond `--max-page` the page just stays centred.

---

## 6. What we deliberately do not have

To prevent scope creep and keep the system small:

- **No card-with-shadow** — surfaces use hairlines or solid mass plates. No drop shadows anywhere.
- **No corner radius** — every box and form input is square-cornered. The only round things are the ring bullets and the emblem heads.
- **No gradients.**
- **No icon set.** The wedge mark + ring bullet + emblem cover every illustrative need on the current site. If a future page genuinely needs a new symbol, derive it from the emblem.
- **No second typeface.** Georgia does headings AND body. The monospace eyebrow is for the rare utility label, not a second voice.
- **No section dividers using chevrons.** Either the logo, or nothing.
- **No third-party fonts, no build step, no framework migration.**
- **No team identification, no client logos, no "About" section.** (Per brand brief.)

---

## 7. Files

| Path | What it is |
|---|---|
| `brand-brief.md` | Strategic foundation (sibling) |
| `design-system.md` | This document |
| `design-system.html` | Live visual catalogue — open in browser |
| `website-content.md` | All locked copy (sibling) |
| `styles.css` | The system, in CSS |
| `index.html` | Homepage template |
| `how-we-work.html` | Long-form template |
| `logos/ppr-emblem.svg` | Source vector |
| `logos/ppr-long.svg` | Source horizontal lockup |
| `logos/ppr-stacked.png` | Source stacked lockup (raster) |
| `logos/ppr-mark.png` | Source mark (raster) |

---

*v1.0 — locked at end of prototype Step 4. Future changes to tokens or primitives should update this document and bump the version.*
