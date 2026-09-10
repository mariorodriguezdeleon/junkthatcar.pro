# PALETTE.md — Junk That Car Brand Colors

> Mirror of the client-approved palette: SharePoint `Clients/Junk_That_Car/jtc-color-palette.md`.
> Source of truth lives in SharePoint; this copy travels with the code. Update BOTH if the palette changes.

Applied in `src/app/globals.css` as the `brand-*` Tailwind scale + `jtc-*` semantic tokens.

## Primary colors

| Name | Hex | Usage | Token |
|---|---|---|---|
| Primary green | `#73CE18` | Primary buttons, links, active nav, brand accents | `brand-500` |
| Green, dark | `#5CA813` | **Hover/pressed fills only** (with white text) — never text-on-white (2.97:1) | `brand-700` |
| White | `#FFFFFF` | Page/card backgrounds | — |

## Neutrals

| Name | Hex | Usage | Token |
|---|---|---|---|
| Light tint | `#EEF2E9` | Section backgrounds, alternating rows | `jtc-tint` |
| Charcoal | `#212B18` | Body text, headings, footer bg; text-on-green | `brand-950` / `jtc-charcoal` |
| Slate gray | `#5F6B57` | Secondary text, captions | `jtc-slate` |
| Border gray | `#DCE3D4` | Card borders, dividers | `jtc-border` |
| Footer muted | `#A9B29F` | Secondary text on charcoal footer | `jtc-footer-muted` |

## Accent

| Name | Hex | Usage | Token |
|---|---|---|---|
| Amber | `#FFA726` | Urgency CTAs only ("Same-day pickup"), max 1/page, never beside the green CTA | `jtc-amber` |

## Contrast (verified 2026-09-10)

| Pair | Ratio | Result |
|---|---|---|
| Charcoal on green (buttons) | 7.43:1 | AA ✓ |
| White on charcoal (footer) | 14.75:1 | AAA ✓ |
| Footer-muted on charcoal | 6.71:1 | AA ✓ |
| Charcoal on white (body) | 14.75:1 | AAA ✓ |
| Slate on white | 5.63:1 | AA ✓ |
| Slate on tint | 4.97:1 | AA ✓ |
| Charcoal on tint | 13.01:1 | AAA ✓ |
| Charcoal on amber | 7.59:1 | AA ✓ |
| Green-800 (`#3F7A10`) accent text on white | 5.25:1 | AA ✓ |

**Rule:** green accent *text* on white uses `brand-800` (`#3F7A10`, 5.25:1), not `brand-700` (2.97:1 — large-text fail). `brand-700` is a hover/pressed *fill* only.

## Usage rules (from the client palette, unchanged)

1. Green is the hero color; `#5CA813` only for hover/pressed.
2. Text on green: always charcoal, never white/black.
3. Footer (charcoal): white primary text, `#A9B29F` muted.
4. White default background; `#EEF2E9` for section separation.
5. Borders `#DCE3D4` — avoid pure black/gray borders.
6. Amber optional and rare — one CTA/badge per page max, never beside the green CTA.
7. No new colors without updating this file + the SharePoint source.
